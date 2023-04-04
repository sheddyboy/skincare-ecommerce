import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface useScrollTopProps {
  smoothScroll?: boolean;
}

const useScrollTop = ({ smoothScroll }: useScrollTopProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: smoothScroll ? "smooth" : "auto",
    });
  }, [pathname, smoothScroll]);
};

export default useScrollTop;
