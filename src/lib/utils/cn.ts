import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';

export default function cn(...className: ClassValue[]): string {
  return twMerge(clsx(...className));
}
