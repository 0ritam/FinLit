import { MenuItem } from "@/types"
import { Button } from "../ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible"
import { ChevronsUpDown } from "lucide-react"
import { Separator } from "../ui/separator"
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

type MobileMenuProps = {
    navMenu: MenuItem[]
}
const MobileMenu = ({navMenu}: MobileMenuProps) => {
  return (
    <div>
        <ul className="">
            {navMenu.map(({href, label, submenu}, index) =>(
                <li key = {index}>
                    {submenu ? (
                        <Collapsible>
                            <CollapsibleTrigger asChild>
                            <Button
                             variant="ghost"
                        className="w-full justify-between">
                            {label}

                            <ChevronsUpDown/>
                        </Button>
                            </CollapsibleTrigger>

                            <CollapsibleContent className="ps-2">
                                <ul className="border-l border-l-muted-foreground/20">
                                    {submenu.map(({href, label}, index) =>(
                                        <li key={index}>
                                            <Button asChild variant="ghost" className="w-full justify-start text-muted-foreground hover:bg-transparent">
                                                <a href={href}>{label}</a>
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </CollapsibleContent>
                        </Collapsible>
                    ) : (<Button
                        asChild variant="ghost"
                        className="w-full justify-start">
                            <a href={href}>{label}</a>
                        </Button>)}
                    
                </li>
            ) )}
        </ul>

        <Separator className="bg-muted-foreground/20"/>

        <div className="flex items-center gap-2 mt-4">
        <SignedOut>
        <Button>
            <SignInButton />
        </Button>
    </SignedOut>

    {/* Show UserButton only when user is signed in */}
        <SignedIn>
            <Button variant='ghost'>
                <UserButton />
            </Button>
        </SignedIn>

        </div>
    </div>
  )
}

export default MobileMenu