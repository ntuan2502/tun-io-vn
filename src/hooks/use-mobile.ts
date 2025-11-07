"use client";

import { useEffect, useState } from "react";

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    let mounted = true;
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);

    const onChange = () => {
      if (mounted) {
        setIsMobile(mql.matches);
      }
    };

    mql.addEventListener("change", onChange);
    onChange(); // Call onChange initially to set the first value

    return () => {
      mounted = false;
      mql.removeEventListener("change", onChange);
    };
  }, [breakpoint]);

  return !!isMobile;
}
