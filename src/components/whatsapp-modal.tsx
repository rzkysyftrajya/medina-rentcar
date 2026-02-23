"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  phoneNumber?: string;
  title?: string;
}

export function WhatsAppModal({
  isOpen,
  onClose,
  message,
  phoneNumber = "6282277757234",
  title = "Konfirmasi WhatsApp",
}: WhatsAppModalProps) {
  const [isConfirming, setIsConfirming] = useState(false);

  const handleConfirm = () => {
    setIsConfirming(true);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setTimeout(() => {
      setIsConfirming(false);
      onClose();
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-md mx-4 bg-background border rounded-lg shadow-lg p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            {title}
          </h2>
          <button
            onClick={onClose}
            className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </div>

        {/* Description */}
        <div className="space-y-4 mb-6">
          <p className="text-sm text-muted-foreground">
            Anda akan dialihkan ke WhatsApp untuk menghubungi Medina Rentcar.
          </p>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            onClick={onClose}
            className="w-full sm:w-auto"
          >
            Batal
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={isConfirming}
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
          >
            {isConfirming ? "Membuka..." : "Ya, Lanjutkan ke WhatsApp"}
          </Button>
        </div>
      </div>
    </div>
  );
}
