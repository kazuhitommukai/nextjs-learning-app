"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface KanaCardProps {
  kana: string;
  count: number;
  isActive?: boolean;
}

export function KanaCard({ kana, count, isActive = false }: KanaCardProps) {
  const hasTerms = count > 0;
  
  return (
    <Link
      href={hasTerms ? `/soba-dictionary/${kana}` : "#"}
      className={cn(
        "relative flex h-24 w-20 flex-col items-center justify-center rounded-lg border-2 transition-all",
        hasTerms
          ? "border-primary/30 bg-white hover:border-primary hover:shadow-md cursor-pointer"
          : "border-muted bg-muted/30 cursor-not-allowed opacity-50",
        isActive && "border-primary bg-primary/5"
      )}
    >
      {hasTerms && count > 0 && (
        <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
          {count > 99 ? "99+" : count}
        </span>
      )}
      <span
        className={cn(
          "text-3xl font-serif",
          hasTerms ? "text-primary" : "text-muted-foreground"
        )}
      >
        {kana}
      </span>
    </Link>
  );
}

export function KanaCardWithLabel({ kana, count }: KanaCardProps) {
  const hasTerms = count > 0;
  
  return (
    <Link
      href={hasTerms ? `/soba-dictionary/${kana}` : "#"}
      className={cn(
        "flex flex-col items-center gap-1",
        !hasTerms && "cursor-not-allowed opacity-50"
      )}
    >
      <div
        className={cn(
          "relative flex h-20 w-20 items-center justify-center rounded-lg border-2 transition-all",
          hasTerms
            ? "border-primary/30 bg-white hover:border-primary hover:shadow-md"
            : "border-muted bg-muted/30"
        )}
      >
        {hasTerms && count > 0 && (
          <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
            {count > 99 ? "99+" : count}
          </span>
        )}
        <span
          className={cn(
            "text-3xl font-serif",
            hasTerms ? "text-primary" : "text-muted-foreground"
          )}
        >
          {kana}
        </span>
      </div>
      <span className="text-xs text-muted-foreground">
        から始まる
        <br />
        用語
      </span>
    </Link>
  );
}
