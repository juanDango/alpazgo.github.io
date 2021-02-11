import { useState, useEffect } from "react";

const getCurrentWidth = () => {
  if (process.browser && window !== undefined) {
    return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    );
  }
};

const useReloadWindowChange = (): number | undefined => {
  let [width, setWidth] = useState(getCurrentWidth());

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(getCurrentWidth()), 80);
      location.reload();
    };
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return width;
};

export default useReloadWindowChange;
