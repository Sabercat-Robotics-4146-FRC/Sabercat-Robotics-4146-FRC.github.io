import Image from "next/image";

export default function Page() {
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <header className="relative w-full m-auto px-5 py-20 text-center mb-6">
        <Image className="absolute inset-0 h-full w-full object-cover -z-[1] brightness-50 rounded-xl sm:rounded-3xl" src="/assets/img/innovation-center.jpg" alt="Innovation Center" width={256} height={368} quality={100}></Image>
        <h2 className="text-slate-100 text-4xl font-semibold">Innovation Center</h2>
        <p className="text-white/75 text-xl font-medium">Learn more about Saguaro High School's Innovation Center and our part in its creation.</p>
      </header>
      <main className="px-6 min-[480px]:px-12">
        <header className="text-neutral-900">
          <h2 className="text-3xl">About the Innovation Center</h2>
        </header>
        <p>The SUSD Innovation Center is a makerspace for our community to use and experience STEM, as well as the message of FIRST. Sabercat Robotics members played a vital role in the design and creation of the Innovation Center, working closely with our district, charitable foundations, and the Saguaro Math and Science Academy to get it built in 2019. The center has a classroom, a full FRC playing field, and a fully-equipped shop with tools and storage, making it a driving force behind the success of our team.</p>
      </main>
    </main>
  );
};