import React, { useEffect, useRef } from 'react';
import { createTimeline } from '../../lib/anime';

export default function Map() {
  const sectionRef = useRef(null);
  const bannerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = createTimeline({
              defaults: {
                ease: 'outExpo',
                duration: 1000,
              }
            });

            tl.add(bannerRef.current, {
              opacity: [0, 1],
              translateY: [20, 0],
              delay: 100,
            })
            .add(mapRef.current, {
              opacity: [0, 1],
              scale: [0.98, 1],
            }, '-=800');

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} aria-label="Mapa de ubicación de ICAPS Veracruz" className="section" style={{ padding: '0' }}>
      <div style={{ width: '100%', height: '400px', display: 'flex', flexDirection: 'column' }}>
        <div ref={bannerRef} style={{ backgroundColor: 'var(--primary)', color: 'var(--surface)', padding: '1.5rem', textAlign: 'center', opacity: 0 }}>
          <h3 style={{ margin: 0, fontFamily: 'Outfit, sans-serif' }}>Visítanos en Sede Madero</h3>
          <p style={{ margin: '0.5rem 0 0 0', opacity: 0.9 }}>
            Mariano Arista No. 966, Esquina Av. Francisco I. Madero, Col. Centro, Veracruz, Ver.
          </p>
        </div>
        {/* Placeholder iframe for map */}
        <div ref={mapRef} style={{ flexGrow: 1, opacity: 0 }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.106427329241!2d-96.13600000000002!3d19.197000000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDExJzQ5LjIiTiA5NsKwMDgnMDkuNiJX!5e0!3m2!1ses!2smx!4v1600000000000!5m2!1ses!2smx" 
            width="100%" 
            height="100%" 
            style={{ border: 0, height: '100%' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación ICAPS Sede Madero"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
