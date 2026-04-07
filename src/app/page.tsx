"use client";

import { useState, useCallback } from "react";
import type { Operation, GeneratorConfig, Problem } from "@/lib/generator";
import { generateProblems } from "@/lib/generator";
import ConfigPanel from "@/components/ConfigPanel";
import DrillSheet from "@/components/DrillSheet";
import PrintHeader from "@/components/PrintHeader";
import Link from "next/link";

const defaultConfig: GeneratorConfig = {
  operations: ["+", "-"] as Operation[],
  min: 0,
  max: 20,
  count: 20,
  noCarry: false,
  noRemainder: true,
};

export default function Home() {
  const [config, setConfig] = useState<GeneratorConfig>(defaultConfig);
  const [columns, setColumns] = useState(3);
  const [problems, setProblems] = useState<Problem[]>([]);
  const [showAnswers, setShowAnswers] = useState(false);

  const handleGenerate = useCallback(() => {
    setProblems(generateProblems(config));
    setShowAnswers(false);
  }, [config]);

  return (
    <div className="flex min-h-full flex-col bg-background">
      {/* Header */}
      <header className="no-print border-b border-green-100 bg-white">
        <div className="mx-auto flex max-w-4xl items-center gap-3 px-4 py-4 sm:px-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-xl text-white shadow-sm">
            <span role="img" aria-label="算盘">🧮</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-green-900 sm:text-xl">
              口算题生成器
            </h1>
            <p className="text-xs text-gray-500">小学数学口算练习卷在线生成</p>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-6 sm:px-6 sm:py-8">
        <ConfigPanel
          config={config}
          columns={columns}
          onConfigChange={setConfig}
          onColumnsChange={setColumns}
          onGenerate={handleGenerate}
        />

        {problems.length > 0 && (
          <div className="mt-6">
            {/* Controls */}
            <div className="no-print mb-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleGenerate}
                className="rounded-lg border border-green-200 bg-white px-4 py-2 text-sm font-medium text-green-700 transition-all hover:bg-green-50"
              >
                重新生成
              </button>
              <button
                type="button"
                onClick={() => setShowAnswers((v) => !v)}
                className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                  showAnswers
                    ? "border-red-200 bg-red-50 text-red-600"
                    : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                {showAnswers ? "隐藏答案" : "显示答案"}
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="rounded-lg border border-green-200 bg-white px-4 py-2 text-sm font-medium text-green-700 transition-all hover:bg-green-50"
              >
                打印
              </button>
            </div>

            {/* Print header */}
            <PrintHeader />

            {/* Drill sheet */}
            <DrillSheet
              problems={problems}
              columns={columns}
              showAnswers={showAnswers}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="no-print min-h-[44px] border-t border-green-100 bg-white py-3">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 text-xs text-gray-400 sm:px-6">
          <span>&copy; 2026 ToolboxLite</span>
          <Link href="/privacy" className="hover:text-green-600 transition-colors">
            隐私政策
          </Link>
          <Link href="/terms" className="hover:text-green-600 transition-colors">
            使用条款
          </Link>
        </div>
      </footer>
    </div>
  );
}
