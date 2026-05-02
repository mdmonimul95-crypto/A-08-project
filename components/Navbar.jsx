"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Avatar } from "@heroui/avatar";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/dropdown";
import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

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
        <Link href="/" className="font-bold text-xl text-green-600">
          🐄 QurbaniHat
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