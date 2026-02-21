import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import {
  Play,
  Volume2,
  Maximize,
  Film,
  Music as MusicIcon,
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import video1 from "../assets/videos_and_audios/asd.mp4";
import video2 from "../assets/videos_and_audios/asdasd.mp4";
import audio1 from "../assets/videos_and_audios/asdasdasd.ogg";
import video3 from "../assets/videos_and_audios/video.mp4";
import audio2 from "../assets/videos_and_audios/zxczxc.ogg";

const mediaItems = [
  {
    id: 1,
    type: "video",
    title: "Видение",
    url: video1,
    thumbnail:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop",
    icon: <Film size={20} />,
  },
  {
    id: 2,
    type: "audio",
    title: "Летние биты",
    url: audio1,
    thumbnail:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop",
    icon: <MusicIcon size={20} />,
  },
  {
    id: 3,
    type: "video",
    title: "За кулисами",
    url: video2,
    thumbnail:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1000&auto=format&fit=crop",
    icon: <Film size={20} />,
  },
  {
    id: 4,
    type: "audio",
    title: "Ночная поездка",
    url: audio2,
    thumbnail:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop",
    icon: <MusicIcon size={20} />,
  },
  {
    id: 5,
    type: "video",
    title: "Финальный штрих",
    url: video3,
    thumbnail:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1000&auto=format&fit=crop",
    icon: <Film size={20} />,
  },
];

const MediaSlider = () => {
  const [playingId, setPlayingId] = useState(null);

  return (
    <div className="slider-wrapper">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="media-swiper"
      >
        {mediaItems.map((item) => (
          <SwiperSlide key={item.id} className="media-slide">
            <div className="card-outer">
              <div
                className={`media-card glass-card ${
                  playingId === item.id ? "is-playing" : ""
                }`}
                onClick={() =>
                  setPlayingId(playingId === item.id ? null : item.id)
                }
              >
                <div className="card-media">
                  {playingId === item.id ? (
                    item.type === "video" ? (
                      <video
                        src={item.url}
                        autoPlay
                        controls
                        className="active-media"
                      />
                    ) : (
                      <div className="audio-player-active">
                        <img src={item.thumbnail} alt={item.title} />
                        <audio src={item.url} autoPlay controls />
                      </div>
                    )
                  ) : (
                    <>
                      <img src={item.thumbnail} alt={item.title} />
                      <div className="play-overlay">
                        <div className="play-btn">
                          <Play fill="white" size={32} />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="card-info">
                  <div className="card-controls">
                    <Volume2 size={16} />
                    <div className="control-bar">
                      <div className="progress" style={{ width: "40%" }}></div>
                    </div>
                    <Maximize size={16} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .slider-wrapper {
          padding: 40px 0;
          width: 100%;
        }

        .media-swiper {
          width: 100%;
          padding-top: 50px;
          padding-bottom: 50px;
        }

        .media-slide {
          background-position: center;
          background-size: cover;
          width: 400px;
          height: 500px;
        }

        .card-outer {
          padding: 20px;
          height: 100%;
        }

        .media-card {
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .card-media {
          flex: 1;
          position: relative;
          overflow: hidden;
        }

        .card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .play-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .media-card:hover .play-overlay {
          opacity: 1;
        }

        .play-btn {
          width: 80px;
          height: 80px;
          background: var(--accent-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px var(--accent-primary);
          transform: scale(0.8);
          transition: transform 0.3s ease;
        }

        .media-card:hover .play-btn {
          transform: scale(1);
        }

        .active-media {
          width: 100%;
          height: 100%;
          background: black;
          object-fit: contain;
        }

        .audio-player-active {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.8);
          gap: 20px;
        }

        .audio-player-active img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          animation: rotate 10s linear infinite;
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .audio-player-active audio {
          width: 80%;
        }

        .card-info {
          padding: 25px;
        }

        .info-top {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          color: var(--accent-secondary);
        }

        .card-controls {
          display: flex;
          align-items: center;
          gap: 15px;
          color: var(--text-dim);
        }

        .control-bar {
          flex: 1;
          height: 4px;
          background: var(--glass-border);
          border-radius: 2px;
          position: relative;
        }

        .progress {
          position: absolute;
          height: 100%;
          background: var(--accent-secondary);
          border-radius: 2px;
        }

        @media (max-width: 768px) {
          .media-slide {
            width: 85vw;
            height: 450px;
          }
        }
      `}</style>
    </div>
  );
};

export default MediaSlider;
