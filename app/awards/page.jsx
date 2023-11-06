import Image from "next/image";

export default function Page() {
  function Banner({Title, Text}) {
    return (
      <section className="p-3 bg-[#0F4BCB] w-40 relative mb-16 flex flex-col flex-wrap">
        <img src="/assets/img/first.svg" alt="FIRST Robotics Logo" width={100} height={60} className="mx-auto" />
        <h3 className="font-semibold text-center mt-auto">{Title}</h3>
        <p className="text-center mt-auto">{Text}</p>
        <svg className="absolute inset-0 top-full -mt-px" width="10rem" viewBox="0 0 60 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g fill="#0F4BCB" fillOpacity={1} stroke="none" strokeWidth={0.271434} strokeLinecap="butt" strokeLinejoin="miter" strokeOpacity={1}>
            <path d="M 0.01412096,0 V 20 L 29.787275,9.6253601 60,19.942362 V 0 H 0 v 0 0"></path>
          </g>
        </svg>
      </section>
    );
  };

  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <header className="relative w-full m-auto px-5 py-20 text-center mb-6">
        <Image className="absolute inset-0 h-full w-full object-cover -z-[1] brightness-50 rounded-xl sm:rounded-3xl" src="/assets/img/awards.jpg" alt="Awards" width={256} height={368} quality={100} priority></Image>
        <h2 className="text-slate-100 text-4xl font-semibold">Awards</h2>
        <p className="text-white/75 text-xl font-medium">Check out what we've accomplished so far!</p>
      </header>
      <main className="px-6 min-[480px]:px-12">
        <section className="text-neutral-900/80 mb-4">
          <header className="text-neutral-900">
            <h2 className="text-3xl">Banner Awards</h2>
            <p>Take a look at every banner award from FIRST Robotics we have won.</p>
          </header>
          <main className="py-6 flex flex-wrap justify-center gap-4 text-slate-100">
            <Banner Title="Regional Finalists" Text="2012 Arizona Regional" />
            <Banner Title="Rookie All Star" Text="2012 Arizona Regional" />
            <Banner Title="Woodie Flowers Finalist" Text="2015 Arizona West Regional" />
            <Banner Title="Regional Winners" Text="2015 Arizona East Regional" />
            <Banner Title="Regional Chairman's Award" Text="2020 Arizona West Regional" />
          </main>
        </section>
        <section className="text-neutral-900/80 mb-4">
          <header className="text-neutral-900">
            <h2 className="text-3xl">Yearly Awards</h2>
            <p>Every yearly competition award we've won ever since we started in 2012.</p>
          </header>
          <main className="py-6 flex flex-col flex-wrap gap-4 text-neutral-900/80">
            <section>
              <header className="text-neutral-900">
                <h3 className="text-2xl">2023</h3>
              </header>
              <ul className="list-disc marker:text-neutral-900">
                <b>Arizona East Regional</b>
                <li>Creativity Award sponsored by Rockwell Automation</li>
                <b>Arizona West Regional</b>
                <li>Gracious Professionalism Award</li>
              </ul>
            </section>
            <section>
              <header className="text-neutral-900">
                <h3 className="text-2xl">2022</h3>
              </header>
              <ul className="list-disc marker:text-neutral-900">
                <b>Arizona Valley Regional</b>
                <li>Judges' Award</li>
              </ul>
            </section>
            <section>
              <header className="text-neutral-900">
                <h3 className="text-2xl">2021</h3>
              </header>
              <ul className="list-disc marker:text-neutral-900">
                <b>Neon Group-FIRST Innovation Challenge</b>
                <li>FIRST Innovation Challenge Semi-Finalist Award</li>
              </ul>
            </section>
            <section>
              <header className="text-neutral-900">
                <h3 className="text-2xl">2020</h3>
              </header>
              <ul className="list-disc marker:text-neutral-900">
                <b>Arizona West Regional</b>
                <li>Regional Chairman's Award</li>
              </ul>
            </section>
            <section>
              <header className="text-neutral-900">
                <h3 className="text-2xl">2019</h3>
              </header>
              <ul className="list-disc marker:text-neutral-900">
                <b>Arizona West Regional</b>
                <li>Safety Award sponsored by Underwriters Laboratories</li>
                <li>Industrial Design Award sponsored by General Motors</li>
                <li>FIRST Dean's List Finalist Award</li>
                <b>Arizona North Regional</b>
                <li>Industrial Design Award sponsored by General Motors</li>
              </ul>
            </section>
            <section>
              <header className="text-neutral-900">
                <h3 className="text-2xl">2018</h3>
              </header>
              <ul className="list-disc marker:text-neutral-900">
                <b>Arizona West Regional</b>
                <li>Excellence in Engineering Award sponsored by Delphi - Turning Division Wildcard</li>
                <li>Excellence in Engineering Award sponsored by Delphi</li>
                <li>Regional Finalists</li>
              </ul>
            </section>
            <section>
              <header className="text-neutral-900">
                <h3 className="text-2xl">2017</h3>
              </header>
              <ul className="list-disc marker:text-neutral-900">
                <b>Arizona North Regional</b>
                <li>Safety Award sponsored by Underwriters Laboratories</li>
                <li>Regional Finalists</li>
              </ul>
            </section>
            <section>
              <header className="text-neutral-900">
                <h3 className="text-2xl">2016</h3>
              </header>
              <ul className="list-disc marker:text-neutral-900">
                <b>Arizona West Regional</b>
                <li>Wildcard</li>
                <li>Industrial Safety Award sponsored by Underwriters Laboratories</li>
                <li>Regional Finalists</li>
              </ul>
            </section>
            <section>
              <header className="text-neutral-900">
                <h3 className="text-2xl">2015</h3>
              </header>
              <ul className="list-disc marker:text-neutral-900">
                <b>Arizona West Regional</b>
                <li>Woodie Flowers Finalist Award</li>
                <li>Regional Finalists</li>
                <b>Arizona East Regional</b>
                <li>Industrial Safety Award sponsored by Underwriters Laboratories</li>
              </ul>
            </section>
            <section>
              <header className="text-neutral-900">
                <h3 className="text-2xl">2014</h3>
              </header>
              <ul className="list-disc marker:text-neutral-900">
                <b>Arizona Regional</b>
                <li>Creativity Award sponsored by Xerox</li>
                <b>Las Vegas Regional</b>
                <li>Creativity Award sponsored by Xerox</li>
              </ul>
            </section>
            <section>
              <header className="text-neutral-900">
                <h3 className="text-2xl">2013</h3>
              </header>
              <ul className="list-disc marker:text-neutral-900">
                <b>Arizona West Regional</b>
                <li>Excellence in Engineering Award sponsored by Delphi - Turning Division Wildcard</li>
                <li>Excellence in Engineering Award sponsored by Delphi</li>
                <li>Regional Finalists</li>
              </ul>
            </section>
            <section>
              <header className="text-neutral-900">
                <h3 className="text-2xl">2012</h3>
              </header>
              <ul className="list-disc marker:text-neutral-900">
                <b>Arizona Regional</b>
                <li>Rookie All Star</li>
                <li>Regional Finalists</li>
              </ul>
            </section>
          </main>
        </section>
      </main>
    </main>
  );
};