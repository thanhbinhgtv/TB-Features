import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Kết hợp clsx và twMerge để xử lý className, tự bỏ class Tailwind bị trùng/xung đột
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
