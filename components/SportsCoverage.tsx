import styles from "./SportsCoverage.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function SportsCoverage() {
  return (
    <section className={`section-padding ${styles.section}`} id="sports">
      <div className="container">
        <h2 className="section-title text-center">
          Full Sports and Games Coverage at <span>{SITE_CONFIG.brand.name}</span>
        </h2>
        <p className={`text-center ${styles.subtitle}`}>
          Cricket is the heart of the operation, but the offering extends well beyond it.
        </p>

        <div className={styles.grid}>
          {/* Cricket */}
          <div className={styles.card}>
            <div className={styles.icon}>🏏</div>
            <h3>Cricket Betting</h3>
            <ul className={styles.list}>
              <li>International Test matches and ODIs</li>
              <li>ICC tournaments (T20 World Cup)</li>
              <li>Ranji Trophy, Vijay Hazare, Syed Mushtaq Ali</li>
              <li>Bilateral T20 series involving India</li>
            </ul>
          </div>

          {/* Football */}
          <div className={styles.card}>
            <div className={styles.icon}>⚽</div>
            <h3>Football Betting</h3>
            <ul className={styles.list}>
              <li>English Premier League</li>
              <li>La Liga & UEFA Champions League</li>
              <li>FIFA World Cup Qualifiers</li>
              <li>Indian Super League</li>
            </ul>
          </div>

          {/* Other Sports */}
          <div className={styles.card}>
            <div className={styles.icon}>🎯</div>
            <h3>Other Sports</h3>
            <ul className={styles.list}>
              <li>Tennis – Grand Slams, ATP, WTA</li>
              <li>Kabaddi – Pro Kabaddi League</li>
              <li>Horse Racing – Mumbai, Pune, Bengaluru</li>
            </ul>
          </div>

          {/* Casino */}
          <div className={styles.card}>
            <div className={styles.icon}>🎰</div>
            <h3>Live Casino</h3>
            <ul className={styles.list}>
              <li>Teen Patti – Live dealers</li>
              <li>Andar Bahar – Fast card game</li>
              <li>Roulette & Blackjack</li>
              <li>Baccarat – High roller game</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
