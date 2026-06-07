"use client";
import React, { useState } from "react";
import styles from "./SportsSidebar.module.css";

const SPORTS_LIST = [
  { name: "HOME", icon: "🏠" },
  { name: "IPL 2026", icon: "🏆" },
  { name: "CRICKET", icon: "🏏" },
  { name: "FOOTBALL", icon: "⚽" },
  { name: "TENNIS", icon: "🎾" },
  { name: "ESPORTS", icon: "🎮" },
  { name: "MIXED MARTIAL ARTS", icon: "🥊" },
  { name: "GAELIC GAMES", icon: "🎯" },
  { name: "VOLLEYBALL", icon: "🏐" },
  { name: "HANDBALL", icon: "🤾" },
  { name: "AUSTRALIAN RULES", icon: "🏈" },
  { name: "ICE HOCKEY", icon: "🏒" },
  { name: "BASKETBALL", icon: "🏀" },
  { name: "BASEBALL", icon: "⚾" },
  { name: "AMERICAN FOOTBALL", icon: "🏈" }
];

export default function SportsSidebar() {
  const [activeSport, setActiveSport] = useState("HOME");

  const handleSportClick = (sportName: string) => {
    setActiveSport(sportName);
    // Smooth scroll to libraries / exchange lists if needed
    const element = document.getElementById("lobbies") || document.getElementById("live-exchange");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTitle}>All Sports</div>
      <ul className={styles.sidebarList}>
        {SPORTS_LIST.map((sport) => (
          <li
            key={sport.name}
            className={`${styles.sidebarItem} ${activeSport === sport.name ? styles.sidebarItemActive : ""}`}
            onClick={() => handleSportClick(sport.name)}
          >
            <span className={styles.sidebarIcon}>{sport.icon}</span>
            <span>{sport.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
