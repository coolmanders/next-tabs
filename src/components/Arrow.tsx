import React from "react";

import { ArrowProps } from "@/types";

/**
 * Arrow component renders an arrow icon.
 *
 * @component
 * @example
 * <Arrow direction="left" onClick={() => console.log('Arrow clicked')} isDisabled/>
 */
const Arrow: React.FC<ArrowProps> = ({
  direction,
  onClick,
  isDisabled = false,
}) =>
  isDisabled ? null : (
    <button
      onClick={onClick}
      aria-label={direction === "left" ? "Scroll Left" : "Scroll Right"}
      className={`arrow ${direction === "left" ? "transform rotate-180" : ""}`}
      type="button"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.16675 7.00008H12.8334M12.8334 7.00008L7.00008 
      1.16675M12.8334 7.00008L7.00008 12.8334"
          stroke="#9A9696"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );

export default Arrow;
