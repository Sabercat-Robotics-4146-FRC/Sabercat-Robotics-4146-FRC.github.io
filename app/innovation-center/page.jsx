import PageHeader from "@/components/page-header";

export default function Page() {
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <PageHeader title="Innovation Center" description="Learn more about Saguaro High School's Innovation Center and our part in its creation." src="/assets/img/innovation-center.jpg" />
      <main className="px-6 min-[480px]:px-12">
        <header className="text-neutral-900">
          <h2 className="text-3xl">About the Innovation Center</h2>
        </header>
        <p>The SUSD Innovation Center is a makerspace for our community to use and experience STEM, as well as the message of FIRST. Sabercat Robotics members played a vital role in the design and creation of the Innovation Center, working closely with our district, charitable foundations, and the Saguaro Math and Science Academy to get it built in 2019. The center has a classroom, a full FRC playing field, and a fully-equipped shop with tools and storage, making it a driving force behind the success of our team.</p>
      </main>
    </main>
  );
};