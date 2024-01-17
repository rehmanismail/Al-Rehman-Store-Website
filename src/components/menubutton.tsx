"use client"

import * as React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-blue-200 font-bold">Products</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-blue-200 font-bold">
        <DropdownMenuLabel>Clothes and Toys</DropdownMenuLabel>
        <DropdownMenuSeparator />
          <Link href="/menClothes">
          <DropdownMenuRadioItem value="top" className="cursor-pointer">Men Clothes</DropdownMenuRadioItem>
          </Link>
          <Link href="/womenClothes">
          <DropdownMenuRadioItem value="bottom" className="cursor-pointer">Women Clothes</DropdownMenuRadioItem>
          </Link>
          <Link href="/toys">
          <DropdownMenuRadioItem value="right" className="cursor-pointer">Toys</DropdownMenuRadioItem>
          </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
