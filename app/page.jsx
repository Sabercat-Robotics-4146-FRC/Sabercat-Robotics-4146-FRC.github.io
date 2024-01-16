"use client";
import Image from "next/image";
import Link from "next/link";
import { validate } from "email-validator";
import { createRef, useState } from "react";
import { SendEmail } from "@/server/email";

function Card({title, description, href, external, src, important, children}) {
  return (
    <section className="w-full">
      {!external ? <Link href={href} className="text-start group">
        <Image src={src} height={360} width={235} alt={title} className="mb-2 w-full transition-[box-shadow,transform] duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_16px_32px_-16px_rgb(0_0_0/75)] group-focus-visible:-translate-y-1 group-focus-visible:shadow-[0_16px_32px_-16px_rgb(0_0_0/75)]" sizes="(max-width: 767px) 100vw, 33vw"></Image>
        <h3 className="px-2 text-neutral-900 text-2xl mt-4 mb-2">{title}{important ? <>{" "}<span className="bg-red-600 text-white font-semibold py-1 px-2 text-base align-[0.125rem]">Important!</span></> : ""}</h3>
        <p className="px-2">{description || children}</p>
      </Link> : <a href={href} target="_blank" rel="noopener noreferrer" className="text-start group">
        <Image src={src} height={360} width={235} alt={title} className="mb-2 w-full transition-[box-shadow,transform] duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_16px_32px_-16px_rgb(0_0_0/75)] group-focus-visible:-translate-y-1 group-focus-visible:shadow-[0_16px_32px_-16px_rgb(0_0_0/75)]" sizes="(max-width: 767px) 100vw, 33vw"></Image>
        <h3 className="px-2 text-neutral-900 text-2xl mt-4 mb-2">{title}{important ? <>{" "}<span className="bg-red-600 text-white font-semibold py-1 px-2 text-base align-[0.125rem]">Important!</span></> : ""}</h3>
        <p className="px-2">{description || children}</p>
      </a>}
    </section>
  );
};

