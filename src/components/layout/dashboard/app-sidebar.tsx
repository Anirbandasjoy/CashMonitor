"use client";

import * as React from "react";
import {
  Activity,
  ArrowLeftRight,
  CreativeCommonsIcon,
  DollarSign,
  Info,
  LayoutDashboard,
  Moon,
  Settings,
  SunMoon,
  Trash2,
  User,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { TeamSwitcher } from "./team-switcher";
import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-users";

// This is sample data.
const data = {
  user: {
    name: "Joy das",
    email: "joy600508@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "CashMonitor",
      logo: DollarSign,
      plan: "CashMonitor",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Income",
      url: "#",
      icon: Activity,
      isActive: true,
    },
    {
      title: "Categories",
      url: "#",
      icon: ArrowLeftRight,
      isActive: true,
    },
  ],
  projects: [
    {
      name: "Settings",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "Account",
          icon: User,
        },
        {
          title: "Personal info",
          icon: Info,
          url: "#",
        },
        {
          title: "Delete Account",
          icon: Trash2,
          url: "#",
        },
      ],
    },
    {
      name: "Themes",
      url: "#",
      icon: SunMoon,
      items: [
        {
          title: "Light Mode",
          icon: Moon,
          url: "#",
        },
        {
          title: "Dark Mode",
          icon: SunMoon,
          url: "#",
        },
        {
          title: "System",
          icon: CreativeCommonsIcon,
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
