"use client"

import React from "react"

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from "@nextui-org/react"
import { useSession } from "next-auth/react"

import { AppLogo } from "./app-logo"
import AuthButton from "./auth-button"
import { ThemeSwitcher } from "./theme-switcher"

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const { status } = useSession()

  const menuItems = [{ label: "Home", path: "/" }]
  if (status === "authenticated") {
    menuItems.push({ label: "Profile", path: "/profile" })
  }

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AppLogo />
          <p className="font-bold text-inherit">Next.js Starter</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              color={"primary"}
              className="w-full"
              href={item.path}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem key="AuthButton">
          <AuthButton minimal={false} />
        </NavbarItem>
        <NavbarItem key="ThemeSwitcher">
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={"primary"}
              className="w-full"
              href={item.path}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem key="AuthButton">
          <AuthButton />
        </NavbarMenuItem>
        <NavbarMenuItem key="ThemeSwitcher">
          <ThemeSwitcher />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}
