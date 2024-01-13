import PageHeader from "@/components/page-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

function Sponsor({ title, src, children }) {
  return (
    <AccordionItem value={encodeURIComponent(title)}>
      <AccordionTrigger>
        <h3 className="text-3xl flex flex-row flex-nowrap items-center gap-2">
          {title}
          {
            (function() {
              if (src) {
                return <Image src={`/assets/img/${src}`} alt={`${title} logo`} width={40} height={40} sizes="40px" className="inline rounded-md" />;
              };
            })()
          }
        </h3>
      </AccordionTrigger>
      <AccordionContent>
        {children}
      </AccordionContent>
    </AccordionItem>
  );
};
export default function Page() {
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <PageHeader title="Sponsors & Partners" description="We rely on the support of our community. Whether you're a local business, global conglomerate, or self employed, there's need for your support." src="/assets/img/sponsors-and-partners.jpg" />
      <main className="px-6 min-[480px]:px-12">
        <header className="text-neutral-900 mb-4">
          <h2 className="text-3xl">Our Sponsors and Partners</h2>
          <p>Without our sponsors and partners, Sabercat Robotics would not be possible. Because of this, to show our gratitude, here is a list of every sponsorship and partnership we currently have.</p>
        </header>
        <Accordion type="single" collapsible className="w-full">
          <Sponsor title="SUSD Foundation and the Farley Family Charitable Foundation" src="susd-foundation.png">
            <p className="text-lg">The SUSD Foundation and the Farley Family Charitable Foundation is a non-profit that has supplied our robotics facility since 2018 and has given us Platinum +++ equipment. If you&apos;re interested in learning more on how the SUSD Foundation and the Farley Family Charitable Foundation help support educational programs such as our, you can visit the <a href="https://susdfoundation.org/" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 text-yellow-500 hover:text-yellow-600 focus-visible:text-yellow-600">SUSD Foundation website</a>.</p>
          </Sponsor>
          <Sponsor title="Axon" src="axon.png">
            <p className="text-lg">Axon is a technology company who has been a great supporter of our team, donating over $5,000 to our team, allowing us to provide robotics computers for all of our students who need it. For those who are interested in learning more about Axon, feel free to visit <a href="https://axon.com/" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 text-yellow-500 hover:text-yellow-600 focus-visible:text-yellow-600">Axon website</a>.</p>
          </Sponsor>
          <Sponsor title="Rowland Family Fund">
            <p className="text-lg">The Rowland Family Fund, started by the Rowland Family, is a non-profit who has continuously shown their support for our team over the years. Thanks to this family, it is possible for our team to achieve our goals of not only making an amazing robot, but also the ability to work together on this robot.</p>
          </Sponsor>
          <Sponsor title="Raytheon" src="raytheon.png">
            <p className="text-lg">Raytheon is a company that helps it&apos;s parent company, RTX, solve the hardest problems in aerospace and defense. So far, Raytheon has donated $2,500 to our team, allowing us to buy important materials required for our robot. For more information on RTX and Raytheon, visit the <a href="https://rtx.com/" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 text-yellow-500 hover:text-yellow-600 focus-visible:text-yellow-600">RTX website</a>.</p>
          </Sponsor>
          <Sponsor title="SOAR Foundation" src="soar-foundation.jfif">
            <p className="text-lg">The SOAR Foundation helps spark interest in STEM/Aerospace early on in a child&apos;s educational journey. If you&apos;re interested in learning more about the SOAR Foundation, visit the <a href="https://soar-foundation.net/" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 text-yellow-500 hover:text-yellow-600 focus-visible:text-yellow-600">SOAR Foundation website</a>.</p>
          </Sponsor>
          <Sponsor title="Scottsdale Unified School District" src="susd.png">
            <p className="text-lg">Scottsdale Unified School District (commonly referred to as SUSD for short) is a school district located in Scottsdale which manages many Grade-A schools such as Navajo Elementary School, Mohave Middle School, and even our school; Saguaro High School. If you&apos;re interested in learning more about SUSD, feel free to go to the <a href="https://susd.org/" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 text-yellow-500 hover:text-yellow-600 focus-visible:text-yellow-600">SUSD website</a>.</p>
          </Sponsor>
          <Sponsor title="Darryl Szerka">
            <p className="text-lg">Darryl Szerka is an individual donor who had helped fund a large part of our team in the 2022 and 2023 school year. If it wasn&apos;t for Darryl, we doubt we would have such a successful year, which allowed for our students and overall team to exceed in robotics.</p>
          </Sponsor>
          <Sponsor title="Albertsons Companies" src="albertsons-companies.jpg">
            <p className="text-lg">Albertsons Companies, most popular for owning food and drug retail store Albertsons, is a company that works hard to operate food and drug retail stores that help our people, communities, and planet. To learn more, visit the <a href="https://www.albertsonscompanies.com/" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 text-yellow-500 hover:text-yellow-600 focus-visible:text-yellow-600">Albertsons Companies website</a>.</p>
          </Sponsor>
          <Sponsor title="Employees of Microchip Technology" src="microchip-technology.png">
            <p className="text-lg">Microchip Technology is a company which produces technology such as oscillators, clock generators, clock and data distribution products and real-time clock and calendar devices. The generous employees at Microchip Techology have donated their Arizona Tax Credits to support our team, allowing us to pay operational costs without worrying. For more information, please visit the <a href="https://www.microchip.com/" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 text-yellow-500 hover:text-yellow-600 focus-visible:text-yellow-600">Microchip Technology website</a>.</p>
          </Sponsor>
        </Accordion>
      </main>
    </main>
  );
};