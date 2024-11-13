// LoaderTransition.tsx
import { FC, ReactNode, CSSProperties } from "react";

interface LoaderTransitionProps {
  transitionState: "entering" | "entered" | "exiting" | "exited";
  children: ReactNode;
}

const transitionStyles: Record<string, CSSProperties> = {
  entering: { opacity: 0, transform: "translateY(-10px)" },
  entered: { opacity: 1, transform: "translateY(0)" },
  exiting: { opacity: 0, transform: "translateY(-10px)" },
  exited: { opacity: 0, transform: "translateY(-10px)" },
};

const LoaderTransition: FC<LoaderTransitionProps> = ({
  transitionState,
  children,
}) => {
  return (
    <div
      style={{
        ...transitionStyles[transitionState],
        transition: "opacity 0.1s ease, transform 0.1s ease",
      }}
    >
      {children}
    </div>
  );
};

export default LoaderTransition;
