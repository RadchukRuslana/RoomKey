import { useEffect, useRef } from "react";

function useClickOutside(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) handler();
    }
    document.addEventListener("click", handleClick, listenCapturing); // true is necessary, because
    // IN THE LAST VIDEO IT FIXED IN ANOTHER WAY WATCH IT AGAIN
    // otherwise the event will be handled in the bubbling phase,
    //  and not in the capturing phase.  Without it the event will not let us to open modal window again.
    // in capturing phase it will simply travel to the element that clicked, while in bubbling phase it will check all element up and break our logic.
    return () => {
      document.removeEventListener("click", handleClick, listenCapturing);
    };
  }, [handler, listenCapturing]);
  return { ref };
}

export default useClickOutside;
