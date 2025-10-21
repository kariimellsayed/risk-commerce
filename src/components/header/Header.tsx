"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full border-b border-white-smoke">
      <div className="padding-x flex-between py-3">
        {/* Logo */}
        <Link href="/" className="flex-center">
          {/* Risk<span className="text-mint">.</span> */}
          <Image
            src={theme === "dark" ? "/risk-dark.svg" : "/risk-light.svg"}
            alt="risk ecommerce"
            width={40}
            height={40}
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/shop" className="hover:text-mint transition-colors">
            Shop
          </Link>
          <Link href="/brands" className="hover:text-mint transition-colors">
            Brands
          </Link>
          <Link href="/contact" className="hover:text-mint transition-colors">
            Contact
          </Link>
        </nav>

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5 text-mint" />
          ) : (
            <Moon className="h-5 w-5 text-claret" />
          )}
        </Button>
      </div>
    </header>
  );
}
