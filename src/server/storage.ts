import { Storage } from "@google-cloud/storage";
import { env } from "~/env";

const jsonString = Buffer.from(env.GC_STORAGE, "base64").toString("utf-8");
const json = JSON.parse(jsonString);

export const storage = new Storage({
  credentials: json,
});

export const bucket = storage.bucket("static.sabercatrobotics.com");

export const storageRoot = "https://static.sabercatrobotics.com/" as const;
