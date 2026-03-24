"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SobaTerm } from "@/lib/soba-data";

interface TermAccordionProps {
  term: SobaTerm;
  defaultOpen?: boolean;
}

export function TermAccordion({ term, defaultOpen = false }: TermAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-lg border border-border bg-white overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-muted/50"
      >
        <div className="flex flex-col gap-1">
          <span className="text-sm text-muted-foreground">{term.reading}</span>
          <span className="text-lg font-bold">{term.term}</span>
        </div>
        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
            isOpen 
              ? "bg-primary text-primary-foreground" 
              : "border-2 border-primary text-primary"
          )}
        >
          {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </div>
      </button>
      
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border p-5">
            <p className="text-sm leading-relaxed text-foreground/80">
              {term.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
