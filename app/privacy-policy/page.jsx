import Image from "next/image";

export default function Page() {
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <header className="relative w-full m-auto px-5 py-20 text-center mb-6">
        <Image className="absolute inset-0 h-full w-full object-cover -z-[1] brightness-50 rounded-xl sm:rounded-3xl" src="/assets/img/awards.jpg" alt="Awards" width={672} height={228} quality={100}></Image>
        <h2 className="text-slate-100 text-4xl font-semibold">Privacy Policy</h2>
        <p className="text-white/75 text-xl font-medium">Your privacy is as important to us as it is to you. That's why we tell you how we handle your data.</p>
      </header>
      <main className="px-6 min-[480px]:px-12">
        
      </main>
    </main>
  );
};