"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useActivePath } from "./use-active-path";

const Logo = () => (
  <svg width="32" height="40" viewBox="0 0 62 79" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all duration-300">
    <path d="M46.3782 0L30.7564 16.3146L36.1293 21.5024L42.6514 14.691V53.3941L6.77247 17.715C4.26262 15.2191 0 17.0044 0 20.5514V79H7.45364V28.9262L43.3326 64.6053C45.8423 67.1011 50.105 65.316 50.105 61.7689V14.691L56.6272 21.5024L62 16.3146L46.3782 0Z" fill="white"/>
  </svg>
)

interface HeaderProps {
  hideAuthButtons?: boolean;
}

const Header = ({ hideAuthButtons }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = useActivePath();
  return (
    <header 
      id="home" 
      className={cn(
        "fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300",
        "bg-background/60 backdrop-blur-md border-b border-border/50"
      )}
    >
      <div className="container mx-auto px-6 grid grid-cols-3 items-center">
        <Link href="/" className="flex items-center group justify-self-start">
           <Logo />
        </Link>
        <nav className="flex items-center justify-center gap-8 text-white text-sm font-body justify-self-center">
          <Link href="/consult" className={cn("hover:text-primary transition-colors", pathname === "/consult" && "text-primary")}>Consult</Link>
          <Link href="/lawgpt" className={cn("hover:text-primary transition-colors", pathname === "/lawgpt" && "text-primary")}>LawGPT</Link>
          <Link href="#services" className="hover:text-primary transition-colors">Resources</Link>
          <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
        </nav>
        {!hideAuthButtons && (
          <div className="flex items-center gap-4 justify-self-end">
            <Button variant="ghost" asChild className="text-white hover:text-primary">
              <Link href="#">Login</Link>
            </Button>
            <Button asChild className="rounded-full bg-secondary hover:bg-secondary/90 text-white px-6">
              <Link href="/signup">Signup</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
