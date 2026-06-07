import styles from "./Testimonials.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function Testimonials() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className="section-title text-center">
          What Our Members Say About <span>{SITE_CONFIG.brand.name}</span>
        </h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>
              "I have been using {SITE_CONFIG.brand.name} for three IPL seasons. The withdrawals are genuinely fast – never waited more than 20 minutes for a UPI payment. I recommended it to four friends and all of them had the same experience. This is the only platform I trust now."
            </p>
            <div className={styles.author}>
              <h4>Vikram Mehta</h4>
              <span>Hyderabad</span>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>
              "I was nervous about depositing money on any betting platform after being burned by a Telegram operator before. A friend told me about {SITE_CONFIG.brand.name}. I started with ₹100, placed a couple of bets on CSK matches, won ₹3,400, and received it in my Paytm within 15 minutes."
            </p>
            <div className={styles.author}>
              <h4>Sneha Iyer</h4>
              <span>Chennai</span>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>
              "The minimum deposit being ₹100 is what got me started. I was not ready to commit ₹1,000 on a new platform. Three months later I am a regular member and have withdrawn over ₹40,000 in total. Zero issues. The live markets during IPL are excellent."
            </p>
            <div className={styles.author}>
              <h4>Arjun Kapoor</h4>
              <span>Jaipur</span>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>
              "I had questions about live login registration and the support team answered everything on WhatsApp within seconds. My ID was ready in under a minute. The whole process made other platforms look embarrassing by comparison."
            </p>
            <div className={styles.author}>
              <h4>Ravi Verma</h4>
              <span>Pune</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
