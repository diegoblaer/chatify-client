"use client";

import { Avatar, AvatarSize } from "@/utils/types";
import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

interface AvatarProps extends Omit<ImageProps, "alt" | "src"> {
  avatar: Avatar;
  size: AvatarSize;
  onClick?: () => void;
}

const SIZE_MAPPING: Record<AvatarSize, number> = {
  big: 60,
  small: 30,
  xsmall: 18,
};

const Avatar = ({
  avatar,
  size,
  onClick,
  className,
  ...otherProps
}: AvatarProps) => {
  return (
    <Image
      src={`/${avatar}.png`}
      width={SIZE_MAPPING[size]}
      height={SIZE_MAPPING[size]}
      alt={avatar}
      className={twMerge("rounded-full", className)}
      onClick={onClick}
      {...otherProps}
    />
  );
};

export default Avatar;
