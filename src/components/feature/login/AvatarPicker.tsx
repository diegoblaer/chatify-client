"use client";

import Avatar from "@/components/common/Avatar";
import FormError from "@/components/common/FormError";
import Typography from "@/components/common/Typography";

const AVATARS: Avatar[] = [
  "astronaut",
  "chef",
  "employee",
  "farmer",
  "sailor",
  "stewardess",
  "waiter",
];

interface AvatarPickerProps {
  onChange: (avatar: Avatar) => void;
  selected?: Avatar;
  error?: string;
}

const AvatarPicker = ({ onChange, selected, error }: AvatarPickerProps) => {
  return (
    <div>
      <Typography variant="small" className="text-center font-medium block">
        Choose your Avatar
      </Typography>
      <div className="mt-4 flex gap-4 items-center justify-center flex-wrap">
        {AVATARS.map((avatar) => (
          <Avatar
            avatar={avatar}
            size="small"
            role="button"
            key={avatar}
            className={`hover:scale-125 transition-all
              ${
                selected === avatar
                  ? "border-2 border-light-blue scale-125"
                  : ""
              }`}
            onClick={() => {
              onChange(avatar);
            }}
          />
        ))}
      </div>
      {error && <FormError className="text-center mt-4" error={error} />}
    </div>
  );
};

export default AvatarPicker;
