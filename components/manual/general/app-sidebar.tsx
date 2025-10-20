"use client"
import { Calendar, Home, UtensilsCrossed, Dumbbell, Heart } from "lucide-react"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from "@/components/ui/sidebar"
import { useEffect } from "react"

// Menu items.
const items = [
  {
    isMobile: true,
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    isMobile: true,
    title: "Meal",
    url: "/meal",
    icon: UtensilsCrossed,
  },
  {
    isMobile: false,
    title: "Work Out",
    url: "/workout",
    icon: Dumbbell,
  }
]

export function AppSidebar() {
  const { isMobile, setOpenMobile } = useSidebar()
  useEffect(() => { console.log(isMobile, " help") }, [isMobile])

  const handleClick = () => {
    if (isMobile) { setOpenMobile(false) }
  }

  // get rid of drag and drop on mobile until I can figure something out
  const renderMobileMenu = () => {
    return (
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Fuel Fit</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.filter(item => item.isMobile).map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton onClick={handleClick} asChild>
                      <Link onClick={handleClick} href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
  }

  const renderDesktopMenu = () => {
    return (
      <Sidebar collapsible="offcanvas">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel></SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton onClick={handleClick} asChild>
                          
                      <Link onClick={handleClick} href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>)
  }

  if (isMobile) {
    return renderMobileMenu()
  } else {
    return renderDesktopMenu()
  }

}
  