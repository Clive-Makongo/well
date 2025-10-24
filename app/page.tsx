import { ReactNode } from "react";
import { yoga } from "@/public/assets";
import Image from "next/image";

export default function Home(): ReactNode {
  return (
    <div className="relative w-full h-screen bg-background overflow-hidden flex items-center justify-center">
      <Image
        src={yoga}
        alt="Yoga background"
        fill
        className="object-cover object-center opacity-70 z-10"
        priority
      />
      <div className="absolute bg-primary-foreground left-1/2 sm:left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2 m-2 p-2 z-10">
        <h1 className="font-bold text-7xl">Fuel Fit</h1>
        <p className="text-accent-foreground">The best you is just a click away</p>
      </div>
    </div>
  )
}