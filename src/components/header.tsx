"use client";

import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  Menu,
  X,
  Car,
  LayoutList,
  GalleryHorizontal,
  Info,
  FileQuestion,
  Mail,
  FileText,
  Home,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppModal } from "./whatsapp-modal";

export function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.88-.36-7.02-1.88-1.82-1.26-3.03-3.32-3.31-5.45-.14-1.03-.13-2.09-.13-3.14H.02c.11 2.2.62 4.34 1.87 6.13 1.25 1.79 3.06 3.1 5.14 3.68 2.08.58 4.32.55 6.36.03 2.19-.55 4.09-1.89 5.39-3.79 1.02-1.51 1.63-3.2 1.74-4.96.12-1.9.06-3.81.03-5.71.02-2.52.01-5.04.02-7.56h4.03c-.23 1.4-.65 2.75-1.39 3.96-1.01 1.69-2.66 2.99-4.52 3.44v-4.03c.87-.27 1.69-.65 2.44-1.15.01-3.55.01-7.09.01-10.64z" />
    </svg>
  );
}

export function Header() {
  const navItems = [
    { href: "/", label: "Beranda", icon: <Home className="h-6 w-6" /> },
    { href: "/armada", label: "Armada", icon: <Car className="h-6 w-6" /> },
    {
      href: "/layanan",
      label: "Layanan",
      icon: <LayoutList className="h-6 w-6" />,
    },
    {
      href: "/galeri",
      label: "Galeri",
      icon: <GalleryHorizontal className="h-6 w-6" />,
    },
    { href: "/tentang", label: "Tentang", icon: <Info className="h-6 w-6" /> },
    { href: "/faq", label: "FAQ", icon: <FileQuestion className="h-6 w-6" /> },
    {
      href: "/kontak",
      label: "Kontak",
      icon: <Mail className="h-6 w-6" />,
      desktopHidden: true,
    },
    {
      href: "/syarat-ketentuan",
      label: "Syarat & Ketentuan",
      icon: <FileText className="h-6 w-6" />,
      desktopHidden: true,
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = React.useState(false);
  const pathname = usePathname();

  const whatsappMessage =
    "Halo Medina Rentcar, saya tertarik untuk menyewa mobil.";

  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const mobileMenuVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08 + 0.2,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <header className="relative z-40 bg-background/80 backdrop-blur-sm sticky top-0">
        <div className="container mx-auto flex h-24 items-center justify-between gap-4 px-6">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Medina Rentcar Logo"
                width={160}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-end flex-1 gap-4">
            <nav className="flex items-center justify-center bg-card/50 px-4 py-2 rounded-full border border-border/20 shadow-sm">
              {navItems
                .filter((item) => !item.desktopHidden)
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
                      pathname === item.href
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/80"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
            </nav>
            <Button
              asChild
              className="rounded-full font-bold whitespace-nowrap"
              onClick={() => setIsWhatsAppModalOpen(true)}
            >
              <button type="button">Booking via WA</button>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variant="ghost"
              size="icon"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Buka Menu</span>
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="fixed inset-0 z-50 h-screen bg-background/95 backdrop-blur-lg md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              className="container mx-auto flex h-full flex-col bg-card"
              onClick={(e) => e.stopPropagation()}
              initial={{ x: "100%" }}
              animate={{ x: 0, transition: { duration: 0.4, ease: "circOut" } }}
              exit={{
                x: "100%",
                transition: { duration: 0.3, ease: "circIn" },
              }}
            >
              <div className="flex h-24 items-center justify-between px-6">
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src="/logo.png"
                    alt="Medina Rentcar Logo"
                    width={160}
                    height={40}
                    className="h-10 w-auto"
                    priority
                  />
                </Link>
                <Button
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="ghost"
                  size="icon"
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Tutup Menu</span>
                </Button>
              </div>

              <div className="flex-grow overflow-y-auto px-6 pb-8">
                <nav className="flex flex-col items-stretch gap-2">
                  {navItems.map((item, i) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      custom={i}
                      variants={navItemVariants}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-4 text-2xl font-bold transition-colors hover:text-primary w-full p-4 rounded-lg",
                        pathname === item.href
                          ? "text-primary bg-primary/10"
                          : "text-foreground"
                      )}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </motion.a>
                  ))}
                </nav>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.8, duration: 0.4 },
                }}
                className="flex-shrink-0 p-6"
              >
                <Separator className="my-6" />
                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-full font-bold text-lg py-7"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsWhatsAppModalOpen(true);
                  }}
                >
                  <button type="button">Booking via WA</button>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        message={whatsappMessage}
        phoneNumber="6282277757234"
      />
    </>
  );
}
