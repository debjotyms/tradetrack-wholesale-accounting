"use client";

import * as React from "react";
import {
  LayoutDashboard,
  Smile,
  Archive,
  BaggageClaim,
  PackageOpen,
  Landmark,
  Table,
  UserCog,
  Puzzle,
  Navigation,
} from "lucide-react";

import {NavProjects} from "@/components/others/nav-projects";
import {NavUser} from "@/components/others/nav-user";
import {TeamSwitcher} from "@/components/others/team-switcher";
import {Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Debjoty Mitra",
    email: "debjotyms@gmail.com",
    avatar: "https://gravatar.com/userimage/216772507/6261d07fc6f9e58147fb136a3a801178.jpeg",
  },
  teams: [
    {
      name: "TradeTrack",
      logo: Navigation,
      plan: "Enterprise",
    },
  ],
  projects: [
    {
      name: "Components",
      url: "/",
      icon: Puzzle,
    },
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Clients",
      url: "/clients",
      icon: Smile,
    },
    {
      name: "Stakeholders",
      url: "/stakeholders",
      icon: Archive,
    },
    {
      name: "Suppliers",
      url: "/suppliers",
      icon: BaggageClaim,
    },
    {
      name: "Stocks",
      url: "/stocks",
      icon: PackageOpen,
    },
    {
      name: "Banks",
      url: "/banks",
      icon: Landmark,
    },
    {
      name: "Statements",
      url: "/statements",
      icon: Table,
    },
    {
      name: "Admin Panel",
      url: "/admin-panel",
      icon: UserCog,
    },
  ],
};

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <div className="mb-3">
          <a href="/admin-profile">
            <NavUser user={data.user} />
          </a>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
