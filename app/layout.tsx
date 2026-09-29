import type { Metadata } from "next";
import { Lobster_Two, Inter } from "next/font/google";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/manual/general/app-sidebar";
import "./globals.css";
import { Provider } from "@/context/my-providers";

const lobster_two = Lobster_Two({
  variable: "--font-lobster-two",
  subsets: ["latin"],
  weight: ["400", "700"]
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"]
})


export const metadata: Metadata = {
  title: "Fuel Fit",
  description:
    "Fuel Fit simplifies your fitness journey with a smart meal planner, supporting calorie goals and dietary requirements, plus a drag-and-drop workout planner to keep your training on track.",
  keywords: [
    "fitness app",
    "meal planner",
    "workout planner",
    "calorie tracker",
    "dietary requirements",
    "exercise planner",
  ],
  authors: [{ url: "https://fuel-fit-two.vercel.app" }],
  metadataBase: new URL("https://fuel-fit-two.vercel.app"),
  openGraph: {
    title: "Fuel Fit",
    description:
      "Simplify your fitness with personalised meal plans and a drag-and-drop workout planner.",
    url: "https://fuel-fit-two.vercel.app",
    siteName: "Fuel Fit",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fuel Fit",
    description:
      "Simplify your fitness with personalised meal plans and a drag-and-drop workout planner.",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased `}
        
      >
        <Provider>
          <SidebarProvider>
            <SidebarTrigger className="fixed border-2 border-primary bg-background rounded-full flex flex-col pt-12 pb-8 sm:hidden w-15 top-0 z-50" size={'default'}/>
            <AppSidebar/>
            {children}
            </SidebarProvider>
        </Provider>
      </body>
    </html>
  );
}
