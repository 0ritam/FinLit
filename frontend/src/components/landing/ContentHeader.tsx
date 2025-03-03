import { useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

import { SignedIn, UserButton } from "@clerk/clerk-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/budgeting", label: "Budgeting" },
    { path: "/investing", label: "Investing" },
    { path: "/saving", label: "Saving" },
    { path: "/fraud-prevention", label: "Fraud Prevention" },
    { path: "/fraud-detection", label: "Fraud Detection" },
  ];

  const isDashboard = location.pathname === "/dashboard";

  return (
    <header className="h-16 grid grid-cols-1 items-center bg-background">
      <div className="container flex justify-between lg:grid lg:grid-cols-[1fr,3fr,1fr] bg-backgound">
        <Link to="/">
        <Logo variant="icon" />
        </Link>
        

        <NavigationMenu className="max-lg:hidden mx-auto">
          <NavigationMenuList className="">
            {navLinks.map(({ path, label }, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    to={path}
                    className={`text-white hover:text-muted-foreground transition-colors font-medium ${
                      location.pathname === path ? "border-b-4 border-blue-500 text-muted" : ""
                    }`}
                  >
                    {label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2 justify-end max-lg:hidden">
          <Link
            to="/dashboard"
            className={`${isDashboard ? "border-b-4 border-green-500 text-primary" : ""} text-neutral-600 hover:text-primary transition-colors font-medium`}
          >
            Dashboard
          </Link>
          <SignedIn>
                  <Button variant='ghost'>
                      <UserButton />
                  </Button>
              </SignedIn>
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end" className="bg-background/50 backdrop-blur-3xl border-foreground/5 border-x-0 border-b-0 rounded-lg overflow-hidden">
          <MobileMenu navMenu={navLinks.map(({ path, label }) => ({ href: path, label }))} />
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default Navigation;
