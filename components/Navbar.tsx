"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";
import { SITE_CONFIG } from "@/config/constants";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoWrapper}>
            <Image 
              src="https://tiger365id.in/wp-content/uploads/2024/09/tiger365id.in-logo.png"
              alt="Tiger365 ID Logo"
              width={45}
              height={45}
              className={styles.logoImg}
            />
            <div className={styles.logoTextWrapper}>
              <div className={styles.logoTextLine}>
                <span className={styles.logoReddy}>TIGER365</span>
                <span className={styles.logoAnna}>ID.IN</span>
              </div>
              <div className={styles.logoSub}>OFFICIAL LANDING PORTAL</div>
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className={styles.desktopNav}>
          <Link href="#home">Home</Link>
          <Link href="#lobbies">Sportsbook</Link>
          <Link href="#lobbies">Live Casino</Link>
          <Link href="#lobbies">Slot Games</Link>
          <Link href="#lobbies">Card Games</Link>
          <Link href="#about">About Tiger365</Link>
          <Link href="#faq">FAQ</Link>
        </nav>

        <div className={styles.navActions}>
          <WhatsAppButton className={`${styles.desktopBtn} ${styles.registerBtn}`}>Register</WhatsAppButton>
          <WhatsAppButton className={`${styles.desktopBtn} ${styles.loginBtn}`}>Login</WhatsAppButton>
          
          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="#home" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="#lobbies" onClick={() => setMobileMenuOpen(false)}>Sportsbook</Link>
          <Link href="#lobbies" onClick={() => setMobileMenuOpen(false)}>Live Casino</Link>
          <Link href="#lobbies" onClick={() => setMobileMenuOpen(false)}>Slot Games</Link>
          <Link href="#lobbies" onClick={() => setMobileMenuOpen(false)}>Card Games</Link>
          <Link href="#about" onClick={() => setMobileMenuOpen(false)}>About Tiger365</Link>
          <Link href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
          <div className={styles.mobileActions}>
             <WhatsAppButton className={`${styles.desktopBtn} ${styles.registerBtn}`}>Register</WhatsAppButton>
             <WhatsAppButton className={`${styles.desktopBtn} ${styles.loginBtn}`}>Login</WhatsAppButton>
          </div>
        </div>
      )}
    </header>
  );
}
