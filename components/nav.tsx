"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Nav() {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <nav className="container mx-auto flex h-14 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Prasad Harbare</span>
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navigation.map((item, index) => (
                <NavigationMenuItem key={item.name}>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.name}</NavigationMenuLink>
                    </Link>
                  </motion.div>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center">
          {/* <a
            href="https://github.com/prasadharbare"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block text-foreground hover:text-primary transition-colors font-medium px-4"
          >
            Prasad Harbare
          </a> */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
                {/* <a
                  href="https://github.com/prasadharbare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Prasad Harbare
                </a> */}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.div>
  )
}

