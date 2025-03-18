import { spawn } from "child_process";
import { readFile } from "fs/promises";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import { Parser as M3U8Parser } from "m3u8-parser";
import { pick } from "lodash";
import { env } from "~/env";
import { cn } from "~/lib/utils";
import { bucket, storageRoot } from "~/server/storage";
import { HLSVideo } from "./client";

export interface VideoProps
  extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  width: number;
  height: number;
  imagePriority?: boolean;
  imageSizes: string;
}

export function Video({ className, src, muted, ...props }: VideoProps) {
  const t = useTranslations("video");
  const messages = useMessages();

  const root = src.split(".")[0];
  const m3u8FileName = `${root}.m3u8`;
  const m3u8Path = `${process.cwd()}/video/hls/${m3u8FileName}`;
  const jpgFileName = `${root}.jpg`;
  const jpgPath = `${process.cwd()}/video/hls/${jpgFileName}`;

  const videoUrl = storageRoot + m3u8FileName;
  const videoPosterUrl = storageRoot + jpgFileName;

  fetch(videoUrl)
    .then(function (cdnFile) {
      const fileExists = cdnFile.ok;

      if (!fileExists && env.NODE_ENV !== "development") {
        throw new Error("File does not exist");
      }
    })
    .catch(function (err) {
      console.warn(`Could not fetch ${src}`, err);
    });

  if (env.NODE_ENV === "development") {
    const command = `
      ffmpeg -y -i ${process.cwd()}/video/${src} -codec: copy -start_number 0 -hls_time 1 -hls_flags split_by_time -hls_list_size 0 -f hls ${m3u8Path} && ffmpeg -y -i ${m3u8Path} -ss 0 -vframes 1 -update 1 ${jpgPath}
    `.trim();

    const { stdout: stream } = spawn(command, {
      stdio: ["pipe", "pipe", "inherit"],
      cwd: process.cwd(),
      shell: true,
    });

    stream
      .once("error", function (err) {
        console.warn(err);
      })
      .once("end", async function () {
        await bucket.upload(jpgPath, {
          destination: jpgFileName,
        });

        const m3u8DataStr = await readFile(m3u8Path, "utf8");
        const parser = new M3U8Parser();
        parser.push(m3u8DataStr);
        parser.end();
        const m3u8Data = parser.manifest;

        for (const segment of m3u8Data.segments) {
          await bucket.upload(m3u8Path.replace(m3u8FileName, segment.uri), {
            destination: segment.uri,
          });
        }

        await bucket.upload(m3u8Path, {
          destination: m3u8FileName,
        });
      });
  }

  return (
    <NextIntlClientProvider messages={pick(messages, "video.play")}>
      <HLSVideo
        src={videoUrl}
        poster={videoPosterUrl}
        className={cn(
          "aspect-video size-auto overflow-clip rounded-lg shadow-sm",
          className,
        )}
        muted={muted}
        {...props}
      >
        {t("noSupport")}
      </HLSVideo>
    </NextIntlClientProvider>
  );
}
