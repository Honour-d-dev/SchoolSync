import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { validationTypes } from "./types";
import { useState } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleFormValidate = ({
  name,
  email,
  school,
}: validationTypes) => {
  if (
    (!name && !email && !school) ||
    (typeof name !== "string" &&
      typeof email !== "string" &&
      typeof school !== "string") ||
    (name.length < 1 && email.length < 1 && school.length < 1)
  ) {
    return false;
  }

  return true;
};

export const useImagePreview = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  return [imagePreview, handleImageChange] as const;
};
