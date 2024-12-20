import React from "react";
import "./globals.css";
import { MainNav } from "@/components/ui/main-nav";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>TradeTrack</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <MainNav />
        <main className="w-full p-4">
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
};

export default Layout;
