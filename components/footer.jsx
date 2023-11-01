import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-wrap gap-y-8 min-[800px]:justify-center min-[800px]:gap-y-0 min-[800px]:gap-x-8 lg:gap-x-16 bg-zinc-700 px-8 py-10 min-[800px]:py-20 shadow-black shadow-[0_8px_16px]">
      <section className="w-full min-[800px]:w-max min-[800px]:max-w-xs">
        <h2 className="font-medium text-slate-100 text-3xl">Support Us</h2>
        <nav className="flex flex-col flex-wrap text-slate-100">
          <a href="/tax-credit" className="transition-colors duration-300 hover:text-yellow-500 focus-visible:text-yellow-500">Tax Credit</a>
          <a href="/sponsors-and-partners" className="transition-colors duration-300 hover:text-yellow-500 focus-visible:text-yellow-500">Sponsors & Partners</a>
          <a href="/mentors" className="transition-colors duration-300 hover:text-yellow-500 focus-visible:text-yellow-500">Mentors</a>
        </nav>
      </section>
      <section className="w-full min-[800px]:w-max min-[800px]:max-w-xs">
        <h2 className="font-medium text-slate-100 text-3xl">Learn More</h2>
        <nav className="flex flex-col flex-wrap text-slate-100">
          <a href="/awards" className="transition-colors duration-300 hover:text-yellow-500 focus-visible:text-yellow-500">Awards</a>
          <a href="/innovation-center" className="transition-colors duration-300 hover:text-yellow-500 focus-visible:text-yellow-500">Innovation Center</a>
        </nav>
      </section>
      <section className="w-full min-[800px]:w-max min-[800px]:max-w-xs">
        <h2 className="font-medium text-slate-100 text-3xl">Contact</h2>
        <nav className="flex flex-col flex-wrap text-slate-100">
          <a href="/#contact" className="transition-colors duration-300 hover:text-yellow-500 focus-visible:text-yellow-500">Contact Form</a>
          <a href="mailto:team@sabercatrobotics.com" className="fill-slate-100 transition-colors duration-300 hover:text-yellow-500 hover:fill-yellow-500 focus-visible:text-yellow-500 focus-visible:fill-yellow-500 break-all">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 512 512" className="inline mr-1 mb-0.5">
              <title>Envelope Icon</title>
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
            </svg>
            <span className="sr-only">Envelope Icon</span>
            <p className="inline">team@sabercatrobotics.com</p>
          </a>
          <a href="https://maps.app.goo.gl/25SioJ1JU4hxqWKU9" target="_blank" rel="noopener noreferrer" className="fill-slate-100 transition-colors duration-300 hover:text-yellow-500 hover:fill-yellow-500 focus-visible:text-yellow-500 focus-visible:fill-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" className="inline mr-1 mb-1.5">
              <title>Location Icon</title>
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
            </svg>
            <span className="sr-only">Location Icon</span>
            <p className="inline">6250 N 82nd St, Scottsdale, AZ 85250</p>
          </a>
        </nav>
      </section>
      {/* <section className="w-full min-[800px]:w-max min-[800px]:max-w-xs">
        <h2 className="font-medium text-slate-100 text-3xl">Social Media</h2>
        <nav className="flex flex-col flex-wrap text-slate-100">
          <a href="/#contact" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-yellow-500 focus-visible:text-yellow-500">Contact Form</a>
        </nav>
      </section> */}
      <footer className="w-full flex flex-col flex-wrap min-[800px]:flex-row min-[800px]:flex-nowrap justify-center items-center divide-y min-[800px]:divide-x min-[800px]:divide-y-0 divide-slate-100/50 text-sm text-slate-100/50">
        <a href="https://www.saguaromsaboosters.org/" target="_blank" rel="noopener noreferrer" className="min-w-[25px] px-2 min-[800px]:px-4 py-4 inline">
          <Image src="/assets/img/smsa.png" alt="Saguaro Math and Science Academy logo" width={40} height={40} quality={100}></Image>
        </a>
        <p className="px-2 min-[800px]:px-4 py-4 inline">Copyright &copy; 2023 Scottsdale Math And Science Academy. All rights reserved.</p>
        <a href="/privacy-policy" className="px-2 min-[800px]:px-4 py-4 inline">Privacy Policy</a>
      </footer>
    </footer>
  );
};