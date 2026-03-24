"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { SobaDictionaryHeader } from "@/components/soba-dictionary-header";
import { TermAccordion } from "@/components/term-accordion";
import { getTermsByKana, getTermCountByKana, getRowByKana } from "@/lib/soba-data";
import { cn } from "@/lib/utils";

export default function KanaListPage({ params }: { params: Promise<{ kana: string }> }) {
  const { kana } = use(params);
  const decodedKana = decodeURIComponent(kana);
  const terms = getTermsByKana(decodedKana);
  const currentRow = getRowByKana(decodedKana);

  return (
    <div className="min-h-screen bg-muted/30">
      <SobaDictionaryHeader />
      
      <main className="mx-auto max-w-6xl px-4 py-8">
        {/* Breadcrumb */}
        <Link 
          href="/soba-dictionary" 
          className="mb-8 inline-flex items-center gap-1 text-sm text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          そば辞典TOPへ
        </Link>

        {/* Title */}
        <h1 className="mb-12 text-center font-serif text-4xl font-bold tracking-wider">
          そば辞典
        </h1>

        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Section Header */}
            <h2 className="mb-6 text-lg">
              <span className="font-serif text-2xl">『</span>
              <span className="font-serif text-2xl font-bold">{decodedKana}</span>
              <span className="font-serif text-2xl">』</span>
              <span className="ml-2 text-muted-foreground">
                から始まる用語一覧（{terms.length}）
              </span>
            </h2>

            {/* Terms List */}
            <div className="space-y-4">
              {terms.length > 0 ? (
                terms.map((term, index) => (
                  <TermAccordion 
                    key={term.id} 
                    term={term} 
                    defaultOpen={index === 0}
                  />
                ))
              ) : (
                <div className="rounded-lg border border-border bg-white p-8 text-center">
                  <p className="text-muted-foreground">
                    「{decodedKana}」から始まる用語はまだ登録されていません。
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden w-72 lg:block">
            <div className="sticky top-24">
              <h3 className="mb-4 font-bold text-foreground">
                {currentRow?.row.charAt(0)}行の用語
              </h3>
              <nav className="space-y-2">
                {currentRow?.kanaList.map((k) => {
                  const count = getTermCountByKana(k);
                  const isActive = k === decodedKana;
                  const hasTerms = count > 0;
                  
                  return (
                    <Link
                      key={k}
                      href={hasTerms ? `/soba-dictionary/${k}` : "#"}
                      className={cn(
                        "flex items-center justify-between rounded-lg border px-4 py-3 transition-all",
                        isActive
                          ? "border-primary bg-primary/5"
                          : hasTerms
                          ? "border-border bg-white hover:border-primary hover:bg-primary/5"
                          : "border-border bg-muted/30 cursor-not-allowed opacity-50"
                      )}
                    >
                      <span className={cn(
                        "text-sm",
                        hasTerms ? "text-foreground" : "text-muted-foreground"
                      )}>
                        『{k}』から始まる用語一覧（{count}）
                      </span>
                      {hasTerms && (
                        <ChevronRight className={cn(
                          "h-5 w-5",
                          isActive ? "text-primary" : "text-muted-foreground"
                        )} />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
