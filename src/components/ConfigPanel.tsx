"use client";

import type { Operation, GeneratorConfig } from "@/lib/generator";

const OP_LABELS: { op: Operation; label: string }[] = [
  { op: "+", label: "加法(+)" },
  { op: "-", label: "减法(-)" },
  { op: "×", label: "乘法(×)" },
  { op: "÷", label: "除法(÷)" },
];

const RANGE_PRESETS = [
  { label: "10以内", min: 0, max: 10 },
  { label: "20以内", min: 0, max: 20 },
  { label: "100以内", min: 0, max: 100 },
  { label: "1000以内", min: 0, max: 1000 },
];

const COUNT_OPTIONS = [10, 20, 50, 100];
const COLUMN_OPTIONS = [2, 3, 4];

interface ConfigPanelProps {
  config: GeneratorConfig;
  columns: number;
  onConfigChange: (config: GeneratorConfig) => void;
  onColumnsChange: (columns: number) => void;
  onGenerate: () => void;
}

export default function ConfigPanel({
  config,
  columns,
  onConfigChange,
  onColumnsChange,
  onGenerate,
}: ConfigPanelProps) {
  const toggleOp = (op: Operation) => {
    const ops = config.operations.includes(op)
      ? config.operations.filter((o) => o !== op)
      : [...config.operations, op];
    onConfigChange({ ...config, operations: ops.length > 0 ? ops : [op] });
  };

  const selectAllOps = () => {
    const allOps: Operation[] = ["+", "-", "×", "÷"];
    const hasAll = allOps.every((op) => config.operations.includes(op));
    onConfigChange({
      ...config,
      operations: hasAll ? ["+"] : allOps,
    });
  };

  const activePreset = RANGE_PRESETS.find(
    (p) => p.min === config.min && p.max === config.max
  );

  return (
    <div className="no-print rounded-2xl border border-green-200 bg-white p-5 shadow-sm sm:p-6">
      {/* Operations */}
      <fieldset className="mb-5">
        <legend className="mb-2.5 text-sm font-semibold text-green-800">
          运算类型
        </legend>
        <div className="flex flex-wrap gap-2">
          {OP_LABELS.map(({ op, label }) => (
            <button
              key={op}
              type="button"
              onClick={() => toggleOp(op)}
              className={`rounded-lg border px-3.5 py-2 text-sm font-medium transition-all ${
                config.operations.includes(op)
                  ? "border-green-600 bg-green-600 text-white shadow-sm"
                  : "border-gray-200 bg-gray-50 text-gray-600 hover:border-green-300 hover:bg-green-50"
              }`}
            >
              {label}
            </button>
          ))}
          <button
            type="button"
            onClick={selectAllOps}
            className={`rounded-lg border px-3.5 py-2 text-sm font-medium transition-all ${
              config.operations.length === 4
                ? "border-green-600 bg-green-600 text-white shadow-sm"
                : "border-gray-200 bg-gray-50 text-gray-600 hover:border-green-300 hover:bg-green-50"
            }`}
          >
            混合
          </button>
        </div>
      </fieldset>

      {/* Range */}
      <fieldset className="mb-5">
        <legend className="mb-2.5 text-sm font-semibold text-green-800">
          数值范围
        </legend>
        <div className="flex flex-wrap gap-2">
          {RANGE_PRESETS.map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() =>
                onConfigChange({ ...config, min: preset.min, max: preset.max })
              }
              className={`rounded-lg border px-3.5 py-2 text-sm font-medium transition-all ${
                activePreset === preset
                  ? "border-green-600 bg-green-600 text-white shadow-sm"
                  : "border-gray-200 bg-gray-50 text-gray-600 hover:border-green-300 hover:bg-green-50"
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
          <span>自定义:</span>
          <input
            type="number"
            min={0}
            value={config.min}
            onChange={(e) =>
              onConfigChange({
                ...config,
                min: Math.max(0, parseInt(e.target.value) || 0),
              })
            }
            className="w-20 rounded-lg border border-gray-200 px-2.5 py-1.5 text-center text-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none"
          />
          <span>~</span>
          <input
            type="number"
            min={1}
            value={config.max}
            onChange={(e) =>
              onConfigChange({
                ...config,
                max: Math.max(1, parseInt(e.target.value) || 1),
              })
            }
            className="w-20 rounded-lg border border-gray-200 px-2.5 py-1.5 text-center text-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none"
          />
        </div>
      </fieldset>

      {/* Count */}
      <fieldset className="mb-5">
        <legend className="mb-2.5 text-sm font-semibold text-green-800">
          题目数量
        </legend>
        <div className="flex flex-wrap gap-2">
          {COUNT_OPTIONS.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => onConfigChange({ ...config, count: n })}
              className={`rounded-lg border px-3.5 py-2 text-sm font-medium transition-all ${
                config.count === n
                  ? "border-green-600 bg-green-600 text-white shadow-sm"
                  : "border-gray-200 bg-gray-50 text-gray-600 hover:border-green-300 hover:bg-green-50"
              }`}
            >
              {n}题
            </button>
          ))}
        </div>
      </fieldset>

      {/* Options row */}
      <div className="mb-5 flex flex-wrap gap-x-6 gap-y-2">
        {(config.operations.includes("+") ||
          config.operations.includes("-")) && (
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              checked={config.noCarry}
              onChange={(e) =>
                onConfigChange({ ...config, noCarry: e.target.checked })
              }
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500 accent-green-600"
            />
            不进位/不退位
          </label>
        )}
        {config.operations.includes("÷") && (
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              checked={config.noRemainder}
              onChange={(e) =>
                onConfigChange({ ...config, noRemainder: e.target.checked })
              }
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500 accent-green-600"
            />
            除法无余数
          </label>
        )}
      </div>

      {/* Columns */}
      <fieldset className="mb-6">
        <legend className="mb-2.5 text-sm font-semibold text-green-800">
          每行列数
        </legend>
        <div className="flex flex-wrap gap-2">
          {COLUMN_OPTIONS.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => onColumnsChange(n)}
              className={`rounded-lg border px-3.5 py-2 text-sm font-medium transition-all ${
                columns === n
                  ? "border-green-600 bg-green-600 text-white shadow-sm"
                  : "border-gray-200 bg-gray-50 text-gray-600 hover:border-green-300 hover:bg-green-50"
              }`}
            >
              {n}列
            </button>
          ))}
        </div>
      </fieldset>

      {/* Generate */}
      <button
        type="button"
        onClick={onGenerate}
        className="w-full rounded-xl bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-green-700 hover:shadow active:scale-[0.98] sm:w-auto"
      >
        生成练习
      </button>
    </div>
  );
}
