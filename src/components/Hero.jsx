import { useState, useEffect } from 'react';
import { api } from '../api/service';

const NAME = 'Prof. Elvis Asare-Bediako';
const TITLE = 'The Vice-Chancellor (VC) of the University of Energy and Natural Resources (UENR) ';

export default function Hero() {
  const [profile, setProfile] = useState(null);
  const [cv, setCv] = useState(null);

  useEffect(() => {
    api.getProfile().then(setProfile).catch(() => setProfile({ about_text: '', hero_image: null }));
    api.getCV().then(setCv).catch(() => setCv({ url: null }));
  }, []);

  if (!profile) return <section className="hero"><div className="hero-loading">Loading…</div></section>;

  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-dots" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-label"></p>
          <h1 className="hero-name">{NAME}</h1>
          <p className="hero-title">{TITLE}</p>
          <p className="hero-org"> </p>
          <p className="hero-desc">
            
          </p>
          {cv?.url && (
            <a href={cv.url} target="_blank" rel="noopener noreferrer" className="hero-cta">
              {cv.label || 'Download CV'}
            </a>
          )}
        </div> 
        <div className="hero-image-wrap">
          {profile.hero_image ? (
            <img src={profile.hero_image} alt={NAME} className="hero-image" />
          ) : (
            <div className="hero-image-placeholder">
              <span className="hero-initials">
                {NAME.split(' ').map((n) => n[0]).filter(Boolean).slice(0, 3).join('')}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
