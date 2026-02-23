import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Fungsi untuk membuka WhatsApp langsung tanpa popup
export function openWhatsApp(message: string, phoneNumber: string = "6282277757234") {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}
