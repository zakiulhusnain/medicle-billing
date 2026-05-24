'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './page.module.css'

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

function Counter({ end, suffix = '', visible }: { end: number, suffix?: string, visible: boolean }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!visible) return
    let start = 0
    const step = end / 60
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 20)
    return () => clearInterval(timer)
  }, [visible, end])
  return <span>{count}{suffix}</span>
}

export default function Home() {
  const statsRef = useIntersection()
  const servRef = useIntersection()
  const whyRef = useIntersection()
  const ctaRef = useIntersection()

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
            <div className={`${styles.heroText} animate-fade-left`}>
              <div className="section-badge">AI-Powered Medical Billing</div>
              <h1>Maximize Revenue with <span>MedCare MSO</span></h1>
              <p>Streamline your revenue cycle, reduce claim denials, and maximize reimbursements with our AI-powered medical billing solutions designed for modern healthcare providers.</p>
              <div className={styles.heroCtas}>
                <Link href="/services" className="btn-primary">Explore Services →</Link>
                <Link href="/about" className="btn-outline">Learn More</Link>
              </div>
              <div className={styles.heroTrust}>
                <div className={styles.trustItem}><strong>1,000+</strong><span>Healthcare Providers</span></div>
                <div className={styles.trustDivider}></div>
                <div className={styles.trustItem}><strong>98%</strong><span>Collection Rate</span></div>
                <div className={styles.trustDivider}></div>
                <div className={styles.trustItem}><strong>24/7</strong><span>AI Operations</span></div>
              </div>
            </div>
            <div className={`${styles.heroImage} animate-fade-right`}>
              <Image
                src="/medicalbilling-1.webp"
                alt="MedCare MSO Medical Billing"
                width={540}
                height={420}
                priority
                style={{ objectFit: 'contain', borderRadius: '20px' }}
              />
              <div className={`${styles.floatBadge} ${styles.floatBadge1} animate-float`}>✓ HIPAA Compliant</div>
              <div className={`${styles.floatBadge} ${styles.floatBadge2} animate-float delay-300`}>⚡ 98% Accuracy</div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className={styles.stats}>
          <div className={`container ${styles.statsGrid}`} ref={statsRef.ref}>
            {[
              { end: 98, suffix: '%', label: 'Collection Rate', icon: '📈' },
              { end: 1000, suffix: '+', label: 'Active Clients', icon: '🏥' },
              { end: 15, suffix: '+', label: 'Years Experience', icon: '⭐' },
              { end: 80, suffix: '%', label: 'Faster Processing', icon: '⚡' },
            ].map((s, i) => (
              <div key={i} className={`${styles.statCard}`} style={{ opacity: statsRef.visible ? 1 : 0, animationDelay: `${i * 100}ms` }}>
                <div className={styles.statIcon}>{s.icon}</div>
                <div className={styles.statNum}>
                  <Counter end={s.end} suffix={s.suffix} visible={statsRef.visible} />
                </div>
                <div className={styles.statLabel2}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className={styles.servicesSection}>
          <div className="container" ref={servRef.ref}>
            <div className={styles.sectionHead}>
              <div>
                <div className="section-badge">What We Offer</div>
                <h2 className="section-title">Comprehensive <span>Billing Solutions</span></h2>
                <p className="section-subtitle">From claim submission to payment posting, we handle every step with AI precision.</p>
              </div>
              <Link href="/services" className="btn-outline">View All Services →</Link>
            </div>
            <div className={styles.servicesGrid}>
              {[
                { icon: '🏦', title: 'Revenue Cycle Management', desc: 'End-to-end management of your entire billing process from patient registration to final payment.' },
                { icon: '📋', title: 'Medical Coding & Billing', desc: 'Accurate ICD-10, CPT, and HCPCS coding to ensure maximum reimbursement and fewer denials.' },
                { icon: '🔄', title: 'Claims Processing', desc: 'Fast electronic claims submission with real-time tracking and automated follow-up systems.' },
                { icon: '📊', title: 'Denial Management', desc: 'Proactive denial prevention and rapid appeals process to recover every dollar owed.' },
                { icon: '✅', title: 'Insurance Credentialing', desc: 'Full credentialing and re-credentialing services with all major insurance carriers.' },
                { icon: '💰', title: 'Patient Collections', desc: 'Compassionate patient billing with flexible payment plans that improve collection rates.' },
              ].map((s, i) => (
                <div
                  key={i}
                  className={styles.serviceCard}
                  style={{ opacity: servRef.visible ? 1 : 0, animationDelay: `${(i % 3) * 100}ms` }}
                >
                  <div className={styles.serviceIcon}>{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <Link href="/services" className={styles.serviceLink}>Learn More →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className={styles.whySection} ref={whyRef.ref}>
          <div className="container">
            <div className={styles.whyGrid}>
              <div className={styles.whyLeft} style={{ opacity: whyRef.visible ? 1 : 0 }}>
                <div className="section-badge">Why MedCare MSO</div>
                <h2 className="section-title">Advantages of Outsourcing <span>Medical Billing</span></h2>
                <p className="section-subtitle">Focus on patient care while we handle the complexities of medical billing and revenue management.</p>
                <div className={styles.whyList}>
                  {[
                    'Reduce operational costs by up to 40%',
                    'Increase collections by 20–30% on average',
                    'Eliminate hiring and training overhead',
                    'Access to certified billing specialists',
                    'Real-time AI reporting and analytics',
                    '100% HIPAA compliant processes',
                  ].map((item, i) => (
                    <div key={i} className={styles.whyItem}>
                      <div className={styles.whyCheck}>✓</div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/benefits" className="btn-primary" style={{ marginTop: '32px' }}>See All Benefits →</Link>
              </div>
              <div className={styles.whyRight} style={{ opacity: whyRef.visible ? 1 : 0 }}>
                <Image
                  src="/medicalbilling-2.webp"
                  alt="MedCare MSO Benefits"
                  width={500}
                  height={460}
                  style={{ objectFit: 'cover', borderRadius: '20px', width: '100%', height: 'auto' }}
                />
                <div className={styles.imgOverlay}>
                  <strong>15+</strong>
                  <span>Years of Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IMAGES SHOWCASE */}
        <section className={styles.showcaseSection}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="section-badge" style={{ justifyContent: 'center' }}>Our Solutions</div>
              <h2 className="section-title" style={{ textAlign: 'center' }}>Trusted by <span>Healthcare Providers</span> Nationwide</h2>
            </div>
            <div className={styles.showcaseGrid}>
              {['/medicalbilling-3.webp', '/medicalbilling-4.webp', '/medicalbilling-5.webp'].map((src, i) => (
                <div key={i} className={styles.showcaseItem}>
                  <Image src={src} alt={`MedCare Solution ${i + 1}`} width={380} height={270} style={{ objectFit: 'cover', borderRadius: '16px', width: '100%', height: '290px' }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className={styles.testimonials}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="section-badge" style={{ justifyContent: 'center' }}>Client Stories</div>
              <h2 className="section-title" style={{ textAlign: 'center' }}>What Our <span>Clients Say</span></h2>
            </div>
            <div className={styles.testimonialGrid}>
              {[
                { quote: 'MedCare MSO transformed our billing process. Our collection rate went from 78% to 97% in just 3 months. Incredible results!', name: 'Dr. Sarah Johnson', role: 'Family Medicine, NY' },
                { quote: 'Their team handles everything professionally. We have reduced claim denials by 85% and our staff can now focus entirely on patient care.', name: 'Dr. Michael Chen', role: 'Orthopedics, CA' },
                { quote: 'The AI reporting dashboard gives us complete visibility. We always know exactly where our revenue stands. Highly recommend!', name: 'Dr. Lisa Martinez', role: 'Internal Medicine, TX' },
              ].map((t, i) => (
                <div key={i} className={styles.testimonialCard}>
                  <div className={styles.stars}>★★★★★</div>
                  <p>{t.quote}</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorAvatar}>{t.name[4]}</div>
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection} ref={ctaRef.ref}>
          <div className="container">
            <div className={`${styles.ctaBox} ${ctaRef.visible ? 'animate-fade-up' : ''}`} style={{ opacity: ctaRef.visible ? 1 : 0 }}>
              <h2>Ready to Maximize Your <span>Revenue</span>?</h2>
              <p>Join 1,000+ healthcare providers who trust MedCare MSO to optimize their billing operations and boost collections with AI.</p>
              <div className={styles.ctaActions}>
                <Link href="/services" className="btn-white">Get Free Consultation</Link>
                <a href="tel:800-640-6409" className={styles.ctaPhone}>📞 800-640-6409</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
