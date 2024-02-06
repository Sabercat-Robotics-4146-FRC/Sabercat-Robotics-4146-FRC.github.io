import Image from "next/image";

export default function PageHeader({ title, description, src }) {
  return (
    <header className="relative w-full m-auto px-5 py-20 text-center mb-6">
      <Image className="absolute top-0 left-0 h-full w-full object-cover -z-[1] brightness-50 rounded-xl sm:rounded-3xl" src={src} alt={title} width={1920} height={1280} priority loading="eager" sizes="90vw" />
      <h1 className="text-slate-100 text-4xl font-semibold [text-shadow:0_0_10px_black]">{title}</h1>
      <p className="text-white/75 text-xl font-medium [text-shadow:0_0_10px_black]">{description}</p>
    </header>
  );
};