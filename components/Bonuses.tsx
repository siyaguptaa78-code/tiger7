import styles from "./Bonuses.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function Bonuses() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className="section-title text-center">
          <span>{SITE_CONFIG.brand.name}</span> Bonuses – Complete Breakdown
        </h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.badge}>CODE: TIGER500</div>
            <h3>500% Welcome Bonus</h3>
            <p>The highest welcome bonus in the Indian online betting space. Deposit up to ₹50,000.</p>
            <ul className={styles.list}>
              <li>Deposit ₹500 → Play with ₹3,000</li>
              <li>Deposit ₹1,000 → Play with ₹6,000</li>
              <li>Deposit ₹5,000 → Play with ₹30,000</li>
              <li>Deposit ₹10,000 → Play with ₹60,000</li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.badge}>DAILY</div>
            <h3>15% Daily Cashback</h3>
            <p>Every day at midnight, 15% of your net losses from the previous day is automatically credited back to your account.</p>
            <ul className={styles.list}>
              <li>No claim required</li>
              <li>No promo code needed</li>
              <li>Calculated automatically</li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.badge}>NO LIMIT</div>
            <h3>₹1,500 Referral Bonus</h3>
            <p>Share your referral link. When friends join and deposit ₹500 or more, you receive ₹1,500 instantly.</p>
            <ul className={styles.list}>
              <li>5 referrals = ₹7,500</li>
              <li>20 referrals = ₹30,000</li>
              <li>50 referrals = ₹75,000</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
