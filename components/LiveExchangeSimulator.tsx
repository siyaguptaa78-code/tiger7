"use client";
import React from "react";
import styles from "./LiveExchangeSimulator.module.css";
import { SITE_CONFIG } from "@/config/constants";

interface Match {
  id: number;
  time: string;
  isLive: boolean;
  teamA: string;
  teamB: string;
  hasBM: boolean;
  hasF: boolean;
  hasP: boolean;
  odds: {
    back: (number | string | null)[];
    lay: (number | string | null)[];
  };
}

const CRICKET_MATCHES: Match[] = [
  {
    id: 1,
    time: "Today 03:30 PM",
    isLive: true,
    teamA: "England",
    teamB: "New Zealand",
    hasBM: true,
    hasF: true,
    hasP: true,
    odds: {
      back: [1.45, 1.46, 1.47],
      lay: [3.15, 3.20, 3.25]
    }
  },
  {
    id: 2,
    time: "Today 07:00 PM",
    isLive: false,
    teamA: "Kent W",
    teamB: "Worcestershire Rapids W",
    hasBM: true,
    hasF: true,
    hasP: true,
    odds: {
      back: [null, null, null],
      lay: [null, null, null]
    }
  },
  {
    id: 3,
    time: "Today 07:30 PM",
    isLive: true,
    teamA: "India",
    teamB: "Pakistan",
    hasBM: true,
    hasF: true,
    hasP: true,
    odds: {
      back: [1.72, 1.74, 1.76],
      lay: [2.12, 2.14, 2.16]
    }
  }
];

const OTHER_MATCHES: Match[] = [
  {
    id: 4,
    time: "Today 08:30 PM",
    isLive: true,
    teamA: "Real Madrid",
    teamB: "Barcelona",
    hasBM: true,
    hasF: false,
    hasP: true,
    odds: {
      back: [2.10, 2.15, 2.20],
      lay: [3.40, 3.45, 3.50]
    }
  },
  {
    id: 5,
    time: "Today 09:00 PM",
    isLive: true,
    teamA: "Novak Djokovic",
    teamB: "Carlos Alcaraz",
    hasBM: false,
    hasF: false,
    hasP: true,
    odds: {
      back: [1.88, 1.90, 1.92],
      lay: [1.95, 1.97, 1.99]
    }
  }
];

export default function LiveExchangeSimulator() {
  
  const handleBetClick = (team: string, type: "Back" | "Lay", oddValue: number | string | null) => {
    if (oddValue === null) return;
    const text = encodeURIComponent(
      `Hi! I want to place a ${type} bet of ₹1000 on ${team} at odds of ${oddValue} on Tiger365.`
    );
    window.open(`${SITE_CONFIG.whatsappLink}?text=${text}`, "_blank");
  };

  const renderMatchRow = (match: Match) => {
    return (
      <div key={match.id} className={styles.matchRow}>
        <div className={styles.matchMeta}>
          <div className={styles.matchTime}>
            {match.isLive && <span className={styles.indicator}></span>} {match.time}
          </div>
          <div className={styles.matchIndicators}>
            <div className={styles.matchIcons}>
              {match.hasBM && <span className={`${styles.badgeIcon} ${styles.bm}`}>BM</span>}
              {match.hasF && <span className={`${styles.badgeIcon} ${styles.f}`}>F</span>}
              {match.hasP && <span className={`${styles.badgeIcon} ${styles.p}`}>P</span>}
            </div>
            <span style={{ fontSize: "14px" }}>🔔 💬</span>
          </div>
        </div>

        <div className={styles.matchDetails}>
          <div className={styles.teamName}>
            {match.teamA} v {match.teamB}
          </div>
          
          <div className={styles.oddsGrid}>
            {/* Back Odds (Blue) */}
            {match.odds.back.map((odd, idx) => (
              <button
                key={`back-${idx}`}
                className={`${styles.oddsBtn} ${odd !== null ? styles.backBtn : styles.emptyOdds}`}
                onClick={() => handleBetClick(match.teamA, "Back", odd)}
                disabled={odd === null}
              >
                <span>{odd !== null ? odd : "-"}</span>
              </button>
            ))}
            
            {/* Lay Odds (Pink) */}
            {match.odds.lay.map((odd, idx) => (
              <button
                key={`lay-${idx}`}
                className={`${styles.oddsBtn} ${odd !== null ? styles.layBtn : styles.emptyOdds}`}
                onClick={() => handleBetClick(match.teamB, "Lay", odd)}
                disabled={odd === null}
              >
                <span>{odd !== null ? odd : "-"}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className={styles.section} id="live-exchange">
      <div className={styles.titleWrapper}>
        <h2>Live <span>Exchange simulator</span></h2>
        <span style={{ fontSize: "0.9rem" }}>🟢 Real-time Markets</span>
      </div>

      <div className={styles.exchangeHeader}>Cricket Exchange</div>
      <div className={styles.matchList}>
        {CRICKET_MATCHES.map((match) => renderMatchRow(match))}
      </div>

      <div className={styles.exchangeHeader} style={{ marginTop: "2rem", backgroundColor: "#0f1c3f" }}>
        Football & Tennis Exchange
      </div>
      <div className={styles.matchList}>
        {OTHER_MATCHES.map((match) => renderMatchRow(match))}
      </div>
    </section>
  );
}
