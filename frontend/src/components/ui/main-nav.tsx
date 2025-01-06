import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {cn} from "@/lib/utils";
import {LayoutDashboard, Package, Users, Settings, ShoppingCart} from "lucide-react";
import {PersonStanding} from "lucide-react";

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({className, title, children, ...props}, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}>
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export function MainNav() {
  return (
    <NavigationMenu className="max-w-full w-full px-8 bg-background border-b h-20 flex items-center justify-between mb-2">
      <div>
        <NavigationMenuList className="gap-6 flex items-center">
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className="text-xl font-bold mr-6 hover:text-primary">
              SmartBalance
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* <NavigationMenuItem>
            <NavigationMenuLink href="/dashboard" className="flex items-center">
              <LayoutDashboard className="w-4 h-4 mr-2" />
              Dashboard
            </NavigationMenuLink>
          </NavigationMenuItem> */}

          <NavigationMenuItem>
            <NavigationMenuLink href="/clients" className="flex items-center">
              <PersonStanding className="w-4 h-4 mr-2" />
              Clients
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* <NavigationMenuItem>
            <NavigationMenuLink href="/suppliers" className="flex items-center">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Suppliers
            </NavigationMenuLink>
          </NavigationMenuItem> */}

          <NavigationMenuItem>
            <NavigationMenuLink href="/admin-panel" className="flex items-center">
              <Settings className="w-4 h-4 mr-2" />
              Admin Panel
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/stocks" className="flex items-center">
              <Package className="w-4 h-4 mr-2" />
              Stocks
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
      <div className="px-3 py-2 bg-secondary rounded-lg">
        <NavigationMenuList className="gap-6 flex items-center">
          <NavigationMenuItem>
            <NavigationMenuLink href="/admin-profile" className="flex items-center text-gray-700">
              <img src="/images/akib.png" alt="Profile" className="w-8 h-8 rounded-full mr-2 border-2 border-white" />
              <div className="flex flex-col">
                <span className="font-semibold">Aquib Azmain</span>
                <span className="text-sm">Administrator</span>
              </div>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
}
