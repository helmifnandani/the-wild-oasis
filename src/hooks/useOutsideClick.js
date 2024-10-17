import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      // Perlu ada boolean listenCapturing biar behaviornya capturing, nggak bubbling. Karena default JS behaviornya adalah bubbling.
      // Capturing adalah Top - down, jadi dari root -> ... -> parent -> target
      // Bubbling adalah down - top, target -> parent -> .... -> root
      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
