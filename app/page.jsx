import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="px-2 py-24 relative flex justify-center items-center flex-col flex-wrap text-center text-white/75">
        <div className="absolute inset-0 flex justify-center items-center overflow-clip w-full h-full -z-50 before:absolute before:inset-0 before:bg-neutral-900/50 before:w-full before:h-full">
          <video width={853} height={480} className="absolute inset-0 flex justify-center items-center overflow-clip object-cover w-full h-full -z-50 before:absolute before:inset-0 before:bg-neutral-900/50 before:w-full before:h-full" autoPlay loop muted>
            <source src="/assets/vid/robot.mp4" type="video/mp4" />
          </video>
        </div>
        <p className="translate-y-4 opacity-0 font-medium animate-load">Team #4146</p>
        <Image src="/assets/img/head-raw-large-white.png" alt="Sabercat Robotics logo" width={160} height={124}></Image>
        <h2 className="text-slate-100 text-4xl mb-2 animate-load">Sabercat Robotics</h2>
        <p className="mb-5 animate-load">We pride ourselves on pushing STEM education to its limits.</p>
        <a href="/tax-credit" className="text-slate-100 overflow-clip border-2 px-6 py-3 leading-none border-yellow-500 font-medium relative before:absolute before:h-full before:w-full before:scale-x-0 before:inset-0 before:bg-yellow-500 before:-z-[1] before:origin-left before:transition-[transform,transform-origin] before:duration-[500ms,0ms] before:delay-[0ms,500ms] hover:before:scale-x-100 hover:before:origin-right focus-visible:before:scale-x-100 focus-visible:before:origin-right">Support Us</a>
      </header>
      <main className="flex flex-col flex-wrap justify-center items-center text-center py-16 px-6 text-neutral-900/75">
        <header className="w-full sm:w-3/4 px-4 mb-4">
          <h2 className="mb-4 font-medium text-3xl text-neutral-900">Join the Mission.</h2>
          <p className="mb-2">Sabercat Robotics exists to train the next generation of engineers, innovators, creatives, and more through competitive robotics and training programs.</p>
        </header>
        <main className="flex flex-col flex-wrap md:grid md:grid-cols-3 -mx-6 w-full gap-6">
          <section className="w-full">
            <a href="/tax-credit" className="text-start group">
              <Image src="/assets/img/tax-credit-generic.jpg" height={360} width={235} alt="Tax Credit" className="mb-2 w-full transition-[box-shadow,transform] duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_16px_32px_-16px_rgb(0_0_0/75)] group-focus-visible:-translate-y-1 group-focus-visible:shadow-[0_16px_32px_-16px_rgb(0_0_0/75)]"></Image>
              <h3 className="px-2 text-neutral-900 text-2xl mt-4 mb-2">Tax Credit <span className="bg-red-600 text-white font-semibold py-1 px-2 text-base align-[0.125rem]">Important!</span></h3>
              <p className="px-2">We are a 501(c)-3 organization. Tax Credit sets Arizona apart in education funding. Let's take advantage of it.</p>
            </a>
          </section>
          <section className="w-full">
            <a href="/awards" className="text-start group">
              <Image src="/assets/img/awards.jpg" height={360} width={235} alt="Innovation Center" className="mb-2 w-full transition-[box-shadow,transform] duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_16px_32px_-16px_rgb(0_0_0/75)] group-focus-visible:-translate-y-1 group-focus-visible:shadow-[0_16px_32px_-16px_rgb(0_0_0/75)]"></Image>
              <h3 className="px-2 text-neutral-900 text-2xl mt-4 mb-2">Awards</h3>
              <p className="px-2">Check out what we've accomplished so far!</p>
            </a>
          </section>
          <section className="w-full">
            <a href="/sponsors-and-partners" className="text-start group">
              <Image src="/assets/img/sponsors-and-partners.jpg" height={360} width={235} alt="Sponsors and Partners" className="mb-2 w-full transition-[box-shadow,transform] duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_16px_32px_-16px_rgb(0_0_0/75)] group-focus-visible:-translate-y-1 group-focus-visible:shadow-[0_16px_32px_-16px_rgb(0_0_0/75)]"></Image>
              <h3 className="px-2 text-neutral-900 text-2xl mt-4 mb-2">Sponsors & Partners</h3>
              <p className="px-2">We rely on the support of our community. Whether you're a local business, global conglomerate, or self employed, there's need for your support.</p>
            </a>
          </section>
          <section className="w-full">
            <a href="/innovation-center" className="text-start group">
              <Image src="/assets/img/innovation-center.jpg" height={360} width={235} alt="Innovation Center" className="mb-2 w-full transition-[box-shadow,transform] duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_16px_32px_-16px_rgb(0_0_0/75)] group-focus-visible:-translate-y-1 group-focus-visible:shadow-[0_16px_32px_-16px_rgb(0_0_0/75)]"></Image>
              <h3 className="px-2 text-neutral-900 text-2xl mt-4 mb-2">Innovation Center</h3>
              <p className="px-2">Learn more about Saguaro High School's Innovation Center and our part in its creation.</p>
            </a>
          </section>
          <section className="w-full">
            <a href="https://www.sistersinstem.net" target="_blank" rel="noopener noreferrer" className="text-start group">
              <Image src="/assets/img/sistersinstem.jpg" height={360} width={235} alt="Sisters in STEM" className="mb-2 w-full transition-[box-shadow,transform] duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_16px_32px_-16px_rgb(0_0_0/75)] group-focus-visible:-translate-y-1 group-focus-visible:shadow-[0_16px_32px_-16px_rgb(0_0_0/75)]"></Image>
              <h3 className="px-2 text-neutral-900 text-2xl mt-4 mb-2">Sisters in STEM</h3>
              <p className="px-2">Learn more about Sisters in STEM.</p>
            </a>
          </section>
          <section className="w-full">
            <a href="/mentors" className="text-start group">
              <Image src="/assets/img/mentors.jpg" height={360} width={235} alt="Mentors" className="mb-2 w-full transition-[box-shadow,transform] duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_16px_32px_-16px_rgb(0_0_0/75)] group-focus-visible:-translate-y-1 group-focus-visible:shadow-[0_16px_32px_-16px_rgb(0_0_0/75)]"></Image>
              <h3 className="px-2 text-neutral-900 text-2xl mt-4 mb-2">Mentors</h3>
              <p className="px-2">We are <b>always</b> looking for more mentors. Everyone has something to teach.</p>
            </a>
          </section>
          <section className="w-full">
            <a href="/contact-information" className="text-start group">
              <Image src="/assets/img/15.jpg" height={360} width={235} alt="Innovation Center" className="mb-2 w-full transition-[box-shadow,transform] duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_16px_32px_-16px_rgb(0_0_0/75)] group-focus-visible:-translate-y-1 group-focus-visible:shadow-[0_16px_32px_-16px_rgb(0_0_0/75)]"></Image>
              <h3 className="px-2 text-neutral-900 text-2xl mt-4 mb-2">Contact Information</h3>
              <p className="px-2">Need to get a hold of a team member of ours? Find their contact on this page.</p>
            </a>
          </section>
          <section className="w-full">
            <a href="#" className="text-start opacity-50 pointer-events-none">
              <div className="pb-[66.5%] bg-gray-300 relative">
                <svg class="fill-zinc-800 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512" fill="#212529">
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
          </header>
          <main className="w-full sm:w-1/2">
          <section className="mb-4 relative flex flex-wrap items-strech w-full border-2 transition-[border-color] duration-300 focus-within:border-yellow-500">
              <input className="order-1 bg-slate-100 flex-1 basis-auto p-3 w-[1%] focus:outline-none transition-[background-color] duration-300 focus:bg-slate-50 peer" type="email" placeholder="Your email address" />
              <div className="p-3 bg-slate-100 fill-neutral-900 transition-[background-color,fill] duration-300 peer-focus:fill-yellow-500 peer-focus:bg-slate-50 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 512 512">
                  <title>Envelope Icon</title>
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                </svg>
                <span className="sr-only">Envelope Icon</span>
              </div>
            </section>
            <section className="mb-4 relative flex flex-wrap items-strech w-full border-2 transition-[border-color] duration-300 focus-within:border-yellow-500">
              <input className="bg-slate-100 flex-1 basis-auto p-3 w-[1%] focus:outline-none transition-[background-color] duration-300 focus:bg-slate-50" type="text" placeholder="Subject of your email" />
            </section>
            <section className="mb-4 relative flex flex-wrap items-strech w-full border-2 transition-[border-color] duration-300 focus-within:border-yellow-500">
              <input className="bg-slate-100 flex-1 basis-auto p-3 w-[1%] focus:outline-none transition-[background-color] duration-300 focus:bg-slate-50" type="text" placeholder="Message content of your email" />
            </section>
            <section className="relative flex flex-wrap items-strech w-full">
              <button className="w-full overflow-clip text-neutral-900 border-2 px-6 py-3 leading-none border-yellow-500 font-medium relative transition-colors duration-500 hover:text-slate-100 focus-visible:text-slate-100 before:absolute before:h-full before:w-full before:scale-x-0 before:inset-0 before:bg-yellow-500 before:-z-[1] before:origin-left before:transition-[transform,transform-origin] before:duration-[500ms,0ms] before:delay-[0ms,500ms] hover:before:scale-x-100 hover:before:origin-right focus-visible:before:scale-x-100 focus-visible:before:origin-right">Submit</button>
            </section>
          </main>
        </section>
      </main>
    </main>
  );
};