import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { button as buttonStyles } from "@heroui/theme";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
//import { Image } from "@heroui/image";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon } from "@/components/icons";
import { Logo } from "@/components/icons";
import { Avatar } from "@heroui/react";

import { Popover, PopoverTrigger, PopoverContent } from "@heroui/react";
import { UserTwitterCard } from "@/components/UserTwitterCard";

export const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  console.log(user);

  const isAuth = localStorage.getItem("isAuth") === "true";

  const publicNavItems = [
    { label: "Home", href: "/" },
    { label: "Signup", href: "/signup" },
    { label: "Login", href: "/login" },
    { label: "About", href: "/about" },
  ];

  const navItems = isAuth ? siteConfig.navItems : publicNavItems;

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <Logo />
            <p className="font-bold text-inherit">SMSP</p>
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        {isAuth && (
          <NavbarItem className="hidden lg:flex">
            <Button
              onClick={handleLogout}
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
            >
              Logout
            </Button>
          </NavbarItem>
        )}
        {user && (
          <NavbarItem className="hidden md:flex">
            <Popover trigger="hover" placement="bottom-end" showArrow>
              <PopoverTrigger>
                <Avatar
                  isBordered
                  color="primary"
                  src={user.profileImage}
                  alt="profile"
                  radius="full"
                  className="cursor-pointer"
                />
              </PopoverTrigger>

              <PopoverContent className="p-2">
                <UserTwitterCard user={user} />
                
              </PopoverContent>
            </Popover>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
