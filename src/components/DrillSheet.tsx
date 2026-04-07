"use client";

import type { Problem } from "@/lib/generator";

interface DrillSheetProps {
  problems: Problem[];
  columns: number;
  showAnswers: boolean;
}

export default function DrillSheet({
  problems,
  columns,
  showAnswers,
}: DrillSheetProps) {
  if (problems.length === 0) return null;

  const gridClass =
    columns === 2
      ? "grid-cols-2"
      : columns === 3
        ? "grid-cols-2 sm:grid-cols-3"
        : "grid-cols-2 sm:grid-cols-4";

  return (
    <div className="drill-grid rounded-2xl border border-green-100 bg-white p-5 shadow-sm sm:p-8">
      <div className={`grid ${gridClass} gap-x-6 gap-y-4`}>
        {problems.map((p, i) => (
          <div
            key={i}
            className="flex items-baseline gap-1 py-1 text-lg tabular-nums sm:text-xl"
          >
            <span className="mr-1 min-w-[1.5rem] text-right text-xs text-gray-400">
              {i + 1}.
            </span>
            <span>{p.a}</span>
            <span className="mx-0.5 text-green-700">{p.op}</span>
            <span>{p.b}</span>
            <span className="mx-0.5">=</span>
            {showAnswers ? (
              <span className="font-semibold text-red-500 print:text-red-600">
                {p.answer}
              </span>
            ) : (
              <span className="inline-block w-12 border-b border-gray-300 sm:w-16">
                &nbsp;
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
