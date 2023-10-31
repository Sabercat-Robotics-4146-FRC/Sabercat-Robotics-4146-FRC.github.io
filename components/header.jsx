import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex flex-wrap items-center justify-center gap-2 md:justify-between py-5 px-4 bg-white border-b shadow-black shadow-[0_-8px_16px]">
      <Link className="flex flex-nowrap items-center" href="/">
        <Image className="w-12 mr-4" src="/assets/img/head-raw-large.png" alt="Sabercat Robotics logo" height={50} width={50} quality={100}></Image>
        <h1 className="font-semibold">Sabercat Robotics</h1>
      </Link>
      <nav className="font-medium flex flex-wrap flex-col divide-y md:flex-row md:divide-x md:divide-y-0">
        <Link href="/" className="px-2 transition-colors duration-300 hover:text-yellow-500 focus-visible:text-yellow-500">Home</Link>
        <Link href="/tax-credit" className="px-2 transition-colors duration-300 hover:text-yellow-500 focus-visible:text-yellow-500">Tax Credit</Link>
        <Link href="/awards" className="px-2 transition-colors duration-300 hover:text-yellow-500 focus-visible:text-yellow-500">Awards</Link>
        <Link href="/sponsors-and-partners" className="px-2 transition-colors duration-300 hover:text-yellow-500 focus-visible:text-yellow-500">Sponsors & Partners</Link>
      </nav>
    </header>
  );
};