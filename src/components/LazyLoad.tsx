import { useRef, useEffect } from "react";
import useLazyLoad from "../hooks/useLazyLoad";

interface LazyLoadProps {
  src: string;
  alt: string;
  type?: "src" | "background";
  loadedClassName?: string;
  options?: IntersectionObserverInit;
}

const LazyLoad = (props: LazyLoadProps) => {
  const {
    src,
    alt,
    type = "src",
    loadedClassName = "loaded",
    options = {},
  } = props;

  const lazyLoadRef = useLazyLoad({ options, type, loadedClassName });
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) lazyLoadRef(elementRef.current);
  }, [elementRef, lazyLoadRef]);

  if (type === "src") {
    return <img ref={elementRef} data-src={src} alt={alt} className="lazy" />;
  } else if (type === "background") {
    return (
      <div
        ref={elementRef}
        data-src={src}
        aria-label={alt}
        role="img"
        className="lazy-background"
      >
        {alt}
      </div>
    );
  } else {
    return null;
  }
};

export default LazyLoad;
