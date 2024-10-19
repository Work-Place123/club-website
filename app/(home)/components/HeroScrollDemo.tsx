"use client";
import React from "react";
import { ContainerScroll } from "@/app/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div  className="flex flex-col overflow-hidden" id="home">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white mb-10 ">
            Welcome to Club   <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Where the Night Comes Alive!
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/assets/photo3.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
