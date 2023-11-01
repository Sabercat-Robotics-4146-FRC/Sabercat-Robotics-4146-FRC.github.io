import Image from "next/image";

export default function Page() {
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <header className="relative w-full m-auto px-5 py-20 text-center mb-6">
        <Image className="absolute inset-0 h-full w-full object-cover -z-[1] brightness-50 rounded-xl sm:rounded-3xl" src="/assets/img/innovation-center.jpg" alt="Innovation Center" width={672} height={228} quality={100}></Image>
        <h2 className="text-slate-100 text-4xl font-semibold">Mentors</h2>
        <p className="text-white/75 text-xl font-medium">We are always looking for more mentors. Everyone has something to teach.</p>
      </header>
      <main className="px-6 min-[480px]:px-12">
        <section className="text-neutral-900 mb-4">
          <header>
            <h2 className="text-3xl mb-2">Why Do We Need Mentors?</h2>
          </header>
          <p>Sabercat Robotics cannot do what it does without the help of our mentors. From mechanical, design, coding, and business, everything we do is supplemented with the expertise of our generous mentors.</p>
        </section>
        <main className="text-neutral-900">
          <header>
            <h2 className="text-3xl mb-2">Who We Have</h2>
          </header>
          <main>
            <section className="mb-2">
              <header>
                <h3 className="font-medium text-2xl">Susan Lindberg</h3>
              </header>
              <ul className="marker:text-neutral-900 list-disc">
                <li>Teacher</li>
                <li>MSA Coordinator</li>
              </ul>
              <p className="text-neutral-900/80">Email: <a href="mailto:slindberg@susd.org" className="transition-colors duration-300 text-yellow-500 hover:text-yellow-600 focus-visible:text-yellow-600">slindberg@susd.org</a></p>
            </section>
            <section className="mb-2">
              <header>
                <h3 className="font-medium text-2xl">Christopher Brandt</h3>
              </header>
              <ul className="marker:text-neutral-900 list-disc">
                <li>MSA Coordinator</li>
              </ul>
              <p className="text-neutral-900/80">Email: <a href="mailto:cbrandt@susd.org" className="transition-colors duration-300 text-yellow-500 hover:text-yellow-600 focus-visible:text-yellow-600">cbrandt@susd.org</a></p>
            </section>
            <section className="mb-2">
              <header>
                <h3 className="font-medium text-2xl">Lewis Ruskin</h3>
              </header>
              <ul className="marker:text-neutral-900 list-disc">
                <li>Former Sabercat</li>
                <li>Computer Scientist</li>
                <li>PhD Student</li>
              </ul>
              <p className="text-neutral-900/80">Email: <a href="mailto:lewis.ruskin@sabercatrobotics.com" className="transition-colors duration-300 text-yellow-500 hover:text-yellow-600 focus-visible:text-yellow-600">lewis.ruskin@sabercatrobotics.com</a></p>
            </section>
            <section className="mb-2">
              <header>
                <h3 className="font-medium text-2xl">Zach Smith</h3>
              </header>
              <ul className="marker:text-neutral-900 list-disc">
                <li>Coding</li>
                <li>Business</li>
              </ul>
            </section>
            <section className="mb-2">
              <header>
                <h3 className="font-medium text-2xl">Laney Olson</h3>
              </header>
              <ul className="marker:text-neutral-900 list-disc">
                <li>Business</li>
              </ul>
            </section>
            <section className="mb-2">
              <header>
                <h3 className="font-medium text-2xl">Eli Arnold</h3>
              </header>
              <ul className="marker:text-neutral-900 list-disc">
                <li>Mechanical</li>
              </ul>
            </section>
          </main>
        </main>
      </main>
    </main>
  );
};