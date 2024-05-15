"use client";

import * as React from "react";
import {
  BookOpenCheck,
  ChevronsUpDown,
  Hotel,
  Moon,
  Plus,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export function NavMenu() {
  const { setTheme } = useTheme();
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <ChevronsUpDown />
          <span className="sr-only">NavMenu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => router.push("/hotel/new")}
        >
          <Plus size={15} /> <p>Add Hotel</p>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => router.push("/my-hotels")}
        >
          <Hotel size={15} /> <p>My Hotel</p>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => router.push("/my-bookings")}
        >
          <BookOpenCheck size={15} /> <p>My Booking</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