export default function Home() {
  const ResponseRef = createRef();

  const [Email, SetEmail] = useState();
  const [Message, SetMessage] = useState();
  const [Subject, SetSubject] = useState();
  const [InfoClasses, SetInfoClasses] = useState("hidden");

  async function HandleEmailEvent() {
    const ResponseText = ResponseRef.current;
    if (ResponseText && ResponseText.classList) {
      SetInfoClasses("hidden");
      if (Email && Email.replace(/\s/g, "").length && validate(Email)) {
        if (Subject && Subject.replace(/\s/g, "").length) {
          if (Message && Message.replace(/\s/g, "").length) {
            ResponseText.innerText = "Attempting to send email...";
            SetInfoClasses("text-neutral-900");
            try {
              const EmailResponse = await SendEmail({
                Email: Email,
                Subject: Subject,
                Message: Message,
              });
              if (EmailResponse && EmailResponse.Success) {
                SetInfoClasses("text-green-500");
              } else {
                SetInfoClasses("text-red-500");
              };
              ResponseText.innerText = EmailResponse.Message || (!EmailResponse.Success ? "There was an error on our server when sending your email. Please try again, or contact our email team@sabercatrobotics.com if you think this was a mistake." : "Thank you for your email!");  
            } catch(Err) {
              console.warn(Err);
              SetInfoClasses("text-red-500");
              ResponseText.innerText = "There was an error on our server when sending your email. Please try again, or contact our email team@sabercatrobotics.com if you think this was a mistake.";    
            };
          } else {
            SetInfoClasses("text-red-500");
            ResponseText.innerText = "The message you provided was empty. Please try again with a valid message, or contact our email team@sabercatrobotics.com if you think this was a mistake.";  
          };
        } else {
          SetInfoClasses("text-red-500");
          ResponseText.innerText = "The subject you provided was empty. Please try again with a valid subject, or contact our email team@sabercatrobotics.com if you think this was a mistake.";  
        };
      } else {
        SetInfoClasses("text-red-500");
        ResponseText.innerText = "The email that was provided was invalid. Please try again with a valid email, or contact our email team@sabercatrobotics.com if you think this was a mistake.";
      };
    };
  };

  return (
    <main>
      <header className="px-2 py-24 relative flex justify-center items-center flex-col flex-wrap text-center text-white/75">
        <div className="absolute inset-0 flex justify-center items-center overflow-clip w-full h-full -z-50 before:absolute before:inset-0 before:bg-neutral-900/50 before:w-full before:h-full">
          <video width={853} height={480} className="absolute inset-0 flex justify-center items-center overflow-clip object-cover w-full h-full -z-50 before:absolute before:inset-0 before:bg-neutral-900/50 before:w-full before:h-full" autoPlay loop muted>
            <source src="/assets/vid/robot.webm" type="video/webm" />
            <source src="/assets/vid/robot.mp4" type="video/mp4" />
            Your browser does not support videos.
          </video>
        </div>
        <p className="font-medium animate-load">Team #4146</p>
        <Image src="/assets/img/head-raw-large-white.png" alt="Sabercat Robotics logo" width={160} height={124} priority></Image>
        <h2 className="text-slate-100 text-4xl mb-2 animation-delay-100 animate-load">Sabercat Robotics</h2>
        <p className="mb-5 animation-delay-200 animate-load">We pride ourselves on pushing STEM education to its limits.</p>
        <Link href="/tax-credit" className="animation-delay-300 animate-load text-slate-100 overflow-clip border-2 px-6 py-3 leading-none border-yellow-500 font-medium relative before:absolute before:h-full before:w-full before:scale-x-0 before:inset-0 before:bg-yellow-500 before:-z-[1] before:origin-left before:transition-[transform,transform-origin] before:duration-[500ms,0ms] before:delay-[0ms,500ms] hover:before:scale-x-100 hover:before:origin-right focus-visible:before:scale-x-100 focus-visible:before:origin-right">Support Us</Link>
      </header>
      <main className="flex flex-col flex-wrap justify-center items-center text-center py-16 px-6 text-neutral-900/75">
        <header className="w-full sm:w-3/4 px-4 mb-4">
          <h2 className="mb-4 font-medium text-3xl text-neutral-900">Join the Mission.</h2>
          <p className="mb-2">Sabercat Robotics exists to train the next generation of engineers, innovators, creatives, and more through competitive robotics and training programs.</p>
        </header>
        <main className="flex flex-col flex-wrap md:grid md:grid-cols-3 -mx-6 w-full gap-6">
          <Card title="Tax Credit" description="We are a 501(c)-3 organization. Tax Credit sets Arizona apart in education funding. Let's take advantage of it." href="/tax-credit" src="/assets/img/tax-credit-generic.jpg" important />
          <Card title="Awards" description="Check out what we've accomplished so far!" href="/awards" src="/assets/img/awards.jpg" />
          <Card title="Sponsors & Partners" description="We rely on the support of our community. Whether you're a local business, global conglomerate, or self employed, there's need for your support." href="/sponsors-and-partners" src="/assets/img/sponsors-and-partners.jpg" />
          <Card title="Innovation Center" description="Learn more about Saguaro High School's Innovation Center and our part in its creation." href="/innovation-center" src="/assets/img/innovation-center.jpg" />
          <Card title="Sisters in STEM" description="Learn more about Sisters in STEM." href="https://www.sistersinstem.net" external src="/assets/img/sistersinstem.jpg" />
          <Card title="Mentors" href="/mentors" src="/assets/img/mentors.jpg">We are <b>always</b> looking for more mentors. Everyone has something to teach.</Card>
          <Card title="Contact Information" description="Need to get a hold of a team member of ours? Find their contact on this page." href="/contact-information" src="/assets/img/15.jpg" />
          <section className="w-full">
            <a href="#" className="text-start opacity-50 pointer-events-none" onClick={function(Event) {Event.preventDefault();}}>
              <div className="pb-[66.72%] bg-gray-300 relative">
                <svg className="fill-zinc-800 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512" fill="#212529">
                  <title>Clock Icon</title>
                  <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path>
                </svg>
                <span className="sr-only">Disabled Card</span>
              </div>
              <h3 className="px-2 text-neutral-900 text-2xl mt-4 mb-2">Coming Soon</h3>
              <p className="px-2">Feel free to contact us with your ideas about new pages and components.</p>
            </a>
          </section>
        </main>
        <section className="flex flex-col flex-wrap gap-4 sm:flex-row sm:flex-nowrap justify-center items-center text-center py-16 text-neutral-900/75" id="contact">
          <header className="w-full sm:w-1/2 px-4 mb-4">
            <h2 className="mb-4 font-medium text-3xl text-neutral-900">Contact Us</h2>
            <p className="mb-2">Need to reach out to our team? Contact us using the form to the right, and make sure to provide as much detail as possible so we can get back to you quickly.</p>
            <p className="mb-2">If the contact form is <i>not</i> working, then please <a href="mailto:team@sabercatrobotics.com" className="transition-colors duration-300 text-yellow-500 hover:text-yellow-600 focus-visible:text-yellow-600">email us</a> and mention what error appears when you fill out the contact form (and if you can, include a photo) so we can fix it quickly. Thank you!</p>
          </header>
          <main className="w-full sm:w-1/2">
            <section className="mb-4 relative flex flex-wrap items-strech w-full border-2 transition-[border-color] duration-300 focus-within:border-yellow-500">
              <input className="order-1 bg-slate-100 flex-1 basis-auto p-3 w-[1%] focus:outline-none transition-[background-color] duration-300 focus:bg-slate-50 peer" type="email" placeholder="Your email address" onInput={function(Event) {SetEmail(Event.target.value)}} />
              <div className="p-3 bg-slate-100 fill-neutral-900 transition-[background-color,fill] duration-300 peer-focus:fill-yellow-500 peer-focus:bg-slate-50 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 512 512">
                  <title>Envelope Icon</title>
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                </svg>
                <span className="sr-only">Envelope Icon</span>
              </div>
            </section>
            <section className="mb-4 relative flex flex-wrap items-strech w-full border-2 transition-[border-color] duration-300 focus-within:border-yellow-500">
              <input className="order-1 bg-slate-100 flex-1 basis-auto p-3 w-[1%] focus:outline-none transition-[background-color] duration-300 focus:bg-slate-50 peer" type="text" placeholder="Subject of your email" onInput={function(Event) {SetSubject(Event.target.value)}} />
              <div className="p-3 bg-slate-100 fill-neutral-900 transition-[background-color,fill] duration-300 peer-focus:fill-yellow-500 peer-focus:bg-slate-50 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 512 512">
                  <title>Heading Icon</title>
                  <path d="M0 64C0 46.3 14.3 32 32 32H80h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H112V208H336V96H320c-17.7 0-32-14.3-32-32s14.3-32 32-32h48 48c17.7 0 32 14.3 32 32s-14.3 32-32 32H400V240 416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H368 320c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V272H112V416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V240 96H32C14.3 96 0 81.7 0 64z"></path>
                </svg>
                <span className="sr-only">Heading Icon</span>
              </div>
            </section>
            <section className="mb-4 relative flex flex-wrap items-center w-full border-2 transition-[border-color] duration-300 focus-within:border-yellow-500">
              <textarea className="resize-none h-[6ch] order-1 bg-slate-100 flex-1 basis-auto p-3 w-[1%] focus:outline-none transition-[background-color] duration-300 focus:bg-slate-50 peer" placeholder="Message content of your email" onInput={function(Event) {SetMessage(Event.target.value)}} />
              <div className="h-[6ch] p-3 bg-slate-100 fill-neutral-900 transition-[background-color,fill] duration-300 peer-focus:fill-yellow-500 peer-focus:bg-slate-50 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 512 512">
                  <title>Comment Icon</title>
                  <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"></path>
                </svg>
                <span className="sr-only">Comment Icon</span>
              </div>
            </section>
            <section className="relative flex flex-wrap items-strech w-full">
              <button className="w-full overflow-clip text-neutral-900 border-2 px-6 py-3 leading-none border-yellow-500 font-medium relative transition-colors duration-500 hover:text-slate-100 focus-visible:text-slate-100 before:absolute before:h-full before:w-full before:scale-x-0 before:inset-0 before:bg-yellow-500 before:-z-[1] before:origin-left before:transition-[transform,transform-origin] before:duration-[500ms,0ms] before:delay-[0ms,500ms] hover:before:scale-x-100 hover:before:origin-right focus-visible:before:scale-x-100 focus-visible:before:origin-right" onClick={HandleEmailEvent}>Submit</button>
              <p ref={ResponseRef} className={`w-full ${InfoClasses} mt-2 leading-none`} id="response"></p>
            </section>
          </main>
        </section>
      </main>
    </main>
  );
};