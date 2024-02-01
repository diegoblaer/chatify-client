import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import Typography from "./Typography";

interface DefaultButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const DefaultButton = ({
  title,
  className,
  ...otherProps
}: DefaultButtonProps) => {
  return (
    <button
      {...otherProps}
      className={twMerge(
        "items-center justify-center flex w-full py-2 px-4 overflow-hidden text-sm font-medium text-white rounded-lg bg-light-blue hover:bg-cyan transition-all h-min",
        className
      )}
    >
      <Typography variant="body" as="span" className="text-white">
        {title}
      </Typography>
    </button>
  );
};

export default DefaultButton;
