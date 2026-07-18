// src/components/MediaGridModal.jsx
import React, { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

export default function MediaGridModal({ title, items, onClose }) {
  const [activeIndex, setActiveIndex] = useState(null); // null = grid view, number = lightbox open

  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length]
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length]
  );

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") {
        activeIndex === null ? onClose() : setActiveIndex(null);
      } else if (activeIndex !== null && e.key === "ArrowLeft") {
        showPrev();
      } else if (activeIndex !== null && e.key === "ArrowRight") {
        showNext();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, onClose, showPrev, showNext]);

  const active = activeIndex !== null ? items[activeIndex] : null;

  return (
    <div className="mg-overlay" onClick={onClose}>
      <style>{CSS}</style>

      <div className="mg-panel" onClick={(e) => e.stopPropagation()}>
        <div className="mg-header">
          <h2>{title}</h2>
          <button className="mg-icon-btn" onClick={onClose} aria-label="Close gallery">
            <X size={18} />
          </button>
        </div>

        {active === null ? (
          <div className="mg-grid">
            {items.map((item, i) => (
              <button
                key={item.src}
                className="mg-thumb"
                onClick={() => setActiveIndex(i)}
                aria-label={item.caption || `Open item ${i + 1}`}
              >
                {item.type === "video" ? (
                  <>
                    <img src={item.poster} alt="" />
                    <span className="mg-play"><Play size={16} fill="currentColor" /></span>
                  </>
                ) : (
                  <img src={item.src} alt={item.caption || ""} loading="lazy" />
                )}
              </button>
            ))}
          </div>
        ) : (
          <div className="mg-lightbox">
            <button className="mg-nav mg-nav--prev" onClick={showPrev} aria-label="Previous">
              <ChevronLeft size={22} />
            </button>

            <div className="mg-lightbox-media">
              {active.type === "video" ? (
                <video src={active.src} poster={active.poster} controls autoPlay />
              ) : (
                <img src={active.src} alt={active.caption || ""} />
              )}
              {active.caption && <p className="mg-caption">{active.caption}</p>}
            </div>

            <button className="mg-nav mg-nav--next" onClick={showNext} aria-label="Next">
              <ChevronRight size={22} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const CSS = `
.mg-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.72);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 24px;
  animation: mg-fade-in 0.18s ease both;
}
@keyframes mg-fade-in { from { opacity: 0; } to { opacity: 1; } }

.mg-panel {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  width: 100%;
  max-width: 640px;
  max-height: 85vh;
  overflow-y: auto;
  animation: mg-rise-in 0.2s ease both;
}
@keyframes mg-rise-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

.mg-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 18px;
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  background: var(--surface);
  z-index: 1;
}
.mg-header h2 {
  margin: 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: var(--text);
}
.mg-icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: none;
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease;
}
.mg-icon-btn:hover { color: var(--text); border-color: var(--accent-personal); }

.mg-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3px;
  padding: 3px;
}
.mg-thumb {
  position: relative;
  aspect-ratio: 1 / 1;
  padding: 0;
  border: none;
  background: var(--surface-2);
  cursor: pointer;
  overflow: hidden;
}
.mg-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.25s ease;
}
.mg-thumb:hover img { transform: scale(1.05); }
.mg-play {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.55);
  color: #fff;
  border-radius: 50%;
}

.mg-lightbox {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
}
.mg-lightbox-media {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-width: 0;
}
.mg-lightbox-media img,
.mg-lightbox-media video {
  max-width: 100%;
  max-height: 60vh;
  border-radius: 6px;
  display: block;
}
.mg-caption {
  margin: 0;
  font-size: 12.5px;
  color: var(--text-muted);
  text-align: center;
}
.mg-nav {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 50%;
  color: var(--text);
  cursor: pointer;
  transition: border-color 0.2s ease;
}
.mg-nav:hover { border-color: var(--accent-personal); }

@media (max-width: 520px) {
  .mg-overlay { padding: 0; }
  .mg-panel { max-height: 100vh; height: 100%; border-radius: 0; max-width: none; }
  .mg-nav { width: 30px; height: 30px; }
}
`;