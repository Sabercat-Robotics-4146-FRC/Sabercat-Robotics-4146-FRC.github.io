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
        <h2 className="font-medium text-slate-100 text-3xl">Social Media</h2>
        <nav className="flex flex-col flex-wrap text-slate-100">
          <a href="https://www.instagram.com/sabercats4146/" target="_blank" rel="noopener noreferrer" className="fill-slate-100 transition-colors duration-300 hover:text-yellow-500 hover:fill-yellow-500 focus-visible:text-yellow-500 focus-visible:fill-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className="inline mr-1 mb-1.5">
              <title>Instagram Logo</title>
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
            <span className="sr-only">Instagram Logo</span>
            <p className="inline">Instagram</p>
          </a>
          <a href="https://www.github.com/Sabercat-Robotics-4146-FRC/" target="_blank" rel="noopener noreferrer" className="fill-slate-100 transition-colors duration-300 hover:text-yellow-500 hover:fill-yellow-500 focus-visible:text-yellow-500 focus-visible:fill-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512" className="inline mr-1 mb-1.5">
              <title>GitHub Logo</title>
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
            </svg>
            <span className="sr-only">GitHub Logo</span>
            <p className="inline">GitHub</p>
          </a>
          <a href="https://www.linkedin.com/in/sabercat-robotics-460090251/" target="_blank" rel="noopener noreferrer" className="fill-slate-100 transition-colors duration-300 hover:text-yellow-500 hover:fill-yellow-500 focus-visible:text-yellow-500 focus-visible:fill-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className="inline mr-1 mb-1.5">
              <title>LinkedIn Logo</title>
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
            </svg>
            <span className="sr-only">LinkedIn Logo</span>
            <p className="inline">LinkedIn</p>
          </a>
          <a href="https://www.twitter.com/Sabercats4146" target="_blank" rel="noopener noreferrer" className="fill-slate-100 transition-colors duration-300 hover:text-yellow-500 hover:fill-yellow-500 focus-visible:text-yellow-500 focus-visible:fill-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="inline mr-1 mb-1.5">
              <title>Twitter Logo</title>
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
            </svg>
            <span className="sr-only">Twitter Logo</span>
            <p className="inline">Twitter</p>
          </a>
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