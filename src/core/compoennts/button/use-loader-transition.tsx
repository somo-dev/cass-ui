// useLoaderTransition.ts
import { useEffect, useState } from "react";

export function useLoaderTransition(isLoading: boolean) {
  const [transitionState, setTransitionState] = useState<
    "entering" | "entered" | "exiting" | "exited"
  >(isLoading ? "entering" : "exited");

  useEffect(() => {
    if (isLoading) {
      setTransitionState("entering");
      setTimeout(() => setTransitionState("entered"), 250); // Match the CSS transition duration
    } else {
      setTransitionState("exiting");
      setTimeout(() => setTransitionState("exited"), 250); // Match the CSS transition duration
    }
  }, [isLoading]);

  return transitionState;
}
