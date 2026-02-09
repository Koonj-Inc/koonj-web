"use client";

import AnimatedCursor from "react-animated-cursor";

export default function KoonjCursor() {
  return (
    <AnimatedCursor
      innerSize={12}
      outerSize={36}
      color="255, 198, 119"
      outerAlpha={0.2}
      innerScale={0.85}
      outerScale={1.8}
      trailingSpeed={6}
      clickables={["a", "button", ".cursor-pointer"]}
    />
  );
}
