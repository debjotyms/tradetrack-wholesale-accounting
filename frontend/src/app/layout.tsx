"use client";
import React from "react";
import "./globals.css";
import {MainNav} from "@/components/ui/main-nav";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {Separator} from "@/components/ui/separator";
import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {usePathname} from "next/navigation";
import {AppSidebar} from "@/components/others/app-sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  const pathname = usePathname();
  const segments = (pathname ?? "").split("/").filter(Boolean);

  return (
    <html lang="en">
      <head>
        <title>TradeTrack</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {/* =============================== Nakib Sakib Version =============================== */}
        {/* <main className="w-full">
          <MainNav />
          <div>{children}</div>
        </main> */}

        {/* =============================== Debjoty Atik Version =============================== */}
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full">
            <SidebarInset>
              <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                  <SidebarTrigger className="-ml-1" />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  <Breadcrumb>
                    <BreadcrumbList>
                      {segments.map((segment, index) => {
                        const href = "/" + segments.slice(0, index + 1).join("/");
                        return (
                          <BreadcrumbItem key={segment}>
                            <BreadcrumbLink href={href}>{segment}</BreadcrumbLink>
                          </BreadcrumbItem>
                        );
                      })}
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
              </header>
              <div>{children}</div>
            </SidebarInset>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
};

export default Layout;
