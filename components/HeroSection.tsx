import WhatsAppButton from "./WhatsAppButton";
import styles from "./HeroSection.module.css";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/constants";

export default function HeroSection() {
  return (
    <section className={styles.hero} id="home">
      <div className={`container ${styles.content}`}>
        <h1 className={`${styles.title} animate-fade-in`}>
          TIGER365 LOGIN – <span className={styles.accent}>GET YOUR OFFICIAL ID</span> & LOG IN INSTANTLY
        </h1>
        
        <div className={`${styles.bannerWrapper} animate-fade-in animate-delay-1`}>
          <Image 
            src={SITE_CONFIG.images.heroBanner} 
            alt="Tiger365 Official Account Login" 
            width={1000}
            height={500}
            priority
            className={styles.mainBanner}
          />
        </div>
        
        <p className={`${styles.subtitle} animate-fade-in animate-delay-2`}>
          Access your Tiger365 account effortlessly. Create a new account or log into Tiger365 for a seamless sports betting and live casino experience. Fast UPI deposits and 24/7 withdrawals.
        </p>
        
        <div className={`${styles.ctaGroup} animate-fade-in animate-delay-3`}>
          <WhatsAppButton className={styles.mainCta}>
            👉 Login / Get Tiger365 ID 👈
          </WhatsAppButton>
          <WhatsAppButton variant="outline" className={styles.secondaryCta}>
            👉 24/7 Tiger365 Support 👈
          </WhatsAppButton>
        </div>
        
        <div className={`${styles.stats} animate-fade-in animate-delay-3`}>
          <div className={styles.statItem}>
            <h3>100,000+</h3>
            <p>Active Bettors</p>
          </div>
          <div className={styles.statItem}>
            <h3>24/7</h3>
            <p>Live Chat Support</p>
          </div>
          <div className={styles.statItem}>
            <h3>60 Sec</h3>
            <p>ID Generation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
