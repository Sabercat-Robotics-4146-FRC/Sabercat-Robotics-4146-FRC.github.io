import Image from "next/image";

export default function Page() {
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <header className="relative w-full m-auto px-5 py-20 text-center mb-6">
        <Image className="absolute inset-0 h-full w-full object-cover -z-[1] brightness-50 rounded-xl sm:rounded-3xl" src="/assets/img/15.jpg" alt="Innovation Center" width={672} height={228} quality={100}></Image>
        <h2 className="text-slate-100 text-4xl font-semibold">Contact Information</h2>
        <p className="text-white/75 text-xl font-medium">Our different team members' contacts.</p>
      </header>
      <main className="px-6 min-[480px]:px-12">
        <section>
          <header className="text-neutral-900 mb-4">
            <h2 className="text-3xl">Robotics Lead</h2>
          </header>
          <main className="mb-4 flex flex-col flex-wrap gap-2">
            <section>
              <h3 className="text-2xl">Alex Stephenson</h3>
              <p>Job Title: Team Lead</p>
              <p>Email: <a href="mailto:alex.stephenson@sabercatrobotics.com" className="transition-colors duration-300 text-yellow-500 hover:text-yellow-600 focus-visible:text-yellow-600">alex.stephenson@sabercatrobotics.com</a></p>
            </section>
          </main>
        </section>
        <section>
          <header className="text-neutral-900 mb-4">
            <h2 className="text-3xl">Head of Robot</h2>
          </header>
          <main className="mb-4 flex flex-col flex-wrap gap-2">
            <section>
              <h3 className="text-2xl">Gian Raboin</h3>
              <p>Job Title: Head of Robot</p>
              <p>Email: <a href="mailto:giavanna.raboin@sabercatrobotics.com" className="transition-colors duration-300 text-yellow-500 hover:text-yellow-600 focus-visible:text-yellow-600">giavanna.raboin@sabercatrobotics.com</a></p>
            </section>
          </main>
        </section>
        <section>
          <header className="text-neutral-900 mb-4">
            <h2 className="text-3xl">Business</h2>
          </header>
          <main className="mb-4 flex flex-col flex-wrap gap-2">
            <section>
              <h3 className="text-2xl">Korbin Gugisberg</h3>
              <p>Job Title: Head of Business</p>
              <p>Email: <a href="mailto:korbin.gugisberg@sabercatrobotics.com" className="transition-colors duration-300 text-yellow-500 hover:text-yellow-600 focus-visible:text-yellow-600">korbin.gugisberg@sabercatrobotics.com</a></p>
            </section>
            <section>
              <h3 className="text-2xl">Layla Falcon</h3>
              <p>Job Title: Audio Visual</p>
              <p>Email: <a href="mailto:layla.falcon@sabercatrobotics.com" className="transition-colors duration-300 text-yellow-500 hover:text-yellow-600 focus-visible:text-yellow-600">layla.falcon@sabercatrobotics.com</a></p>
            </section>
            <section>
              <h3 className="text-2xl">Delia Riley</h3>
              <p>Job Title: Member of Business</p>
              <p>Email: <a href="mailto:delia.riley@sabercatrobotics.com" className="transition-colors duration-300 text-yellow-500 hover:text-yellow-600 focus-visible:text-yellow-600">delia.riley@sabercatrobotics.com</a></p>
            </section>
            <section>
              <h3 className="text-2xl">Leo Russo</h3>
              <p>Job Title: Member of Business</p>
              <p>Email: <a href="mailto:leo.russo@sabercatrobotics.com" className="transition-colors duration-300 text-yellow-500 hover:text-yellow-600 focus-visible:text-yellow-600">leo.russo@sabercatrobotics.com</a></p>
            </section>
            <section>
              <header className="text-neutral-900 mb-4">
                <h2 className="text-3xl">Software</h2>
              </header>
              <main className="mb-4 flex flex-col flex-wrap gap-2">
                <section>
                  <h3 className="text-2xl">Ryder Horne</h3>
                  <p>Job Title: Website Developer and Designer</p>
                  <p>Email: <a href="mailto:ryder.horne@sabercatrobotics.com" className="transition-colors duration-300 text-yellow-500 hover:text-yellow-600 focus-visible:text-yellow-600">ryder.horne@sabercatrobotics.com</a></p>
                </section>
              </main>
            </section>
            <section>
              <header className="text-neutral-900 mb-4">
                <h2 className="text-3xl">Floater</h2>
              </header>
              <main className="mb-4 flex flex-col flex-wrap gap-2">
                <section>
                  <h3 className="text-2xl">Nikhil Sethi</h3>
                  <p>Job Title: Floater</p>
                  <p>Email: <a href="mailto:nikhil.sethi@sabercatrobotics.com" className="transition-colors duration-300 text-yellow-500 hover:text-yellow-600 focus-visible:text-yellow-600">nikhil.sethi@sabercatrobotics.com</a></p>
                </section>
              </main>
            </section>
          </main>
        </section>
      </main>
    </main>
  );
};