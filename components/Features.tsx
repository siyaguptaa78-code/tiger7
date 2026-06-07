import WhatsAppButton from "./WhatsAppButton";
import styles from "./Features.module.css";
import { SITE_CONFIG } from "@/config/constants";

const featuresData = [
  {
    title: "Official Exchange Account",
    description: "Your Tiger365 ID acts as a secure, verified digital account to keep betting transparent, organized, and fair.",
    icon: "🐯"
  },
  {
    title: "Instant ID Creation",
    description: "Register and receive your verified Tiger365 exchange ID on WhatsApp in under 60 seconds.",
    icon: "⚡"
  },
  {
    title: "24/7 Fast Withdrawals",
    description: "Get same-day payouts directly via UPI, NetBanking, or GooglePay in less than 15-30 minutes.",
    icon: "💸"
  },
  {
    title: "Multi-Market Betting",
    description: "Access our rich Sportsbook (Cricket, Tennis, Soccer) and live Casino Lobbies (Poker, Teen Patti, Slots).",
    icon: "🎯"
  },
  {
    title: "Encrypted & Secured",
    description: "All transactions and personal credentials remain fully encrypted and protected against unauthorized access.",
    icon: "🔒"
  },
  {
    title: "Real-time Records",
    description: "Your deposits, match reports, bet histories, and balance updates sync live across all platforms.",
    icon: "📊"
  },
  {
    title: "Exclusive Welcome Promos",
    description: "Claim dynamic welcome bonuses, first deposit rewards, and daily cashbacks on lost bets.",
    icon: "🎁"
  },
  {
    title: "24/7 VIP Helpdesk",
    description: "Resolve queries instantly with our highly responsive WhatsApp customer support team.",
    icon: "🤝"
  },
  {
    title: "Responsible Gaming",
    description: "We provide safety tools and limits to ensure an enjoyable and controlled gaming experience.",
    icon: "🧠"
  }
];

export default function Features() {
  return (
    <section className={`section-padding ${styles.featuresSection}`} id="services">
      <div className="container">
        <h2 className="section-title text-center">
          Why Choose <span>{SITE_CONFIG.brand.name}</span>
        </h2>
        <p className={`text-center ${styles.subtitle}`}>
          Experience the ultimate and most secure online betting exchange in India.
        </p>

        <div className={styles.grid}>
          {featuresData.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <WhatsAppButton className={styles.largeCta}>
            Get Your Official Tiger365 ID Instantly
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
