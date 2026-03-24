"use client";

import Link from "next/link";
import { Search, Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SobaDictionaryHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/soba-dictionary" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-foreground/80">
              <span className="text-xs font-bold">蕎</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight">そばぽ</span>
              <span className="text-[10px] tracking-widest text-muted-foreground">SOBAPORTAL MEDIA</span>
            </div>
          </Link>
          
          <nav className="hidden items-center gap-1 text-sm md:flex">
            <button className="flex items-center gap-1 rounded px-2 py-1 hover:bg-muted">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-current text-xs">🌐</span>
              <span className="font-medium">JP</span>
            </button>
            <span className="text-muted-foreground">|</span>
            <button className="px-2 py-1 text-muted-foreground hover:text-foreground">EN</button>
            <span className="text-muted-foreground">|</span>
            <button className="px-2 py-1 text-muted-foreground hover:text-foreground">CN</button>
            <button className="ml-2 flex items-center gap-1 text-muted-foreground hover:text-foreground">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">?</span>
              <span>そばぽとは？</span>
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link href="#" className="hover:text-primary">そばマガジン</Link>
            <Link href="#" className="hover:text-primary">そば求人</Link>
            <Link href="#" className="hover:text-primary">ランキング</Link>
          </nav>
          
          <div className="flex items-center gap-2 ml-4">
            <Button variant="ghost" size="icon" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M5 5v14h4v-9h6v9h4V5H5z" />
              </svg>
            </Button>
            <Button variant="ghost" size="icon" className="relative rounded-full bg-amber-500 text-white hover:bg-amber-600">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">3</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-10 w-10 overflow-hidden rounded-full p-0">
              <div className="h-full w-full bg-gradient-to-br from-blue-400 to-green-400" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
