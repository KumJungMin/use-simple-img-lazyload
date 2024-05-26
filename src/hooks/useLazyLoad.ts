import React, { useEffect, useRef } from "react";

interface UseLazyLoadParams {
  options?: IntersectionObserverInit;
  type?: "src" | "background";
  loadedClassName?: string;
}

const initOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

interface ICallback {
  (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void;
}

const useLazyLoad = (params?: UseLazyLoadParams) => {
  const {
    options = initOptions,
    type = "src",
    loadedClassName = "loaded",
  } = params || {};
  const elementsRef: React.MutableRefObject<HTMLElement[]> = useRef([]);

  useEffect(() => {
    const callback: ICallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        if (type === "src") {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src as string;
        } else if (type === "background") {
          const img = entry.target as HTMLElement;
          img.style.backgroundImage = `url(${img.dataset.src})`;
        }
        entry.target.classList.add(loadedClassName);
        observer.unobserve(entry.target);
      });
    };

    const observer = new IntersectionObserver(callback, options);
    elementsRef.current.forEach((element) => observer.observe(element));

    return () => {
      if (observer)
        elementsRef.current.forEach((element) => observer.unobserve(element));
    };
  }, [options]);

  return (element: HTMLElement) => {
    if (element && !elementsRef.current.includes(element)) {
      elementsRef.current.push(element);
    }
  };
};

export default useLazyLoad;
