import * as React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`border p-2 rounded-md w-20 ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
