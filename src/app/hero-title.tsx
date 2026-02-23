"use client";

import { TrueFocus } from "@/components/true-focus";

export function HeroTitle() {
  return (
    <div className="relative w-full flex items-center justify-center flex-wrap gap-x-4 md:gap-x-8 animate-fade-in-down">
      <TrueFocus
        manualMode={false}
        blurAmount={5}
        borderColor="hsl(var(--primary))"
        glowColor="hsla(var(--primary), 0.6)"
        animationDuration={0.8}
        pauseBetweenAnimations={0.5}
      >
        <span className="text-[2.5rem] md:text-[8rem] lg:text-[10rem] font-black uppercase">
          MEDINA
        </span>
        <span className="text-[2.5rem] md:text-[8rem] lg:text-[10rem] font-black uppercase">
          RENT
        </span>
        <span className="text-primary text-[2.5rem] md:text-[8rem] lg:text-[10rem] font-black uppercase">
          CAR
        </span>
        <span className="text-primary text-[2.5rem] md:text-[8rem] lg:text-[10rem] font-black uppercase">
          MEDAN
        </span>
      </TrueFocus>
    </div>
  );
}
