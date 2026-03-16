import { useState, useEffect } from 'react';
import { api } from '../api/service';

export default function About() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    api.getProfile().then(setProfile).catch(() => setProfile({ about_text: '' }));
  }, []);

  if (!profile) return null;
  if (!profile.about_text?.trim()) return null;

  return (
    <section className="section about" id="about">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <p className="about-text">{profile.about_text}</p>
        </div>
      </div>
    </section>
  );
}
