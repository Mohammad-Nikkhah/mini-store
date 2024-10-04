import * as React from "react";
import { cn } from "@/src/lib/utils";

export interface SwitchProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    { className, pressed: initialPressed = false, onPressedChange, ...props },
    ref
  ) => {
    const [pressed, setPressed] = React.useState(initialPressed);

    const handleSwitch = () => {
      const newPressed = !pressed;
      setPressed(newPressed);
      if (onPressedChange) {
        onPressedChange(newPressed);
      }
    };

    return (
      <button
        ref={ref}
        onClick={handleSwitch}
        className={cn(
          "relative inline-flex h-6 w-28  ltr items-center rounded-full transition-colors duration-300",
          pressed ? "bg-blue-900" : "bg-gray-300",
          className
        )}
        aria-pressed={pressed}
        {...props}
      >
        <span
          className={cn(
            "inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300",
            pressed ? "translate-x-6" : "translate-x-1"
          )}
        />
      </button>
    );
  }
);

Switch.displayName = "Switch";

export { Switch };
