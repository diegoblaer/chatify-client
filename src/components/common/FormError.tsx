"use client";

import { twMerge } from "tailwind-merge";
import Typography from "./Typography";

interface FormErrorProps extends React.HTMLAttributes<HTMLElement> {
  error: string;
}

const FormError = ({ error, className, ...otherProps }: FormErrorProps) => {
  return (
    <Typography
      variant="xsmall"
      as="p"
      className={twMerge("text-red-error mt-2", className)}
      {...otherProps}
    >
      {error}
    </Typography>
  );
};

export default FormError;
