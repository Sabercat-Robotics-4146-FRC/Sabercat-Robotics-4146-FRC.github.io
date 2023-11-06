import Image from "next/image";

export default function Page() {
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <header className="relative w-full m-auto px-5 py-20 text-center mb-6">
        <Image className="absolute inset-0 h-full w-full object-cover -z-[1] brightness-50 rounded-xl sm:rounded-3xl" src="/assets/img/sponsors-and-partners.jpg" alt="Sponsors & Partners" width={256} height={368} quality={100} priority></Image>
        <h2 className="text-slate-100 text-4xl font-semibold">Sponsors & Partners</h2>
        <p className="text-white/75 text-xl font-medium">We rely on the support of our community. Whether you're a local business, global conglomerate, or self employed, there's need for your support.</p>
      </header>
      <main className="px-6 min-[480px]:px-12">
        <header className="text-neutral-900 mb-4">
          <h2 className="text-3xl">Our Sponsors and Partners</h2>
          <p>Without our sponsors and partners, Sabercat Robotics would not be possible. Because of this, to show our gratitude, here is a list of every sponsorship and partnership we currently have.</p>
        </header>
        <section className="text-neutral-900 mb-2">
          <header>
            <h3 className="text-2xl flex flex-row flex-nowrap items-end gap-2">Sponsor LLC<Image src="/assets/img/smsa.png" alt="Sponsor/Partner logo" width={40} height={40} className="inline"></Image></h3>
          </header>
          <p>Sponsor LLC is a sponsor that innovates the field of STEM.</p>
        </section>
        <section className="text-neutral-900 mb-2">
          <header>
            <h3 className="text-2xl flex flex-row flex-nowrap items-end gap-2">Partner Inc.<Image src="/assets/img/smsa.png" alt="Sponsor/Partner logo" width={40} height={40} className="inline"></Image></h3>
          </header>
          <p>Partner Inc. is a partner that innovates the field of STEM.</p>
        </section>
      </main>
    </main>
  );
};