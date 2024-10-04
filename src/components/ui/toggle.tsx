import * as React from "react";
import { cn } from "@/src/lib/utils";

export interface ToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  (
    { className, pressed: initialPressed = false, onPressedChange, ...props },
    ref
  ) => {
    const [pressed, setPressed] = React.useState(initialPressed);

    const handleToggle = () => {
      const newPressed = !pressed;
      setPressed(newPressed);
      if (onPressedChange) {
        onPressedChange(newPressed);
      }
    };

    return (
      <button
        ref={ref}
        className={cn(
          "px-4 py-2 rounded-full transition-colors",
          pressed ? "bg-green-500 text-white" : "bg-gray-200 text-black",
          className
        )}
        aria-pressed={pressed}
        onClick={handleToggle}
        {...props}
      />
    );
  }
);

Toggle.displayName = "Toggle";

export { Toggle };
