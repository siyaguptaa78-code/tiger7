import styles from "./WithdrawalProcess.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function WithdrawalProcess() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className="section-title text-center">
          <span>{SITE_CONFIG.brand.name}</span> Withdrawal Process – Fast, Transparent, Guaranteed
        </h2>
        <p className={`text-center ${styles.subtitle}`}>
          The most important question any bettor asks is: “Will I actually get my money?” At {SITE_CONFIG.brand.name}, the answer is always yes – and it comes quickly.
        </p>

        <div className={styles.methodsGrid}>
          <div className={styles.methodCard}>
            <div className={styles.icon}>📱</div>
            <h3>UPI (GPay, PhonePe, Paytm)</h3>
            <div className={styles.time}>Instant to 30 mins</div>
            <p>The most popular method because of its speed and availability across virtually every smartphone in India.</p>
          </div>
          
          <div className={styles.methodCard}>
            <div className={styles.icon}>🏦</div>
            <h3>Bank Transfer (NEFT/IMPS)</h3>
            <div className={styles.time}>1 to 2 hours</div>
            <p>For larger withdrawals or members who prefer direct bank credit, available around the clock.</p>
          </div>

          <div className={styles.methodCard}>
            <div className={styles.icon}>₿</div>
            <h3>Crypto (USDT, Bitcoin)</h3>
            <div className={styles.time}>5 to 15 mins</div>
            <p>Members who prefer cryptocurrency withdrawals have the option for crypto payouts with near-instant processing times.</p>
          </div>
        </div>

        <div className={styles.recordsBox}>
          <h3>Verified Withdrawal Records</h3>
          <p className={styles.recordSub}>Real members. Real transactions. Real amounts.</p>
          <ul className={styles.recordList}>
            <li><strong>Rajesh Sharma, Mumbai</strong> – ₹1,85,000 via UPI – 22 minutes</li>
            <li><strong>Priya Singh, Delhi</strong> – ₹45,000 via Paytm – 11 minutes</li>
            <li><strong>Suresh Patel, Bangalore</strong> – ₹2,50,000 via Bank Transfer – 18 minutes</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
