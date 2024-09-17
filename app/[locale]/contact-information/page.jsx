import PageHeader from "@/components/page-header";

export default function Page() {
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <PageHeader title="Contact Information" description="Our different team members' contacts." src="/assets/img/15.jpg" />
      <main className="px-6 min-[480px]:px-12">
        <section>
          <header className="text-neutral-900 mb-4">
            <h2 className="text-3xl">Head of Robot</h2>
          </header>
          <main className="mb-4 flex flex-col flex-wrap space-y-2">
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
          <main className="mb-4 flex flex-col flex-wrap space-y-2">
            <section>
              <h3 className="text-2xl">Korbin Gugisberg</h3>
              <p>Job Title: Head of Business</p>
              <p>Email: <a href="mailto:korbin.gugisberg@sabercatrobotics.com" className="transition-colors duration-300 text-yellow-500 hover:text-yellow-600 focus-visible:text-yellow-600">korbin.gugisberg@sabercatrobotics.com</a></p>
            </section>
            <section>
              <header className="text-neutral-900 mb-4">
                <h2 className="text-3xl">Software</h2>
              </header>
              <main className="mb-4 flex flex-col flex-wrap space-y-2">
                <section>
                  <h3 className="text-2xl">Ryder Horne</h3>
                  <p>Job Title: Website Developer and Designer</p>
                  <p>Email: <a href="mailto:ryder.horne@sabercatrobotics.com" className="transition-colors duration-300 text-yellow-500 hover:text-yellow-600 focus-visible:text-yellow-600">ryder.horne@sabercatrobotics.com</a></p>
                </section>
              </main>
            </section>
          </main>
        </section>
      </main>
    </main>
  );
};