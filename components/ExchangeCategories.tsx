"use client";
import React from "react";
import styles from "./ExchangeCategories.module.css";
import { SITE_CONFIG } from "@/config/constants";

interface Category {
  id: number;
  name: string;
  emoji: string;
  gradient: string;
}

const CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Cricket",
    emoji: "🏏",
    gradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)"
  },
  {
    id: 2,
    name: "Football",
    emoji: "⚽",
    gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)"
  },
  {
    id: 3,
    name: "Tennis",
    emoji: "🎾",
    gradient: "linear-gradient(135deg, #f12711 0%, #f5af19 100%)"
  },
  {
    id: 4,
    name: "Int Casino",
    emoji: "💃",
    gradient: "linear-gradient(135deg, #833ab4 0%, #fd1d1d 100%, #fcb045 100%)"
  },
  {
    id: 5,
    name: "Horse Racing",
    emoji: "🏇",
    gradient: "linear-gradient(135deg, #7b4397 0%, #dc2430 100%)"
  },
  {
    id: 6,
    name: "Greyhound Racing",
    emoji: "🐕",
    gradient: "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)"
  }
];

export default function ExchangeCategories() {
  
  const handleCategoryClick = (catName: string) => {
    const text = encodeURIComponent(`Hi! I want to access the ${catName} Exchange markets on Tiger365.`);
    window.open(`${SITE_CONFIG.whatsappLink}?text=${text}`, "_blank");
  };

  return (
    <section className={styles.section} id="exchange-categories">
      <div className={styles.sectionHeader}>
        <h2>In Our <span>Exchange</span></h2>
      </div>

      <div className={styles.grid}>
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className={styles.card}
            style={{ background: cat.gradient }}
            onClick={() => handleCategoryClick(cat.name)}
          >
            <div className={styles.cardOverlay}></div>
            <div className={styles.cardEmoji}>{cat.emoji}</div>
            <div className={styles.cardContent}>
              <span className={styles.badge}>{cat.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
