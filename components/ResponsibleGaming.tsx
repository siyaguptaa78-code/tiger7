import styles from "./ResponsibleGaming.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function ResponsibleGaming() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.warningHeader}>
            <span className={styles.icon}>⚠️</span>
            <h2>Responsible Gaming – Read Before You Start</h2>
          </div>

          <div className={styles.content}>
            <p className={styles.intro}>
              {SITE_CONFIG.brand.name} is an entertainment platform. Betting involves real money and carries financial risk. The platform takes responsible gaming seriously and asks every member to do the same.
            </p>

            <div className={styles.grid}>
              <div className={styles.col}>
                <h3>Before You Bet, Remember:</h3>
                <ul className={styles.list}>
                  <li>Only bet with money you can afford to lose without financial hardship.</li>
                  <li>Set a deposit limit before you start and stick to it.</li>
                  <li>Never try to recover a loss by placing larger bets – it rarely works.</li>
                  <li>Take breaks regularly, especially during long live betting sessions.</li>
                  <li>If betting starts to feel compulsive or stressful, stop and seek help.</li>
                </ul>
              </div>

              <div className={styles.col}>
                {/* <h3>Support Is Available</h3> */}
                {/* <div className={styles.helpline}>
                  National Problem Gambling Helpline:
                  <strong>1800-522-4700</strong>
                </div> */}
                <p className={styles.age}>
                  This platform is strictly for users aged <strong>18 and above</strong>. Age verification is part of the onboarding process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
