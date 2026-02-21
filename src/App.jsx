import React, { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Camera, Music, Video, Mail, Heart, ArrowDown } from "lucide-react";
import Gallery from "./components/Gallery";
import MediaSlider from "./components/MediaSlider";
import LetterSection from "./components/LetterSection";
import "./App.css";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="app-container">
      {/* Scroll Progress Bar */}
      <motion.div className="progress-bar" style={{ scaleX }} />

      {/* Hero Section */}
      <header className="hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-content"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="birthday-badge"
          >
            17 ЛЕТ
          </motion.div>
          <h1 className="hero-title">
            <span className="gold-text">Саньке</span> <br />
            <span className="neon-text">Шульге</span>
          </h1>
          <p className="hero-subtitle">От Колясика на Днюху!!!</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="scroll-indicator"
          >
            <ArrowDown size={32} />
          </motion.div>
        </motion.div>

        <div className="hero-background">
          <div className="glow glow-1"></div>
          <div className="glow glow-2"></div>
        </div>
      </header>

      {/* Gallery Section */}
      <section id="gallery">
        <div className="section-header">
          <Camera className="section-icon blue" />
          <h2 className="neon-text">Фоточки с легендой</h2>
        </div>
        <Gallery />
      </section>

      {/* Media Slider Section */}
      <section id="media">
        <div className="section-header">
          <Video className="section-icon gold" />
          <h2 className="gold-text">Поздравления для Шульгейза</h2>
        </div>
        <MediaSlider />
        <p className="section-note">
          ваще кружков раза в 2 больше должно быть просто пока не все записали
          :(
        </p>
      </section>

      {/* Letter Section */}
      <section id="letter">
        <div className="section-header">
          <Mail className="section-icon purple" />
          <h2 className="neon-text">Прочитай без лишних глаз</h2>
        </div>
        <LetterSection />
      </section>

      <footer>
        <p>© 2026 Создано с любовью к 17-летию Александра Шульги</p>
        <div className="footer-heart">
          <Heart size={16} fill="var(--accent-primary)" />
        </div>
      </footer>
    </div>
  );
}

export default App;
