"use client";
import React from "react";
import { SITE_CONFIG } from "@/config/constants";
import styles from "./WhatsAppFloat.module.css";

export default function WhatsAppFloat() {
  const whatsappIcon = (
    <svg viewBox="0 0 24 24" className={styles.waIcon} fill="currentColor">
      <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.46 3.48 1.333 5L2 22l5.23-1.373c1.474.803 3.125 1.226 4.782 1.226 5.506 0 9.988-4.482 9.988-9.988C22 6.482 17.518 2 12.012 2zm6.05 14.223c-.247.696-1.442 1.282-1.996 1.37-.506.082-1.168.147-3.32-.74-2.754-1.137-4.523-3.93-4.66-4.114-.138-.184-1.12-1.493-1.12-2.85 0-1.355.708-2.02.962-2.296.255-.275.556-.343.742-.343h.53c.17 0 .397-.064.62.464.226.544.773 1.884.84 2.02.067.137.112.3.022.482-.09.183-.135.298-.27.458-.135.16-.284.358-.405.48-.135.138-.277.288-.12.56.157.27.7 1.15 1.5 1.86.8.71 1.477.93 1.687 1.02.21.09.337.076.464-.067.128-.143.557-.648.708-.87.15-.224.3-.185.507-.11.206.074 1.31.618 1.536.732.226.113.376.17.433.267.056.096.056.554-.19 1.25z" />
    </svg>
  );

  return (
    <div className={styles.floatWrapper}>
      {/* 3 WhatsApp buttons stacked vertically */}
      <a
        href={`${SITE_CONFIG.whatsappLink}?text=Hi!%20I%20want%20to%20get%20a%20new%20Tiger365%20ID%20instantly.`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.floatBtn} ${styles.btnGetId}`}
        aria-label="Get Instant Tiger365 ID"
      >
        {whatsappIcon}
        <span className={styles.label}>Get Instant ID</span>
      </a>

      <a
        href={`${SITE_CONFIG.whatsappLink}?text=Hi!%20I%20want%20to%20deposit/withdraw%20funds%20from%20my%20Tiger365%20account.`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.floatBtn} ${styles.btnPayments}`}
        aria-label="Tiger365 Deposits & Withdrawals"
      >
        {whatsappIcon}
        <span className={styles.label}>Deposits & Payouts</span>
      </a>

      <a
        href={`${SITE_CONFIG.whatsappLink}?text=Hi!%20I%20need%20support%20with%20my%20Tiger365%20account.`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.floatBtn} ${styles.btnSupport}`}
        aria-label="Tiger365 Customer Care Support"
      >
        {whatsappIcon}
        <span className={styles.label}>24/7 Live Support</span>
      </a>
    </div>
  );
}
