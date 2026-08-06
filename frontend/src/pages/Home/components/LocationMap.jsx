// LocationMap.jsx
import React, { useState, lazy, Suspense } from 'react';
import styles from "../../../styles/HomeStyles/LocationMap.module.css";

// Lazy load CampusMap3D to break circular dependency
const CampusMap3D = lazy(() => import('./CampusMap3D'));

const LocationMap = () => {
  const [use3D, setUse3D] = useState(false);

  return (
    <section className={styles.mapSection}>
      <div className={styles.overlay} />
      <div className="container">
        <div className={styles.mapTitle}>
          <h2 className={styles.mapHeading}>Find <span className={styles.mapGradient}>Us</span></h2>
          <p className={styles.mapDescription}>
            Visit us at the Institute of Space Technology, Islamabad
          </p>
        </div>

        <div className={styles.toggleContainer}>
          <button
            className={`${styles.toggleBtn} ${!use3D ? styles.active : ''}`}
            onClick={() => setUse3D(false)}
          >
            📍 Map View
          </button>
          <button
            className={`${styles.toggleBtn} ${use3D ? styles.active : ''}`}
            onClick={() => setUse3D(true)}
          >
            🌍 3D View
          </button>
        </div>

        {use3D ? (
          <Suspense fallback={<div className={styles.loading}>Loading 3D Campus Map...</div>}>
            <CampusMap3D />
          </Suspense>
        ) : (
          <div className={styles.mapContainer}>
            <iframe
              src="https://maps.google.com/maps?q=33.5194,73.1775&z=17&output=embed"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NCGSA Location Map"
              className={styles.mapIframe}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default LocationMap;