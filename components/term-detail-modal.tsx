"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { SobaTerm } from "@/lib/soba-data";
import { useState, useEffect } from "react";

interface TermDetailModalProps {
  term: SobaTerm | null;
  isOpen: boolean;
  onClose: () => void;
}

export function TermDetailModal({ term, isOpen, onClose }: TermDetailModalProps) {
  const [dontShowToday, setDontShowToday] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !term) return null;

  const handleClose = () => {
    if (dontShowToday) {
      localStorage.setItem("soba-dictionary-modal-hidden", new Date().toDateString());
    }
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={handleClose}
    >
      <div 
        className="relative w-full max-w-2xl overflow-hidden rounded-xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-primary px-6 py-8">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-8 top-1/2 -translate-y-1/2 text-6xl text-white/30">蕎</div>
            <div className="absolute right-8 top-1/2 -translate-y-1/2 text-6xl text-white/30">蕎</div>
          </div>
          <div className="relative text-center">
            <p className="text-sm text-primary-foreground/80">本日の</p>
            <h2 className="text-2xl font-bold text-primary-foreground">そば辞典</h2>
          </div>
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-primary-foreground transition-colors hover:bg-white/30"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex gap-6">
            {/* Image */}
            <div className="h-36 w-36 flex-shrink-0 overflow-hidden rounded-full">
              {term.imageUrl ? (
                <img
                  src={term.imageUrl}
                  alt={term.term}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-100 to-amber-200">
                  <span className="text-4xl">🍜</span>
                </div>
              )}
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <div className="mb-2 flex items-center gap-2">
                <div className="h-6 w-1 rounded bg-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">{term.reading}</p>
                  <h3 className="text-xl font-bold text-primary">{term.term}</h3>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-foreground/80">
                {term.description}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-border px-6 py-4">
          <label className="flex cursor-pointer items-center gap-2">
            <Checkbox
              checked={dontShowToday}
              onCheckedChange={(checked) => setDontShowToday(checked as boolean)}
            />
            <span className="text-sm text-muted-foreground">今日はもう表示しない</span>
          </label>
          <Button onClick={handleClose} className="px-8">
            閉じる
          </Button>
        </div>
      </div>
    </div>
  );
}
