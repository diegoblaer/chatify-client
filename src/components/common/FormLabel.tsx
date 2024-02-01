"use client";

import { LabelHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import Typography from "./Typography";

interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
}

const FormLabel = ({ text, className, ...otherProps }: FormLabelProps) => {
  return (
    <label {...otherProps} className={twMerge(`block mb-2`, className)}>
      <Typography variant="small" className="font-medium">
        {text}
      </Typography>
    </label>
  );
};

export default FormLabel;
