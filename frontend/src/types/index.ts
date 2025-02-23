import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

type MenuItem = {
    href: string;
    label: string;
    submenu?: SubmenuItem[]
  };
  
  type SubmenuItem = {
    href: string;
    icon?: LucideIcon;
    label: string;
    desc: string;
  }
  
  export type { MenuItem, SubmenuItem };