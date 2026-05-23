import React, { createContext, useContext } from "react";

const TimelineContext = createContext({
  orientation: "vertical",
  noCards: false,
  vertItemSpacing: 48,
});

const variantStyles = {
  default: "bg-blue-600 border-blue-600",
  secondary: "bg-gray-500 border-gray-500",
  outline: "bg-white dark:bg-black border-gray-400",
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
        <div className={noCards ? "" : "rounded-xl border border-gray-200 dark:border-gray-800 p-4"}>{children}</div>
      </div>
    );
  }

  return (
    <div className={`relative pl-10 ${className}`.trim()} style={{ marginBottom: `${vertItemSpacing}px` }}>
      <span className="absolute left-4 top-1 bottom-[-48px] w-px bg-gray-300 dark:bg-gray-700" aria-hidden="true" />
      <span
        className={`absolute left-[10px] top-2 w-3 h-3 rounded-full border-2 ${variantStyles[variant] || variantStyles.default}`}
        aria-hidden="true"
      />
      <div className={noCards ? "" : "rounded-xl border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-white/5"}>
        {children}
      </div>
    </div>
  );
}

export function TimelineItemDate({ children, className = "" }) {
  return <p className={`text-sm text-gray-500 mb-1 ${className}`.trim()}>{children}</p>;
}

export function TimelineItemTitle({ children, className = "" }) {
  return <h3 className={`text-lg md:text-xl font-semibold ${className}`.trim()}>{children}</h3>;
}

export function TimelineItemDescription({ children, className = "" }) {
  return <p className={`text-gray-500 mt-2 ${className}`.trim()}>{children}</p>;
}

export default Timeline;
