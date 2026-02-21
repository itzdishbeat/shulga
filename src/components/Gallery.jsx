import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import img1 from "../assets/photos/IMG_2552.jpg";
import img2 from "../assets/photos/IMG_2632.jpg";
import img3 from "../assets/photos/IMG_2713.jpg";
import img4 from "../assets/photos/IMG_2716.jpg";
import img5 from "../assets/photos/IMG_2718.jpg";
import img6 from "../assets/photos/IMG_3410.jpg";
import img7 from "../assets/photos/IMG_3482.jpg";
import img8 from "../assets/photos/IMG_3787.jpg";
import img9 from "../assets/photos/IMG_4003.jpg";
import img10 from "../assets/photos/IMG_4221.jpg";

const images = [
  { id: 1, url: img1, title: "Праздник", size: "large" },
  { id: 2, url: img2, title: "Огни ночи", size: "medium" },
  { id: 3, url: img3, title: "Мгновения", size: "small" },
  { id: 4, url: img4, title: "Пульс", size: "medium" },
  { id: 5, url: img5, title: "Вайб", size: "small" },
  { id: 6, url: img6, title: "Сцена", size: "wide" },
  { id: 7, url: img7, title: "Атмосфера", size: "medium" },
  { id: 8, url: img8, title: "Событие", size: "small" },
  { id: 9, url: img9, title: "Движение", size: "wide" },
  { id: 10, url: img10, title: "Энергия", size: "large" },
];

const Gallery = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="gallery-container">
      <div className="bento-grid">
        {images.map((img) => (
          <motion.div
            key={img.id}
            layoutId={`img-${img.id}`}
            className={`grid-item ${img.size}`}
            onClick={() => setSelectedId(img.id)}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={img.url} alt="Gallery" loading="lazy" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`img-${selectedId}`}
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images.find((i) => i.id === selectedId).url}
                alt="Full view"
              />
              <button className="close-btn" onClick={() => setSelectedId(null)}>
                <X />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          grid-auto-rows: 200px;
          grid-auto-flow: dense;
          gap: 20px;
        }

        .grid-item {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
        }

        .grid-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .grid-item:hover img {
          transform: scale(1.1);
        }

        .item-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .grid-item:hover .item-overlay {
          opacity: 1;
        }

        /* Unusual Grid Spanning */
        .large {
          grid-row: span 2;
          grid-column: span 2;
        }
        .medium {
          grid-row: span 2;
        }
        .wide {
          grid-column: span 2;
        }

        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 40px;
        }

        .lightbox-content {
          max-width: 90%;
          max-height: 90%;
          border-radius: 24px;
          overflow: hidden;
          position: relative;
        }

        .lightbox-content img {
          width: 100%;
          height: auto;
          display: block;
        }

        .close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: var(--glass-bg);
          border: none;
          color: white;
          padding: 10px;
          border-radius: 50%;
          cursor: pointer;
          backdrop-filter: blur(10px);
        }

        @media (max-width: 768px) {
          .large,
          .medium,
          .wide {
            grid-row: span 1;
            grid-column: span 1;
          }
          .bento-grid {
            grid-auto-rows: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;
