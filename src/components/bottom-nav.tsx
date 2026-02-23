"use client";

import { Car, List, MessageSquareText, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { WhatsAppModal } from "./whatsapp-modal";

export function BottomNav() {
  const pathname = usePathname();
  const mapsUrl = `https://maps.app.goo.gl/hs6YVJcmubyxizxi8`;
  const whatsappMessage =
    "Halo Medina Rentcar, saya tertarik untuk menyewa mobil.";
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navItems = [
    { href: "/armada", icon: <Car className="h-6 w-6" />, label: "Armada" },
    { href: "/layanan", icon: <List className="h-6 w-6" />, label: "Layanan" },
    {
      href: "#",
      icon: <MessageSquareText className="h-6 w-6" />,
      label: "WA",
      onClick: () => setIsWhatsAppModalOpen(true),
    },
    {
      href: "tel:6282277757234",
      icon: <Phone className="h-6 w-6" />,
      label: "Telepon",
      isExternal: true,
    },
    {
      href: mapsUrl,
      icon: <MapPin className="h-6 w-6" />,
      label: "Peta",
      isExternal: true,
    },
  ];

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2 md:hidden">
      <div className="mx-auto flex h-16 max-w-full items-center justify-around rounded-2xl border-border/20 bg-card/80 p-1 shadow-lg backdrop-blur-lg">
        {navItems.map((item) => {
          const isActive =
            !item.isExternal && !item.onClick && pathname === item.href;
          const linkContent = (
            <div
              className={cn(
                "flex h-14 w-14 flex-col items-center justify-center gap-1 rounded-xl text-xs transition-all duration-300",
                isActive
                  ? "bg-primary text-primary-foreground scale-105"
                  : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          );

          if (item.onClick) {
            return (
              <button
                key={item.label}
                onClick={item.onClick}
                className="border-none bg-transparent p-0"
              >
                {linkContent}
              </button>
            );
          }

          if (item.isExternal) {
            return (
              <a
                href={item.href}
                key={item.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkContent}
              </a>
            );
          }

          return (
            <Link href={item.href} key={item.label}>
              {linkContent}
            </Link>
          );
        })}
      </div>

      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        message={whatsappMessage}
        phoneNumber="6282277757234"
      />
    </div>
  );
}
