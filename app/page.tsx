import { ReactNode } from "react";
import { yoga } from "@/public/assets";
import Image from "next/image";

export default function Home(): ReactNode {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={yoga}
        alt="Yoga background"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-10">
        {/* Your content here */}
      </div>
    </div>
  )
}