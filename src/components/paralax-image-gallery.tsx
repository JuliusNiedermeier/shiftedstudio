"use client";

import { FC, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import placeholder1 from "@/images/placeholder-1.webp";
import placeholder2 from "@/images/placeholder-2.webp";
import placeholder3 from "@/images/placeholder-3.webp";
import {
  motion,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

interface Item {
  image: StaticImageData;
  number: number;
  heading: string;
  subheading: string;
}

const items: Omit<Item, "number">[] = [
  {
    image: placeholder1,
    heading: "Neugestaltung & Umsetzung der Schulwebsite",
    subheading: "Emil Molt Akademie",
  },
  {
    image: placeholder2,
    heading: "Neugestaltung & Umsetzung der Schulwebsite",
    subheading: "Emil Molt Akademie",
  },
  {
    image: placeholder3,
    heading: "Neugestaltung & Umsetzung der Schulwebsite",
    subheading: "Emil Molt Akademie",
  },
];

const imageShift = 50;

export const ParalaxImageGallery: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const inView = useMotionValue<boolean>(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    axis: "y",
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const currentInView = inView.get();
    if (currentInView && (value <= 0 || value >= 1)) return inView.set(false);
    if (!currentInView) return inView.set(true);
  });

  return (
    <div ref={containerRef} className="grid gap-2">
      {items.map((item, index) => (
        <GalleryItem
          key={index}
          item={{ ...item, number: index + 1 }}
          fixed={inView}
        />
      ))}
    </div>
  );
};

const GalleryItem: FC<{ item: Item; fixed: MotionValue<boolean> }> = ({
  item,
  fixed,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    axis: "y",
    offset: ["start end", "end start"],
  });

  const imageTranslateY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -imageShift]
  );

  const position = useTransform(fixed, (fixed) =>
    fixed ? "fixed" : "absolute"
  );

  const padding = useTransform(fixed, (fixed) => (fixed ? "2rem" : "0"));

  return (
    <div
      ref={containerRef}
      className="h-screen flex items-center relative"
      style={{ clipPath: "inset(0)" }}
    >
      <div className="w-1/3">
        <span className="text-display font-serif-numeric">
          {item.number.toString().padStart(2, "0")}
        </span>
        <h3 className="text-label-primary">{item.heading}</h3>
        <span className="text-label-secondary">{item.subheading}</span>
      </div>

      <motion.div
        className="absolute top-0 left-0 h-full w-full flex items-center justify-end"
        style={{ position, paddingInline: padding }}
      >
        <div className="w-2/3 h-[50vh] relative overflow-hidden">
          <motion.div
            className="w-full"
            style={{
              y: imageTranslateY,
              height: `calc(100% + ${imageShift / 1.5}px)`,
            }}
          >
            <Image
              src={item.image}
              alt={item.heading}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
