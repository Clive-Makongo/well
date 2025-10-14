import { ReactNode } from "react";
import { yoga } from "@/public/assets";
import Image from "next/image";

export default function Home(): ReactNode {
  return (
    <div className="relative w-full h-screen bg-slate">
      <Image
        src={yoga}
        alt="Yoga background"
        fill
        className="object-cover w-full"
        priority
      />
      <div className="relative bg-white top-50 left-175 w-90 z-10 p-4">
       <h1 className="font-bold text-7xl">Fuel Fit</h1>
        <p className="text-xl">The best you is only a click away</p>
      </div>
    </div>
  )
}