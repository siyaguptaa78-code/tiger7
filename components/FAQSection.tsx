"use client";
import { useState } from "react";
import styles from "./FAQSection.module.css";
import { SITE_CONFIG } from "@/config/constants";

const faqs = [
  {
    q: `What is ${SITE_CONFIG.brand.name}?`,
    a: `${SITE_CONFIG.brand.name} is India’s leading online betting exchange platform, offering direct access to Tiger365 ID accounts. It provides players with instant ID setup on WhatsApp, live sportsbooks, casino lobbies, and fast withdrawals.`
  },
  {
    q: `How do I get a Tiger365 ID?`,
    a: `Click any “Get ID” or WhatsApp button on our page, enter your nickname, and receive your login credentials via WhatsApp in under 60 seconds. No paperwork or verification files are required for registration.`
  },
  {
    q: "What is the minimum deposit?",
    a: "The minimum deposit is ₹100 – the lowest starting amount in the Indian online betting market."
  },
  {
    q: "How fast are withdrawals?",
    a: "UPI payouts process in less than 15-30 minutes. Direct bank transfers complete in 1 to 2 hours. Crypto withdrawals take 5 to 15 minutes. Support is available 24/7."
  },
  {
    q: "Can I access it on mobile?",
    a: "Yes. Tiger365 is fully optimized for mobile devices. It works directly on any mobile browser (Chrome, Safari, Firefox) without needing any APK or app downloads."
  },
  {
    q: "What age is required to use this platform?",
    a: "You must be 18 years or older. Age verification is mandatory during the WhatsApp onboarding process."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className="section-title text-center">
          Frequently Asked Questions
        </h2>
        
        <div className={styles.faqWrapper}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${openIndex === index ? styles.active : ""}`}
            >
              <div 
                className={styles.faqQuestion} 
                onClick={() => toggleFaq(index)}
              >
                <h3>{faq.q}</h3>
                <span className={styles.icon}>{openIndex === index ? "−" : "+"}</span>
              </div>
              <div className={styles.faqAnswer}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
