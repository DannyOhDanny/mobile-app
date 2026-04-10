import { Globe, Zap, Shield, Users, TrendingUp, Award } from 'lucide-react';
import styles from './About.module.css';

export const About = () => {
  return (
    <div className={styles.about}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>About MarketFlow</h1>
          <p>Your trusted online marketplace for quality goods worldwide</p>
        </div>
      </section>

      <section className={styles.legend}>
        <div className={styles.container}>
          <div className={styles.legendText}>
            <h2>Our Story</h2>
            <p>
              MarketFlow was founded in 2024 with a simple belief:{' '}
              <strong>shopping should feel like discovery, not a chore</strong>.
              We saw thousands of talented sellers struggling to reach buyers
              across fragmented platforms — scattered marketplaces, social media
              shops, and outdated classifieds.
            </p>
            <p>
              We built MarketFlow to become the central hub where quality
              products meet delighted customers. Today, over{' '}
              <strong>50,000+ active sellers</strong> use MarketFlow to list
              their items, and millions of shoppers find exactly what they need
              — from electronics and fashion to home decor and collectibles.
            </p>
          </div>
          <div className={styles.legendImage}>
            <img
              src="https://picsum.photos/id/20/500/400"
              alt="MarketFlow warehouse and delivery illustration"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={styles.container}>
          <h2>MarketFlow by numbers</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <Users size={40} color="#6366f1" />
              <span className={styles.statValue}>50K+</span>
              <span className={styles.statLabel}>Active sellers</span>
            </div>
            <div className={styles.statCard}>
              <TrendingUp size={40} color="#6366f1" />
              <span className={styles.statValue}>1.2M</span>
              <span className={styles.statLabel}>Products sold</span>
            </div>
            <div className={styles.statCard}>
              <Globe size={40} color="#6366f1" />
              <span className={styles.statValue}>120+</span>
              <span className={styles.statLabel}>Countries shipped</span>
            </div>
            <div className={styles.statCard}>
              <Award size={40} color="#6366f1" />
              <span className={styles.statValue}>99%</span>
              <span className={styles.statLabel}>Customer satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <h2>Why choose MarketFlow?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <Zap size={32} color="#6366f1" />
              <h3>Lightning fast delivery</h3>
              <p>
                Express shipping with real-time tracking. Most orders arrive
                within 2–3 business days.
              </p>
            </div>
            <div className={styles.feature}>
              <Shield size={32} color="#6366f1" />
              <h3>Secure payments & buyer protection</h3>
              <p>
                Your transactions are encrypted and protected by our 100%
                money-back guarantee.
              </p>
            </div>
            <div className={styles.feature}>
              <Globe size={32} color="#6366f1" />
              <h3>Global marketplace</h3>
              <p>
                Shop from thousands of international brands and local artisans,
                all in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.quote}>
        <div className={styles.container}>
          <blockquote>
            “MarketFlow completely changed the way I shop online. The variety,
            speed, and support are unmatched.”
          </blockquote>
          <cite>— Emma Rodriguez, verified buyer</cite>
        </div>
      </section>

      <section className={styles.textBlock}>
        <div className={styles.container}>
          <h2>Built for buyers and sellers alike</h2>
          <div className={styles.textColumns}>
            <p>
              MarketFlow started as a small local delivery experiment in
              Brooklyn. Today, we're a global platform connecting millions of
              shoppers with thousands of independent sellers. Our technology
              handles everything from inventory sync to customs documentation,
              making cross‑border trade seamless.
            </p>
            <p>
              We believe that great products deserve great visibility. That's
              why every item on MarketFlow is curated by our team and reviewed
              by real customers. Join us — and discover the joy of smart,
              stress‑free online shopping.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
