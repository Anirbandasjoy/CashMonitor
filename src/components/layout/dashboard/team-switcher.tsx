/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";

import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }[];
}) {
  const activeTeam = teams[0];

  if (!activeTeam) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex justify-start items-center cursor-pointer">
          <div>
            <img
              src="https://i.ibb.co.com/3yP3LNv1/pngtree-vector-illustration-of-growth-income-png-image-6668793-removebg-preview.png"
              alt="Income Tracker Logo"
              className="w-10 h-10"
            />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold text-[21px]">
              {activeTeam.name}
            </span>
          </div>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
