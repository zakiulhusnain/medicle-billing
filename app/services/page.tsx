'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import styles from './services.module.css'

function useIntersection(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}


export default function ServicesPage() {
  const specialtiesRef = useIntersection()

  const specialties = [
    { icon: '🦴', name: 'Orthopedic' },
    { icon: '🧠', name: 'Neurosurgery' },
    { icon: '🏥', name: 'Ambulatory Surgery' },
    { icon: '🔬', name: 'Oncology' },
    { icon: '🚑', name: 'Urgent Care' },
    { icon: '🔍', name: 'Pathology' },
    { icon: '✂️', name: 'General Surgery' },
    { icon: '🧴', name: 'Dermatology' },
    { icon: '🖼️', name: 'Radiology' },
    { icon: '🍽️', name: 'Gastroenterology' },
    { icon: '❤️', name: 'Cardiology' },
    { icon: '🩺', name: 'Urology' },
    { icon: '🫁', name: 'Thoracic Surgery' },
    { icon: '👶', name: 'Ob Gyn' },
    { icon: '🧪', name: 'Clinical Lab' },
    { icon: '🩸', name: 'Hematology' },
    { icon: '🏢', name: 'Medical Clinics' },
    { icon: '⚕️', name: 'FQHC' },
    { icon: '🚑', name: 'Traumatology' },
    { icon: '🤝', name: 'Rheumatology' },
    { icon: '🦿', name: 'Prostheses' },
    { icon: '💊', name: 'Immunology' },
    { icon: '♿', name: 'For Disabled' },
    { icon: '🏃', name: 'Physical Therapy' },
    { icon: '🧬', name: 'Toxicology' },
    { icon: '🏨', name: 'Nursing Home' },
    { icon: '👧', name: 'Pediatric' },
    { icon: '🧬', name: 'Molecular Labs' },
    { icon: '👁️', name: 'Ophthalmology' },
    { icon: '🦠', name: 'Infectious Disease' },
  ]

  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <div className={styles.heroBgCircle1}></div>
            <div className={styles.heroBgCircle2}></div>
          </div>
          <div className={`container ${styles.heroContent}`}>
            <h1>Our Specialties</h1>
            <p className={styles.heroSubtitle}>
              MedCare MSO specializes in providing comprehensive medical billing services to practices of all sizes in more than 50 specialties. Our dedicated team understands the complexities of medical billing and is committed to maximizing your revenue and minimizing administrative burdens.
            </p>
          </div>
        </section>

        {/* SECTION TITLE */}
        <section className={styles.titleSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Explore Our Full Spectrum of <span>Medical Billing Expertise</span></h2>
          </div>
        </section>

        {/* SPECIALTIES GRID */}
        <section className={styles.specialtiesSection} ref={specialtiesRef.ref}>
          <div className="container">
            <div className={styles.specialtiesGrid}>
              {specialties.map((specialty, i) => (
                <div 
                  key={i} 
                  className={`${styles.specialtyCard} ${specialtiesRef.visible ? `animate-fade-up` : ''}`}
                  style={{
                    animationDelay: `${(i % 5) * 0.1}s`,
                    opacity: specialtiesRef.visible ? 1 : 0
                  }}
                >
                  <div className={styles.specialtyIcon}>{specialty.icon}</div>
                  <h3>{specialty.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaBox}>
              <h2>Ready to Optimize Your Billing?</h2>
              <p>Let MedCare MSO handle your medical billing needs so you can focus on patient care.</p>
              <div className={styles.ctaButtons}>
                <Link href="/" className={styles.ctaButtonPrimary}>Schedule a free Demo</Link>
                <div className={styles.contactInfo}>
                  <p><strong>CALL US AT</strong></p>
                  <p className={styles.phone}>800-640-6409</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
