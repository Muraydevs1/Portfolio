import React from "react";
import Marquee from "../ui/marquee";
import { Icons } from "../ui/icons";

export default function MarqueeGrayscaleDemo() {
  return (
    <Marquee grayscale={true} speed={26}>
      <div className="w-28 h-14 flex items-center justify-center">
        <Icons.react style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>
      <div className="w-28 h-14 flex items-center justify-center">
        <Icons.sql style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>
      <div className="w-28 h-14 flex items-center justify-center">
        <Icons.tailwind style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>
      <div className="w-28 h-14 flex items-center justify-center">
        <Icons.javascript style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>
      <div className="w-28 h-14 flex items-center justify-center">
        <Icons.git style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>
    </Marquee>
  );
}
