import React, { useEffect, useMemo, useState } from "react";

const sizeStyles = {
  sm: {
    card: "w-4 h-6 text-xs sm:w-7 sm:h-9 sm:text-sm",
    separator: "text-xs sm:text-sm",
    gap: "gap-0.5 sm:gap-1",
  },
  md: {
    card: "w-8 h-10 text-base",
    separator: "text-base",
    gap: "gap-1.5",
  },
  lg: {
    card: "w-10 h-12 text-lg",
    separator: "text-lg",
    gap: "gap-2",
  },
  xl: {
    card: "w-12 h-14 text-xl",
    separator: "text-xl",
    gap: "gap-2.5",
  },
};

const variantStyles = {
  default: "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white",
  secondary: "bg-gray-200 text-gray-900 border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-700",
  destructive: "bg-red-600 text-white border-red-700 dark:bg-red-700 dark:border-red-800",
  outline: "bg-transparent text-black border-gray-400 dark:text-white dark:border-gray-600",
  muted: "bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray-300",
};

function twoDigits(value) {
  return String(value).padStart(2, "0");
}

function FlipClock({ size = "md", variant = "default", className = "" }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeParts = useMemo(() => {
    const hours = twoDigits(now.getHours());
    const minutes = twoDigits(now.getMinutes());
    const seconds = twoDigits(now.getSeconds());
    return [...hours, ...minutes, ...seconds];
  }, [now]);

  const selectedSize = sizeStyles[size] || sizeStyles.md;
  const selectedVariant = variantStyles[variant] || variantStyles.default;
  const borderClass = variant === "muted" ? "border-transparent" : "border";

  return (
    <div className={`flex items-center ${selectedSize.gap} ${className}`.trim()} aria-label="Current time clock">
      {timeParts.map((digit, index) => {
        const needsSeparator = index === 1 || index === 3;

        return (
          <React.Fragment key={`${index}-${digit}`}>
            <div
              className={`relative rounded-md ${borderClass} font-bold flex items-center justify-center overflow-hidden ${selectedSize.card} ${selectedVariant}`}
            >
              <span className="absolute top-1/2 left-0 right-0 h-px bg-black/15 dark:bg-white/15" aria-hidden="true" />
              {digit}
            </div>

            {needsSeparator ? (
              <span className={`font-bold text-gray-500 dark:text-gray-300 ${selectedSize.separator}`} aria-hidden="true">
                :
              </span>
            ) : null}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default FlipClock;
