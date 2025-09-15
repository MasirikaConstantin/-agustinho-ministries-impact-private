import { useState, useEffect, RefCallback } from "react";
import { type FancyboxOptions, Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function useFancybox(options: Partial<FancyboxOptions> = {}): [RefCallback<HTMLElement>] {
  const [root, setRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (root) {
      Fancybox.bind(root, "[data-fancybox]", options);
      return () => Fancybox.unbind(root);
    }
  }, [root, options]);

  const ref: RefCallback<HTMLElement> = (element) => {
    setRoot(element);
  };

  return [ref];
}