"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Avatar } from "@heroui/avatar";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/dropdown";
import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { SiHappycow } from "react-icons/si";

export default function AppNavbar() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <Navbar isBordered className="bg-white shadow-sm">
      <NavbarBrand>
       <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-gold to-gold-light rounded-xl sm:rounded-2xl flex items-center justify-center">
         <SiHappycow className="w-6 h-6 sm:w-8 sm:h-8 md:w-11 md:h-11" color="#1a1200" />
       </div>
        <Link href="/" className="font-bold text-xl text-green-600">
           QurbaniHat
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/" className="text-gray-700 hover:text-green-600">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/animals" className="text-gray-700 hover:text-green-600">
            All Animals
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        {session?.user ? (
          <Dropdown>
            <DropdownTrigger>
              <Avatar
                src={session.user.image || ""}
                name={session.user.name}
                size="sm"
                className="cursor-pointer"
              />
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key="profile">
                <Link href="/my-profile">My Profile</Link>
              </DropdownItem>
              <DropdownItem
                key="logout"
                className="text-red-500"
                onClick={handleLogout}
              >
                Logout
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <>
           <NavbarItem>
            <Button variant="light" color="success" as={Link} href="/login">
             Login
             </Button>
             </NavbarItem>
             <NavbarItem>
              <Button color="success" as={Link} href="/register">
              Register
             </Button>
           </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
}