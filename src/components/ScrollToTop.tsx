import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scroll back to top on every route change so nav links land at the top.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
