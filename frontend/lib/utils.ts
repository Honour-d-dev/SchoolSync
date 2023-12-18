import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { validationTypes } from "./types";

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
