"use client";
import React from "react";
import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";
import { SITE_CONFIG } from "@/config/constants";
import styles from "./InfoSection.module.css";

export default function InfoSection() {
  return (
    <section className={`section-padding ${styles.infoSection}`} id="about">
      <div className="container">
        
        {/* ==========================================
            SECTION 1: INTRODUCTION TO TIGER365
            ========================================== */}
        <div className={styles.introBox}>
          <h2 className={styles.introTitle}>
            Introduction to Tiger365
          </h2>
          <div className={styles.introTextWrapper}>
            <p className={styles.introParagraph}>
              Online betting has seen a massive surge, and having a secure, reliable account is critical for an enjoyable experience. **Tiger365** stands out as one of India's premier, fully responsive betting exchange platforms. Designed with cutting-edge software, Tiger365 gives users a safe, fast, and highly exciting betting environment.
            </p>
            <p className={styles.introParagraph}>
              Before you register, it is helpful to understand how Tiger365 operates. Unlike traditional betting websites that have cumbersome verify procedures, Tiger365 leverages the simplicity of WhatsApp to issue verified betting IDs. This ensures that you can start playing within minutes, keeping your personal credentials completely safe and private.
            </p>
            <p className={styles.introParagraph}>
              Your official Tiger365 ID acts as a digital ledger that records your funds, bet history, live logs, and active sports books. Whether you are a fan of IPL cricket, international soccer, live roulette, or virtual card games, the platform maintains a structured, fair-play standard for every user.
            </p>
          </div>

          <div className={styles.btnRowOne}>
            <WhatsAppButton className="btn-red-action">
              📲 Create Tiger365 ID
            </WhatsAppButton>
            <WhatsAppButton className="btn-green-action">
              💬 Message on WhatsApp
            </WhatsAppButton>
            <WhatsAppButton className="btn-gray-action">
              📞 Official Tiger365 Support
            </WhatsAppButton>
          </div>
        </div>

        {/* ==========================================
            SECTION 2: HOW TIGER365 WORKS
            ========================================== */}
        <div className={styles.idSectionBox}>
          <div className={styles.twoColumnGrid}>
            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <Image
                  src={SITE_CONFIG.images.heroBanner}
                  alt="How Tiger365 Works"
                  width={1000}
                  height={500}
                  className={styles.idImg}
                />
              </div>
            </div>

            <div className={styles.textColumn}>
              <div className={styles.headerHighlight}>
                <h3>How Tiger365 Works</h3>
              </div>
              <p className={styles.idLeadText}>
                Getting started with Tiger365 is incredibly straightforward. Follow this quick workflow to generate your account and place your first bet:
              </p>
              
              <ul className={styles.checklist}>
                <li>
                  <span className={styles.bulletCheck}>1.</span>
                  <span><strong>Initiate on WhatsApp –</strong> Click on any of our CTA buttons to start a WhatsApp chat with our verified Tiger365 assistant.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>2.</span>
                  <span><strong>Instant ID Setup –</strong> Provide basic details to setup your nickname and account. Your login ID and security password will be generated in under 60 seconds.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>3.</span>
                  <span><strong>Add Funds Securely –</strong> Transfer your deposit (starting at just ₹100) via UPI, bank transfer, or standard mobile wallets. Share the screenshot to get immediate chips loaded.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>4.</span>
                  <span><strong>Login and Play –</strong> Use the official login link provided by the support team, enter your credentials, and start placing bets on live events.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>5.</span>
                  <span><strong>24/7 Super-fast Payout –</strong> Ready to cash out? Simply message the WhatsApp helpdesk, state your requested amount, and watch it transfer to your bank account within minutes!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ==========================================
            SECTION 3: KEY ADVANTAGES OF TIGER365
            ========================================== */}
        <div className={styles.idSectionBox}>
          <div className={styles.twoColumnGrid}>
            <div className={styles.textColumn}>
              <div className={styles.headerHighlight}>
                <h3>Key Advantages of Tiger365</h3>
              </div>
              <p className={styles.idLeadText}>
                Why do thousands of Indian bettors choose Tiger365 as their go-to betting exchange? Here are the core benefits:
              </p>
              
              <ul className={styles.checklist}>
                <li>
                  <span className={styles.bulletCheck}>✓</span>
                  <span><strong>Direct Personal Support –</strong> Avoid dealing with automated bots. Get real-human assistance directly through WhatsApp, available day and night.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>✓</span>
                  <span><strong>Premium Live Odds –</strong> Get access to unmatched odds in cricket bookmaker markets, fancy runs, soccer match-winners, and tennis sets.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>✓</span>
                  <span><strong>Zero Payout Delays –</strong> Your winnings are settled and ready for withdrawal immediately after the match. Withdrawals are processed 24/7.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>✓</span>
                  <span><strong>Unified Dashboard –</strong> Keep track of your betting history, active slips, wins, and losses on a singular mobile-friendly interface.</span>
                </li>
              </ul>
            </div>

            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <Image
                  src={SITE_CONFIG.images.registrationBanner}
                  alt="Key Advantages of Tiger365"
                  width={1000}
                  height={500}
                  className={styles.idImg}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            SECTION 4: INSIDE TIGER365 EXCHANGE
            ========================================== */}
        <div className={styles.idSectionBox}>
          <div className={styles.twoColumnGrid}>
            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <Image
                  src={SITE_CONFIG.images.banners.banner1.src}
                  alt="Inside Tiger365 Exchange"
                  width={SITE_CONFIG.images.banners.banner1.width}
                  height={SITE_CONFIG.images.banners.banner1.height}
                  className={styles.idImg}
                />
              </div>
            </div>

            <div className={styles.textColumn}>
              <div className={styles.headerHighlight}>
                <h3>Inside Tiger365 Exchange</h3>
              </div>
              <p className={styles.idLeadText}>
                The Tiger365 portal is loaded with high-stakes casino games, live sports fields, and unique predictions:
              </p>
              
              <ul className={styles.checklist}>
                <li>
                  <span className={styles.bulletCheck}>•</span>
                  <span><strong>Sports Exchange –</strong> Bet live with dynamic backing and laying on Cricket, Tennis, Football, Kabaddi, and Esports.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>•</span>
                  <span><strong>Live Casino Rooms –</strong> Play real-time Blackjack, Roulette, Baccarat, Teen Patti, and Andar Bahar with real dealers.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>•</span>
                  <span><strong>Slot & Crash Games –</strong> Spin classic slot machines or test your reflexes with fast crash games like Aviator, Mines, and Limbo.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>•</span>
                  <span><strong>Fair-Play Certification –</strong> Rest assured that all games are powered by verified random-number generation (RNG) and live video feeds.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ==========================================
            SECTION 5: GET STARTED TODAY
            ========================================== */}
        <div className={styles.idSectionBox}>
          <div className={styles.introBox} style={{ marginBottom: 0, marginTop: '2rem' }}>
            <h3 className={styles.introTitle} style={{ fontSize: '2rem' }}>
              Join Tiger365 Today
            </h3>
            <p className={styles.introParagraph}>
              Ready to elevate your online betting journey? Tiger365 makes the process completely seamless, private, and secure. Enjoy the best gaming layouts, verified support channels, and direct payouts.
            </p>
            <p className={styles.introParagraph} style={{ fontWeight: 'bold', color: 'var(--primary)' }}>
              Get your Tiger365 ID now and claim a 400% Welcome Bonus on your first deposit!
            </p>
            <div className={styles.btnRowTwo}>
              <WhatsAppButton className={styles.largeChatBtn}>
                💬 Chat on WhatsApp for Instant Tiger365 ID
              </WhatsAppButton>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
