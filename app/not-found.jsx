import Link from "next/link";

export default function NotFound() {
  return (
    <main className="px-8 py-24 flex flex-col flex-wrap md:flex-row md:flex-nowrap justify-between gap-12 relative text-neutral-900/75">
      <aside className="w-full md:w-1/4">
        <p className="border-b-2 border-yellow-500 font-medium text-neutral-900">Error 404</p>
      </aside>
      <main className="flex flex-col flex-wrap w-full md:w-1/2">
        <h2 className="mb-3 text-3xl text-neutral-900">Page <span className="text-yellow-500">not</span> found</h2>
        <p className="mb-6">The page you were looking for could not be found. Please press the button below to go back to the homepage. If you think this is a mistake, please <Link href="/#contact" className="text-yellow-500 transition-colors duration-300 hover:text-yellow-600 focus-visible:text-yellow-600">contact us</Link>. Thank you!</p>
        <Link href="/" className="w-fit overflow-clip text-neutral-900 border-2 px-6 py-3 leading-none border-yellow-500 font-medium relative transition-colors duration-500 hover:text-slate-100 focus-visible:text-slate-100 before:absolute before:h-full before:w-full before:scale-x-0 before:inset-0 before:bg-yellow-500 before:-z-[1] before:origin-left before:transition-[transform,transform-origin] before:duration-[500ms,0ms] before:delay-[0ms,500ms] hover:before:scale-x-100 hover:before:origin-right focus-visible:before:scale-x-100 focus-visible:before:origin-right">Homepage</Link>
      </main>
      <aside className="w-full md:w-1/4">
        <svg className="m-auto max-w-[50%] md:max-w-full h-fit" width="1200px" height="1200px" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <title>Printer Vector</title>
          <path d="M20 30 H 2.5 A 2.5 2.5 0 0 0 0 32.5 V 77.5 A 2.5 2.5 0 0 0 2.5 80 H 117.5 A 2.5 2.5 0 0 0 120 77.5 V 32.5 A 2.5 2.5 0 0 0 117.5 30 H 100" fill="#adb5bd"></path>
          <path d="M20 50 V 0 H 100 V 50 Z" fill="#f8f9fa"></path>
          <path d="M30 10 H 90" stroke="#ced4da" strokeWidth={1}></path>
          <path d="M30 10 H 90" stroke="#ced4da" strokeWidth={1}></path>
          <path d="M30 15 H 90" stroke="#ced4da" strokeWidth={1}></path>
          <path d="M30 20 H 90" stroke="#ced4da" strokeWidth={1}></path>
          <path d="M30 25 H 90" stroke="#ced4da" strokeWidth={1}></path>
          <path d="M30 30 H 90" stroke="#ced4da" strokeWidth={1}></path>
          <path d="M30 35 H 90" stroke="#ced4da" strokeWidth={1}></path>
          <path d="M30 40 H 90" stroke="#ced4da" strokeWidth={1}></path>
          <path d="M10 80 V 87.5 A 2.5 2.5 0 0 0 12.5 90 H 107.5 A 2.5 2.5 0 0 0 110 87.5 V 80" fill="#6c757d"></path>
          <circle cx="95.5" cy="65" r="2.5" fill="#5cbc72"></circle>
          <circle cx="101.5" cy="65" r="2.5" fill="#ffd043"></circle>
          <circle cx="107.5" cy="65" r="2.5" fill="#e46572"></circle>
          <path d="M15 90 V 120" stroke="#ced4da" strokeWidth={2.5}></path>
          <path d="M20 90 V 120" stroke="#ced4da" strokeWidth={2.5}></path>
          <path d="M25 90 V 120" stroke="#ced4da" strokeWidth={2.5}></path>
          <path d="M30 90 V 120" stroke="#ced4da" strokeWidth={2.5}></path>
          <path d="M35 90 V 120" stroke="#ced4da" strokeWidth={2.5}></path>
          <path d="M40 90 V 120" stroke="#ced4da" strokeWidth={2.5}></path>
          <path d="M45 90 V 120" stroke="#ced4da" strokeWidth={2.5}></path>
          <path d="M50 90 V 120" stroke="#ced4da" strokeWidth={2.5}></path>
          <path d="M55 90 V 120" stroke="#ced4da" strokeWidth={2.5}></path>
          <path d="M60 90 V 120" stroke="#ced4da" strokeWidth={2.5}></path>
          <path d="M65 90 V 120" stroke="#ced4da" strokeWidth={2.5}></path>
          <path d="M70 90 V 120" stroke="#ced4da" strokeWidth={2.5}></path>
          <path d="M75 90 V 120" stroke="#ced4da" strokeWidth={2.5}></path>
          <path d="M80 90 V 120" stroke="#ced4da" strokeWidth={2.5}></path>
          <path d="M85 90 V 120" stroke="#ced4da" strokeWidth={2.5}></path>
          <path d="M90 90 V 120" stroke="#ced4da" strokeWidth={2.5}></path>
          <path d="M95 90 V 120" stroke="#ced4da" strokeWidth={2.5}></path>
          <path d="M100 90 V 120" stroke="#ced4da" strokeWidth={2.5}></path>
          <path d="M105 90 V 120" stroke="#ced4da" strokeWidth={2.5}></path>
        </svg>
      </aside>
    </main>
  );
};