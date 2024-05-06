import Image from "next/image";
import Link from "next/link";
import EmailForm from "@/components/email-form";
import { NextIntlClientProvider, useMessages, useTranslations } from "next-intl";
import pick from "lodash/pick";

function Card({ localeKey, href, external, src, important, disabled }) {
  const Translate = useTranslations("Website.Headers");
  if (!localeKey) {
    throw new Error("Invalid locale key");
  };

  if (disabled) {
    return (
      <section className="w-full">
        <main className="text-start pointer-events-none">
          <div className="pb-[66.72%] bg-gray-300/50 relative">
            <svg className="fill-zinc-800/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" role="presentation" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512" fill="#27272a">
              <title>Clock Icon</title>
              <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path>
            </svg>
          </div>
          <h3 className="px-2 text-neutral-900/50 text-2xl mt-4 mb-2">{Translate.rich(localeKey)}</h3>
          <p className="px-2 text-neutral-900/[0.375]">{Translate.rich(`CardDescriptions.${localeKey}`)}</p>
        </main>
      </section>
    );
  };

  return (
    <section className="w-full">
      {!external ? <Link href={href} className="text-start group">
        <Image src={src} height={1920} width={1280} alt={Translate.rich(localeKey)} className="mb-2 w-full transition-[box-shadow,transform] duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_16px_32px_-16px_rgb(0_0_0/75)] group-focus-visible:-translate-y-1 group-focus-visible:shadow-[0_16px_32px_-16px_rgb(0_0_0/75)]" sizes="(max-width: 767px) 90vw, 30vw" />
        <h3 className="px-2 text-neutral-900 text-2xl mt-4 mb-2">{Translate.rich(localeKey)}{important ? <>{" "}<span className="bg-red-600 text-white font-semibold py-1 px-2 text-base align-[0.125rem]">{Translate("Important")}</span></> : ""}</h3>
        <p className="px-2">{Translate.rich(`CardDescriptions.${localeKey}`)}</p>
      </Link> : <a href={href} target="_blank" rel="noopener noreferrer" className="text-start group">
        <Image src={src} height={1920} width={1280} alt={Translate.rich(localeKey)} className="mb-2 w-full transition-[box-shadow,transform] duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_16px_32px_-16px_rgb(0_0_0/75)] group-focus-visible:-translate-y-1 group-focus-visible:shadow-[0_16px_32px_-16px_rgb(0_0_0/75)]" sizes="(max-width: 767px) 90vw, 30vw" />
        <h3 className="px-2 text-neutral-900 text-2xl mt-4 mb-2">{Translate.rich(localeKey)}{important ? <>{" "}<span className="bg-red-600 text-white font-semibold py-1 px-2 text-base align-[0.125rem]">{Translate("Important")}</span></> : ""}</h3>
        <p className="px-2">{Translate.rich(`CardDescriptions.${localeKey}`)}</p>
      </a>}
    </section>
  );
};

export default function Home({ params }) {
  const Messages = useMessages();

  return (
    <main>
      <header className="px-2 py-36 relative flex justify-center items-center flex-col flex-wrap text-center text-white/75">
        <div className="absolute top-0 left-0 flex justify-center items-center overflow-hidden w-full h-full -z-50 before:absolute before:top-0 before:left-0 before:bg-neutral-900/50 before:w-full before:h-full">
          <video width={853} height={480} className="absolute top-0 left-0 flex justify-center items-center overflow-hidden object-cover w-full h-full -z-50 before:absolute before:top-0 before:left-0 before:bg-neutral-900/50 before:w-full before:h-full" autoPlay loop muted playsInline controls={false}>
            <source src="/assets/vid/robot.webm" type="video/webm" />
            <source src="/assets/vid/robot.mp4" type="video/mp4" />
            Your browser does not support videos.
          </video>
        </div>
        <p className="font-medium animate-load">Team #4146</p>
        <Image src="/assets/img/head-raw-large-white.png" alt="Sabercat Robotics logo" width={160} height={124} priority></Image>
        <h2 className="text-slate-100 text-4xl mb-2 animation-delay-100 animate-load">Sabercat Robotics</h2>
        <p className="mb-5 animation-delay-200 animate-load">We pride ourselves on pushing STEM education to its limits.</p>
        <Link href="/tax-credit" className="animation-delay-300 animate-load text-slate-100 overflow-hidden border-2 px-6 py-3 leading-none border-yellow-500 font-medium relative before:absolute before:h-full before:w-full before:scale-x-0 before:top-0 before:left-0 before:bg-yellow-500 before:-z-[1] before:origin-left before:[transition:transform_500ms_0ms,transform-origin_0ms_500ms] hover:before:scale-x-100 hover:before:origin-right focus-visible:before:scale-x-100 focus-visible:before:origin-right">Support Us</Link>
      </header>
      <main className="flex flex-col flex-wrap justify-center items-center text-center py-16 px-6 text-neutral-900/75">
        <header className="w-full sm:w-3/4 px-4 mb-4">
          <h2 className="mb-4 font-medium text-3xl text-neutral-900">Join the Mission.</h2>
          <p className="mb-2">Sabercat Robotics exists to train the next generation of engineers, innovators, creatives, and more through competitive robotics and training programs.</p>
        </header>
        <main className="flex flex-col flex-wrap md:grid md:grid-cols-3 -mx-6 w-full gap-6">
          <Card localeKey="TaxCredit" href="/tax-credit" src="/assets/img/tax-credit-generic.jpg" important />
          <Card localeKey="Awards" href="/awards" src="/assets/img/awards.jpg" />
          <Card localeKey="SponsorsAndPartners" href="/sponsors-and-partners" src="/assets/img/sponsors-and-partners.jpg" />
          <Card localeKey="Blog" href="/blog" src="/assets/img/15.jpg" />
          <Card localeKey="InnovationCenter" href="/innovation-center" src="/assets/img/innovation-center.jpg" />
          <Card localeKey="TaxCredit" href="https://www.sistersinstem.net" external src="/assets/img/sistersinstem.jpg" />
          <Card localeKey="Mentors" href="/mentors" src="/assets/img/mentors.jpg" />
          <Card localeKey="ContactInformation" href="/contact-information" src="/assets/img/15.jpg" />
          <Card localeKey="ComingSoon" disabled />
        </main>
        <NextIntlClientProvider locale={params.locale} messages={
          pick(Messages, "EmailForm").EmailForm
        }>
          <EmailForm />
        </NextIntlClientProvider>
      </main>
    </main>
  );
};