import * as React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
