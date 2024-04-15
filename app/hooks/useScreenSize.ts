import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [isMobile, setIsMobile] = useState(innerWidth < 768);

  useEffect(() => {
    function handleWindowResize() {
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return { innerHeight, innerWidth, isMobile };
};
