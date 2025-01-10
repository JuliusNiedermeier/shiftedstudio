import { ExpansionToggleIcon } from "@/components/expansion-toggle-icon";
import { ParalaxImageGallery } from "@/components/paralax-image-gallery";
import { SiteLogo } from "@/components/site-logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

interface Service {
  title: string;
  content: string;
}

const services: Service[] = [
  {
    title: "Webdesign",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia modi sit corrupti accusamus error recusandae, neque illo totam tenetur, quod impedit perferendis aliquam dicta ad necessitatibus quae quibusdam veritatis. Laboriosam!",
  },
  {
    title: "Appdesign",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia modi sit corrupti accusamus error recusandae, neque illo totam tenetur, quod impedit perferendis aliquam dicta ad necessitatibus quae quibusdam veritatis. Laboriosam!",
  },
  {
    title: "Webentwicklung",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia modi sit corrupti accusamus error recusandae, neque illo totam tenetur, quod impedit perferendis aliquam dicta ad necessitatibus quae quibusdam veritatis. Laboriosam!",
  },
  {
    title: "Appentwicklung",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia modi sit corrupti accusamus error recusandae, neque illo totam tenetur, quod impedit perferendis aliquam dicta ad necessitatibus quae quibusdam veritatis. Laboriosam!",
  },
];

export default function Home() {
  return (
    <div className="p-8 flex flex-col gap-16">
      <SiteLogo />

      <div>
        <div className="text-label-primary">Berlin</div>
        <div className="text-label-secondary">Germany</div>
      </div>

      <div className="text-body w-1/2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente error
        hic veritatis totam reprehenderit dolores aliquam corrupti ipsum
        assumenda. Molestiae amet dolore, eaque molestias veniam provident
        reprehenderit non sint at?
      </div>

      <div className="text-heading">Leistungen</div>

      <div className="text-heading-lg">
        <div className="font-serif">Stilvoll.</div>
        <div className="font-sans-variant">Einzigartig.</div>
        <div>{"Fokussiert an's Ziel."}</div>
      </div>

      <ParalaxImageGallery />

      <div className="flex">
        <div className="flex-1">Services</div>
        <Accordion type="single" collapsible className="grid gap-4 flex-[2]">
          {services.map((service, index) => (
            <AccordionItem key={index} value={service.title}>
              <AccordionTrigger className="group flex justify-between items-center w-full">
                {service.title}
                <ExpansionToggleIcon />
              </AccordionTrigger>
              <AccordionContent className="max-w-[40rem] data-[state=open]:animate-expandAccordionContent data-[state=closed]:animate-collapseAccordionContent transition-transform overflow-hidden">
                <div className="pt-2 pb-4">{service.content}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="text-display-lg">Shifted</div>
    </div>
  );
}
