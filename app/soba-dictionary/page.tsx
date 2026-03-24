"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ArrowLeft } from "lucide-react";
import { SobaDictionaryHeader } from "@/components/soba-dictionary-header";
import { KanaCardWithLabel } from "@/components/kana-card";
import { TermDetailModal } from "@/components/term-detail-modal";
import { ROWS, getTermCountByKana, getTotalTermCount, getRandomTerm, type SobaTerm } from "@/lib/soba-data";

export default function DictionaryPage() {
  const [selectedRow, setSelectedRow] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [randomTerm, setRandomTerm] = useState<SobaTerm | null>(null);

  useEffect(() => {
    // Check if modal was hidden today
    const hiddenDate = localStorage.getItem("soba-dictionary-modal-hidden");
    const today = new Date().toDateString();
    
    if (hiddenDate !== today) {
      const term = getRandomTerm();
      setRandomTerm(term);
      setShowModal(true);
    }
  }, []);

  const totalCount = getTotalTermCount();

  return (
    <div className="min-h-screen bg-muted/30">
      <SobaDictionaryHeader />
      
      <main className="mx-auto max-w-6xl px-4 py-8">
        {/* Breadcrumb */}
        <Link 
          href="#" 
          className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          マガジンTOPへ
        </Link>

        {/* Title */}
        <h1 className="mb-8 text-center font-serif text-4xl font-bold tracking-wider">
          そば辞典
        </h1>

        {/* Stats Card */}
        <div className="mx-auto mb-12 flex max-w-2xl items-center gap-6 rounded-xl bg-white p-6 shadow-sm">
          <div className="flex gap-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 w-6 rounded bg-primary/20" />
            ))}
          </div>
          <div className="flex-1">
            <div className="mb-2 flex items-baseline gap-2">
              <span className="text-muted-foreground">現在</span>
              <span className="text-5xl font-bold text-primary">{totalCount.toLocaleString()}</span>
              <span className="text-muted-foreground">用語収録中</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              産地や製法、そばにまつわる言葉を知ることで、いつもの一杯が少し違って見えてくる。
              <br />
              そばをより深く味わうための用語集です。
            </p>
          </div>
        </div>

        {/* Row Navigation */}
        <nav className="mb-12 flex flex-wrap items-center justify-center gap-4 border-b border-border pb-4">
          {ROWS.map((row) => (
            <button
              key={row.row}
              onClick={() => setSelectedRow(selectedRow === row.row ? null : row.row)}
              className="flex items-center gap-1 text-sm text-foreground/70 transition-colors hover:text-primary"
            >
              {row.row}
              <ChevronDown className="h-4 w-4" />
            </button>
          ))}
        </nav>

        {/* Kana Grid */}
        <div className="space-y-12">
          {ROWS.map((row) => (
            <section key={row.row} className="scroll-mt-24" id={row.row}>
              <h2 className="mb-6 text-lg">
                <span className="font-bold text-primary">{row.row.charAt(0)}</span>
                <span className="text-muted-foreground">行から始まる用語</span>
              </h2>
              <div className="flex flex-wrap gap-4">
                {row.kanaList.map((kana) => {
                  const count = getTermCountByKana(kana);
                  return (
                    <KanaCardWithLabel
                      key={kana}
                      kana={kana}
                      count={count}
                    />
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Daily Term Modal */}
      <TermDetailModal
        term={randomTerm}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}
