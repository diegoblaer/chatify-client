import React, { ElementType, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body"
  | "small"
  | "xsmall";

interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    PropsWithChildren {
  variant: Variant;
  as?: ElementType;
}

const tags: Record<Variant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body: "p",
  small: "span",
  xsmall: "span",
};

const baseClasses: Record<Variant, string> = {
  h1: "font-bold text-primary-1 lg:text-6xl text-4xl mb-6",
  h2: `font-bold text-primary-1 lg:text-4xl text-3xl mb-6`,
  h3: `font-bold text-primary-1 lg:text-3xl text-2xl mb-6`,
  h4: `font-bold text-primary-1 lg:text-2xl text-xl mb-6`,
  h5: `font-bold text-primary-1 text-xl`,
  h6: `font-bold text-primary-1 text-lg`,
  body: `text-primary-1 text-base`,
  small: "text-primary-1 text-sm",
  xsmall: "text-primary-1 text-xs",
};

const Typography = ({
  variant,
  children,
  className = "",
  as,
  ...otherProps
}: TypographyProps) => {
  const sizeClasses = baseClasses[variant];
  const Tag = as || tags[variant];

  return (
    <Tag className={twMerge(`${sizeClasses} ${className}`)} {...otherProps}>
      {children}
    </Tag>
  );
};

export default Typography;
