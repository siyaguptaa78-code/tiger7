import { SITE_CONFIG } from "@/config/constants";
import React from "react";

interface WhatsAppButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline";
}

export default function WhatsAppButton({ children, className = "", variant = "primary" }: WhatsAppButtonProps) {
  const btnClass = variant === "primary" ? "btn-primary" : "btn-outline";
  
  return (
    <a 
      href={SITE_CONFIG.whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${btnClass} ${className}`}
    >
      {children}
    </a>
  );
}
