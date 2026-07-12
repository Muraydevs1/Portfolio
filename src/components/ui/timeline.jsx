import React, { createContext, useContext } from "react";

const TimelineContext = createContext({
  orientation: "vertical",
  noCards: false,
  vertItemSpacing: 48,
});

const variantStyles = {
  default: "bg-neutral-900 border-neutral-900 dark:bg-neutral-100 dark:border-neutral-100",
  secondary: "bg-neutral-400 border-neutral-400 dark:bg-neutral-600 dark:border-neutral-600",
  outline: "bg-white dark:bg-neutral-950 border-neutral-400 dark:border-neutral-600",
  destructive: "bg-red-600 border-red-600",
};

function Timeline({
  children,
  orientation = "vertical",
  noCards = false,
  vertItemSpacing = 48,
  className = "",
}) {
  const isVertical = orientation === "vertical";

  return (
    <TimelineContext.Provider value={{ orientation, noCards, vertItemSpacing }}>
      <div
        className={`${isVertical ? "relative" : "flex items-start gap-6 overflow-x-auto"} ${className}`.trim()}
      >
        {children}
      </div>
    </TimelineContext.Provider>
  );
}

export function TimelineItem({ children, variant = "default", className = "" }) {
  const { orientation, noCards, vertItemSpacing } = useContext(TimelineContext);
  const isVertical = orientation === "vertical";

  if (!isVertical) {
    return (
      <div className={`min-w-[240px] max-w-[280px] ${className}`.trim()}>
        <div className={`w-3 h-3 rounded-full border-2 mb-4 ${variantStyles[variant] || variantStyles.default}`} />
        <div className={noCards ? "" : "rounded-xl border border-neutral-200 dark:border-white/10 p-4"}>{children}</div>
      </div>
    );
  }

  return (
    <div className={`relative pl-10 ${className}`.trim()} style={{ marginBottom: `${vertItemSpacing}px` }}>
      <span className="absolute left-4 top-1 bottom-[-48px] w-px bg-neutral-200 dark:bg-white/10" aria-hidden="true" />
      <span
        className={`absolute left-[10px] top-2 w-3 h-3 rounded-full border-2 ${variantStyles[variant] || variantStyles.default}`}
        aria-hidden="true"
      />
      <div className={noCards ? "" : "rounded-xl border border-neutral-200 dark:border-white/10 p-4 bg-white/60 dark:bg-white/5"}>
        {children}
      </div>
    </div>
  );
}

export function TimelineItemDate({ children, className = "" }) {
  return <p className={`font-pixel text-sm text-neutral-500 dark:text-neutral-400 mb-1 ${className}`.trim()}>{children}</p>;
}

export function TimelineItemTitle({ children, className = "" }) {
  return <h3 className={`text-lg md:text-xl font-semibold ${className}`.trim()}>{children}</h3>;
}

export function TimelineItemDescription({ children, className = "" }) {
  return <p className={`text-neutral-500 dark:text-neutral-400 mt-2 ${className}`.trim()}>{children}</p>;
}

export default Timeline;
