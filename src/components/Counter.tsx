"use client";

import React, { useEffect, useState } from "react";

interface CounterProps {
  initial?: number;
  step?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  label?: string;
  size?: "sm" | "md" | "lg";
}

export default function Counter({
  initial = 0,
  step = 1,
  min = Number.NEGATIVE_INFINITY,
  max = Number.POSITIVE_INFINITY,
  onChange,
  label = "Counter",
  size = "md",
}: CounterProps) {
  const [value, setValue] = useState<number>(() => {
    const v = Number(initial ?? 0);
    if (v < min) return min;
    if (v > max) return max;
    return v;
  });

  useEffect(() => {
    onChange?.(value);
  }, [value, onChange]);

  function clamp(n: number) {
    return Math.max(min, Math.min(max, n));
  }

  function inc() {
    setValue((prev) => clamp(prev + step));
  }
  function dec() {
    setValue((prev) => clamp(prev - step));
  }

  const sizeClasses = {
    sm: "text-sm px-2 py-1 rounded-md",
    md: "text-base px-4 py-2 rounded-lg",
    lg: "text-lg px-6 py-3 rounded-xl",
  };

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      inc();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      dec();
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className="inline-flex flex-col items-center gap-3 p-6 border rounded-2xl shadow-md bg-white"
        onKeyDown={handleKeyDown}
        role="group"
        aria-label={label}
      >
        <span className="select-none text-slate-700 font-semibold text-lg">{label}</span>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="decrement"
            onClick={dec}
            className={`flex items-center justify-center w-10 h-10 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold border border-slate-300 rounded-full transition disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size]}`}
            disabled={value <= min}
          >
            −
          </button>

          <input
            aria-label="counter value"
            value={String(value)}
            onChange={(e) => {
              const parsed = parseInt(e.target.value || "0", 10);
              if (Number.isNaN(parsed)) return;
              setValue(clamp(parsed));
            }}
            className="w-20 text-center font-semibold text-lg border border-slate-300 rounded-lg py-1 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
            inputMode="numeric"
          />

          <button
            type="button"
            aria-label="increment"
            onClick={inc}
            className={`flex items-center justify-center w-10 h-10 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold border border-slate-300 rounded-full transition disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size]}`}
            disabled={value >= max}
          >
            +
          </button>
        </div>

        <div className="flex gap-3 mt-2">
          <button
            type="button"
            onClick={() => setValue(initial)}
            className="text-xs underline text-slate-500 hover:text-slate-700"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={() => setValue(clamp(0))}
            className="text-xs underline text-slate-500 hover:text-slate-700"
          >
            Set 0
          </button>
        </div>
      </div>
    </div>
  );
}