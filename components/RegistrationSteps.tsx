import styles from "./RegistrationSteps.module.css";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/constants";

export default function RegistrationSteps() {
  return (
    <section className={`section-padding ${styles.section}`} id="steps">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.contentCol}>
            <h2 className="section-title">
              How to Generate Your Tiger365 ID
            </h2>
            <p className={styles.intro}>
              Obtaining an ID is the first and easiest step. With Tiger365, even a beginner can create their own account in minutes without any long, time-wasting steps.
            </p>
            
            <div className={styles.stepsList}>
              <div className={styles.step}>
                <h3>Step 1 – Start Chat on WhatsApp</h3>
                <p>Click on any "Get ID" button to initiate a chat with our official Tiger365 support assistant.</p>
              </div>
              
              <div className={styles.step}>
                <h3>Step 2 – Enter Nickname</h3>
                <p>Share your username or nickname that you want to associate with your Tiger365 account.</p>
              </div>
              
              <div className={styles.step}>
                <h3>Step 3 – Instant ID Generation</h3>
                <p>The backend will immediately generate your login credentials, wallet keys, and the official site link.</p>
              </div>
              
              <div className={styles.step}>
                <h3>Step 4 – Deposit Funds</h3>
                <p>Deposit a minimum of ₹100 using secure UPI, WhatsApp Pay, or Bank transfer to get active chips.</p>
              </div>

              <div className={styles.step}>
                <h3>Step 5 – Login & Place Bets</h3>
                <p>Use the provided login link and credentials, choose your game, and start placing bets on live markets.</p>
              </div>

              <div className={styles.step}>
                <h3>Step 6 – Fast 24/7 Withdrawal</h3>
                <p>Whenever you win, request a withdrawal on WhatsApp. The money will reach your bank account in 15-30 minutes.</p>
              </div>
            </div>
          </div>
          
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <Image 
                src={SITE_CONFIG.images.registrationBanner} 
                alt="Tiger365 Registration Steps" 
                width={1000}
                height={500}
                className={styles.stepImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
