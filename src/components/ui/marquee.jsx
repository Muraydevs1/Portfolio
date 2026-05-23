import React from "react";

function Marquee({
  children,
  grayscale = false,
  speed = 30,
  gap = "1.5rem",
  pauseOnHover = true,
  fade = true,
  className = "",
  itemClassName = "",
}) {
  const items = React.Children.toArray(children);

  return (
    <div
      className={`group relative w-full overflow-hidden ${className}`.trim()}
      style={
        fade
          ? {
              maskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }
          : undefined
      }
    >
      <div
        className="flex w-max min-w-full"
        style={{
          gap,
          animation: `marquee-scroll ${speed}s linear infinite`,
          willChange: "transform",
        }}
      >
        {items.map((child, index) => (
          <div
            key={`first-${index}`}
            className={`${grayscale ? "grayscale opacity-75 transition hover:grayscale-0 hover:opacity-100" : ""} ${itemClassName}`.trim()}
          >
            {child}
          </div>
        ))}

        {items.map((child, index) => (
          <div
            key={`second-${index}`}
            className={`${grayscale ? "grayscale opacity-75 transition hover:grayscale-0 hover:opacity-100" : ""} ${itemClassName}`.trim()}
            aria-hidden="true"
          >
            {child}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - (${gap} / 2))); }
        }

        .group:hover > div {
          animation-play-state: ${pauseOnHover ? "paused" : "running"};
        }
      `}</style>
    </div>
  );
}

export default Marquee;
