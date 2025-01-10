import { ExpansionToggleIcon } from "@/components/expansion-toggle-icon";
import { ParalaxImageGallery } from "@/components/paralax-image-gallery";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import Image from "next/image";
import placeholderStudio from "@/images/placeholder-studio.jpg";

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
    <>
      <div className="min-h-screen p-8 flex flex-col justify-end gap-40">
        <div className="text-heading-lg mt-52">
          <div>Wir schaffen digitale Erlebnisse.</div>
          <div className="font-serif font-regular">Stilvoll.</div>
          <div className="font-sans-variant">Einzigartig.</div>
          <div>{"Fokussiert an's Ziel."}</div>
        </div>
        <div className="flex items-end">
          <div className="flex-1">Projekte</div>
          <div className="flex-[2] items-end flex gap-20">
            <div className="py-6 px-10 bg-foreground-primary rounded-full">
              <div className="text-background-primary whitespace-nowrap text-label-primary">
                Gespräch planen
              </div>
              <div className="text-foreground-secondary whitespace-nowrap text-label-secondary">
                30 Minuten
              </div>
            </div>
            <div className="text-label-primary text-balance">
              Wir setzen auf funktionales Design um das Maximum aus deinem
              Business zu holen. Dabei sind wir ein kleines Team, das darauf
              bedacht ist, immer die Wünsche des Kunden an erste Stelle zu
              setzen.
            </div>
          </div>
        </div>
      </div>
      <div className="p-8">
        <ParalaxImageGallery />

        <div className="flex">
          <div className="flex-1">Services</div>
          <Accordion
            type="single"
            collapsible
            className="grid gap-4 flex-[2] mt-20"
          >
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

        <div className="mt-64">Studio</div>

        <div className="flex mt-8 gap-8">
          <div className="flex-[2] relative aspect-[1.5]">
            <Image
              src={placeholderStudio}
              fill
              alt="Studio"
              className="object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="text-label-primary">Berlin</div>
              <div className="text-label-secondary text-foreground-secondary">
                Germany
              </div>
            </div>
            <div>
              Wir setzen auf funktionales Design um das Maximum aus deinem
              Business zu holen. Dabei sind wir ein kleines Team, das darauf
              bedacht ist, immer die Wünsche des Kunden an erste Stelle zu
              setzen.
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end mt-64">
          <div className="max-w-96">
            <div className="text-label-primary">Emil Molt Akademie</div>
            <div className="mt-10">
              Tolle Zusammenarbeit. Wir haben genau bekommen was wir wollten.
              Schnell, inefach und unkompliziert. Wir können ShiftedStudio nur
              weiterempfehlen!
            </div>
            <div className="text-label-primary mt-6">Norman Daley</div>
            <div className="text-label-secondary text-foreground-secondary">
              Geschäftsführer
            </div>
          </div>

          <div className="py-6 px-10 bg-foreground-primary rounded-full">
            <div className="text-background-primary whitespace-nowrap text-label-primary">
              Gespräch planen
            </div>
            <div className="text-foreground-secondary whitespace-nowrap text-label-secondary">
              30 Minuten
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
