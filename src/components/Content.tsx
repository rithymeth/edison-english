import React, { useEffect } from 'react';
import { loadSlim } from "tsparticles-slim";
import { tsParticles } from "tsparticles-engine";
import { particlesConfig } from './particlesConfig';
import './Content.css';

const Content: React.FC = () => {
  useEffect(() => {
    const loadParticles = async () => {
      try {
        await loadSlim(tsParticles);
        await tsParticles.load("tsparticles", particlesConfig);
      } catch (error) {
        console.error("Error loading particles:", error);
      }
    };
    loadParticles();
  }, []);

  return (
    <div className="content">
      <div id="tsparticles" className="particles-background" />
      <div className="content-container">
        <div className="content-left">
          <h2 className="animated-title">Welcome to ICG GAMING</h2>
          <p>ICG GAMING is White Label and Software Solutions for online casino and bookmaker website. At ICG Gaming, we have years of experience starting and growing successful online casino businesses.</p>
          <a href="https://t.me/c/2126586273/88" target="_blank" rel="noopener noreferrer">
            <button className="cta-button">Get Started</button>
          </a>
        </div>
        <div className="content-right">
          <div className="image-container">
            <img src="./images/Edison-English.png" alt="ICG Gaming Platform Preview" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
