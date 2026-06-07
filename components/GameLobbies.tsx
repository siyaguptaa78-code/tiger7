"use client";
import React, { useState } from "react";
import WhatsAppButton from "./WhatsAppButton";
import { SITE_CONFIG } from "@/config/constants";
import styles from "./GameLobbies.module.css";

const CATEGORY_TABS = [
  { name: "IPL 2026", count: 1, icon: "🏏" },
  { name: "CRICKET", count: 9, icon: "🏏" },
  { name: "FOOTBALL", count: 13, icon: "⚽" },
  { name: "TENNIS", count: 20, icon: "🎾" },
  { name: "SPORTSBOOK", count: null, icon: "📕" },
  { name: "MATKA", count: null, icon: "🏺" },
  { name: "CRICKET FIGHT", count: null, icon: "🥊" },
  { name: "CASINO", count: null, icon: "🎰" },
  { name: "INT EVOLUTION", count: null, icon: "🃏" }
];

const CASINO_SLIDER_ROW_1 = [
  { name: "SATTA MATKA", icon: "🏺", gradient: "linear-gradient(135deg, #7b2cbf 0%, #9d4edd 100%)" },
  { name: "HELI PILOT", icon: "🚁", gradient: "linear-gradient(135deg, #d90429 0%, #ef233c 100%)" },
  { name: "QUICK 3D LOTTERY", icon: "🎲", gradient: "linear-gradient(135deg, #f72585 0%, #7209b7 100%)" },
  { name: "BATTLE CRICKET", icon: "🏏", gradient: "linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%)" },
  { name: "INSTANT TEENPATTI 2", icon: "🃏", gradient: "linear-gradient(135deg, #e65c00 0%, #f9d423 100%)" },
  { name: "DIAMOND ROULETTE", icon: "🎡", gradient: "linear-gradient(135deg, #14213d 0%, #fca311 100%)" },
];

const CASINO_SLIDER_ROW_2 = [
  { name: "ROULETTE LIVE", icon: "🎡", gradient: "linear-gradient(135deg, #03001e 0%, #7303c0 100%)" },
  { name: "AUTO ROULETTE", icon: "🎡", gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 100%, #2c5364 100%)" },
  { name: "CRIME EMPIRE", icon: "🕵️", gradient: "linear-gradient(135deg, #37000a 0%, #7d0010 100%)" },
  { name: "CLASSIC ROULETTE", icon: "🎡", gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)" },
  { name: "VIP TEENPATTI", icon: "🃏", gradient: "linear-gradient(135deg, #8a2387 0%, #e94057 100%, #f27121 100%)" },
  { name: "DRAGON TIGER", icon: "🐯", gradient: "linear-gradient(135deg, #ff9900 0%, #ff5500 100%)" },
];

const PROMO_GAMES = [
  { name: "COCK FIGHT", icon: "🐓", gradient: "linear-gradient(to right, #4568dc, #b06ab3)" },
  { name: "LIGHTNING", icon: "⚡", gradient: "linear-gradient(to right, #43c6ac, #191654)" },
  { name: "MARBLE RUN", icon: "🔮", gradient: "linear-gradient(to right, #ff9966, #ff5e62)" },
  { name: "SEXIEST DEALERS", icon: "👙", gradient: "linear-gradient(to right, #ea00d9, #711c91)" },
  { name: "AVIATOR MULTIPLIER", icon: "✈️", gradient: "linear-gradient(to right, #ff007f, #800040)" },
  { name: "MINES CRASH", icon: "💣", gradient: "linear-gradient(to right, #00c6ff, #0072ff)" },
];

export default function GameLobbies() {
  const [activeTab, setActiveTab] = useState("CRICKET");

  const getWhatsAppLink = (lobbyName: string) => {
    const text = encodeURIComponent(`Hi! I want to access the ${lobbyName} lobby/game on Tiger365.`);
    return `${SITE_CONFIG.whatsappLink}?text=${text}`;
  };

  return (
    <section className={`section-padding ${styles.section}`} id="lobbies">
      <div className="container" style={{ padding: 0 }}>
        
        {/* Horizontal Category Slider Bar */}
        <div className={styles.categorySlider}>
          {CATEGORY_TABS.map((tab) => (
            <button
              key={tab.name}
              className={`${styles.categoryTab} ${activeTab === tab.name ? styles.activeTab : ""}`}
              onClick={() => setActiveTab(tab.name)}
            >
              <span>{tab.icon}</span>
              <span>{tab.name}</span>
              {tab.count !== null && <span className={styles.tabBadge}>{tab.count}</span>}
            </button>
          ))}
        </div>

        {/* Lobbies Content */}
        <h3 className={styles.categoryTitle}>Slot & Casino Lobbies</h3>
        
        {/* First Row Slider */}
        <div className={styles.horizontalSlider}>
          {CASINO_SLIDER_ROW_1.map((game, index) => (
            <a
              key={`row1-${index}`}
              href={getWhatsAppLink(game.name)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sliderCard}
              style={{ background: game.gradient }}
            >
              <span className={styles.sliderCardEmoji}>{game.icon}</span>
              <span className={styles.sliderCardName}>{game.name}</span>
            </a>
          ))}
        </div>

        {/* Second Row Slider */}
        <div className={styles.horizontalSlider}>
          {CASINO_SLIDER_ROW_2.map((game, index) => (
            <a
              key={`row2-${index}`}
              href={getWhatsAppLink(game.name)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sliderCard}
              style={{ background: game.gradient }}
            >
              <span className={styles.sliderCardEmoji}>{game.icon}</span>
              <span className={styles.sliderCardName}>{game.name}</span>
            </a>
          ))}
        </div>

        {/* Promo Games Grid */}
        <h3 className={styles.categoryTitle} style={{ marginTop: "3rem" }}>Exchange Promo & Crash Games</h3>
        <div className={styles.horizontalSlider}>
          {PROMO_GAMES.map((game, index) => (
            <a
              key={`promo-${index}`}
              href={getWhatsAppLink(game.name)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sliderCard}
              style={{ background: game.gradient }}
            >
              <span className={styles.sliderCardEmoji}>{game.icon}</span>
              <span className={styles.sliderCardName}>{game.name}</span>
            </a>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: "4rem" }}>
          <WhatsAppButton className={styles.centralCta}>
            💬 Join Lobbies via WhatsApp 💬
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
