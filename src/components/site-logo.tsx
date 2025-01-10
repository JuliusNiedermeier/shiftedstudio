"use client";

import { cn } from "@/utils/cn";
import { FC } from "react";
import { motion } from "framer-motion";

const lineBaseClasses = "bg-foreground-primary";

const lineHeightRem = 0.25;
const lineHeight = `${lineHeightRem}rem`;

const lineWidthRem = 1;
const lineWidth = `${lineWidthRem}rem`;

export const SiteLogo: FC = () => {
  return (
    <motion.div
      className="flex"
      style={{
        height: `${4 * lineHeightRem}rem`,
        width: `${lineWidthRem * 2}rem`,
      }}
    >
      <motion.div
        className="flex flex-col"
        style={{ gap: lineHeight }}
        initial={{ marginTop: `${lineHeightRem / 2}rem` }}
        whileInView={{ marginTop: 0 }}
      >
        <div className={cn(lineBaseClasses)} style={{ width: lineWidth, height: lineHeight }} />
        <div className={cn(lineBaseClasses)} style={{ width: lineWidth, height: lineHeight }} />
      </motion.div>
      <motion.div
        className="flex flex-col"
        style={{ gap: lineHeight }}
        initial={{ marginTop: `${lineHeightRem / 2}rem` }}
        whileInView={{ marginTop: lineHeight }}
      >
        <div className={cn(lineBaseClasses)} style={{ width: lineWidth, height: lineHeight }} />
        <div className={cn(lineBaseClasses)} style={{ width: lineWidth, height: lineHeight }} />
      </motion.div>
    </motion.div>
  );
};
