import React, { useEffect, useMemo, useState } from "react";

const sizeStyles = {
  sm: {
    card: "size-5 text-[10px] sm:size-6 sm:text-xs",
    separator: "text-[10px] sm:text-xs",
    container: "h-7 sm:h-8",
    gap: "gap-0.5",
  },
  md: {
    card: "size-6 text-xs",
    separator: "text-xs",
    container: "h-8",
    gap: "gap-0.5",
  },
  lg: {
    card: "size-7 text-sm",
    separator: "text-sm",
    container: "h-9",
    gap: "gap-1",
  },
  xl: {
    card: "size-8 text-base",
    separator: "text-base",
    container: "h-10",
    gap: "gap-1",
  },
};

const variantStyles = {
  default: "bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900",
  secondary: "bg-neutral-200 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-50",
  destructive: "bg-red-600 text-white dark:bg-red-700",
  outline: "bg-transparent text-neutral-950 ring-1 ring-inset ring-neutral-300 dark:text-neutral-50 dark:ring-neutral-700",
  muted: "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300",
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

  return (
    <div
      className={`relative isolate inline-flex items-center rounded-full border border-dotted border-neutral-200 px-1 dark:border-white/10 ${selectedSize.container} ${selectedSize.gap} ${className}`.trim()}
      aria-label="Current time clock"
    >
      {timeParts.map((digit, index) => {
        const needsSeparator = index === 1 || index === 3;

        return (
          <React.Fragment key={`${index}-${digit}`}>
            <div
              className={`flex items-center justify-center rounded-full font-pixel transition-colors duration-200 ease-out ${selectedSize.card} ${selectedVariant}`}
            >
              {digit}
            </div>

            {needsSeparator ? (
              <span
                className={`font-pixel text-neutral-500 dark:text-neutral-400 ${selectedSize.separator}`}
                aria-hidden="true"
              >
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
