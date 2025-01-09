import { ParalaxImageGallery } from "@/components/paralax-image-gallery";

export default function Home() {
  return (
    <div className="p-8 flex flex-col gap-16">
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
        <div>Fokussiert an's Ziel.</div>
      </div>

      <ParalaxImageGallery />

      <div className="text-display-lg">Shifted</div>
    </div>
  );
}
