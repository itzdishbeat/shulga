import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PenTool, Heart, Lock, Eye } from "lucide-react";

const LetterSection = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="letter-wrapper glass-card">
      {/* Privacy Mask Overlay */}
      <AnimatePresence>
        {!isRevealed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="privacy-overlay"
          >
            <div className="privacy-content">
              <Lock size={40} className="gold-text" />
              <h4>Личное послание</h4>
              <p>Это сообщение скрыто для защиты приватности.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsRevealed(true)}
                className="reveal-btn"
              >
                <Eye size={18} />
                <span>Раскрыть</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={{ filter: isRevealed ? "blur(0px)" : "blur(15px)" }}
        transition={{ duration: 0.5 }}
        className="letter-inner"
      >
        <div className="letter-header">
          <PenTool size={24} className="gold-text" />
          <h3>Чисто от себя</h3>
        </div>

        <div className="letter-body">
          <p className="placeholder-text">
            Итак, Санька. Я очень рад, что Даня познакомил нас, сдружил, и
            теперь мы находимся в одной компании. Ты правда очень крутой и
            приятный парень, с тобой классно и комфортно проводить время, и я
            надеюсь, что конец 11 класса – не конец нашего с тобой общения. В
            любом случае, я всегда рад тебя видеть, и надеюсь, что мы будем
            видеться и дальше, несмотря ни на что. В общем, с днюхой тебя,
            Шульга! Желаю тебе всего самого наилучшего, здоровья, счастья,
            успехов во всем, и чтобы все твои мечты сбывались! Обнимаю крепко!
            ❤️
          </p>
        </div>

        <div className="letter-footer">
          <Heart size={20} className="neon-text" />
        </div>
      </motion.div>

      <style jsx>{`
        .letter-wrapper {
          max-width: 900px;
          margin: 0 auto;
          padding: 80px 40px;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .privacy-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(13, 13, 18, 0.4);
          backdrop-filter: blur(5px);
        }

        .privacy-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          padding: 30px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .privacy-content h4 {
          font-size: 1.5rem;
          color: var(--text-main);
          letter-spacing: 1px;
        }

        .privacy-content p {
          color: var(--text-dim);
          font-size: 0.9rem;
        }

        .reveal-btn {
          margin-top: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--accent-primary);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 0 20px rgba(138, 43, 226, 0.3);
        }

        .letter-inner {
          width: 100%;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 40px;
          transition: filter 0.5s ease;
        }

        .letter-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }

        .letter-header h3 {
          font-size: 1.5rem;
          color: var(--text-main);
          letter-spacing: 2px;
        }

        .letter-body {
          padding: 40px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px dashed var(--glass-border);
          border-radius: 20px;
          min-height: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .placeholder-text {
          color: var(--text-dim);
          font-size: 1.2rem;
          line-height: 1.8;
          font-style: italic;
          max-width: 600px;
        }

        .letter-footer {
          display: flex;
          justify-content: center;
          animation: float 3s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .letter-wrapper {
            padding: 40px 20px;
          }
          .letter-body {
            padding: 20px;
          }
          .placeholder-text {
            font-size: 1rem;
          }
          .privacy-content {
            width: 90%;
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default LetterSection;
