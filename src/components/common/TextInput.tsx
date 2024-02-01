import { InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, ...otherProps }, ref) => {
    return (
      <input
        type="text"
        ref={ref}
        className={twMerge(
          "border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-light-blue focus:border-light-blue block w-full p-2.5",
          className
        )}
        {...otherProps}
      />
    );
  }
);

export default TextInput;
