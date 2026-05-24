'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import styles from './benefits.module.css'

function useVisible() {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.1 })
    if (ref.current) o.observe(ref.current)
    return () => o.disconnect()
  }, [])
  return { ref, vis }
}

export default function Benefits() {
  const hero = useVisible()
  const benVis = useVisible()
  const compVis = useVisible()
  const roiVis = useVisible()

  return (
    <>
      <Navbar />
      <main>
        <section className={styles.pageHero} ref={hero.ref}>
          <div className="container">
            <div className={`${styles.heroInner} ${hero.vis ? 'animate-fade-up' : ''}`} style={{opacity: hero.vis ? 1 : 0}}>
              <div className="section-badge">Why Outsource</div>
              <h1 className="section-title">Benefits of Outsourcing <span>Medical Billing</span></h1>
              <p className="section-subtitle">Discover why 500+ healthcare providers chose VceraMed to maximize their revenue and simplify operations.</p>
            </div>
          </div>
        </section>

        {/* MAIN BENEFITS */}
        <section className={styles.benefitsSection} ref={benVis.ref}>
          <div className="container">
            <div className={styles.benefitsGrid}>
              {[
                { icon:'💸', title:'Reduce Costs by 40%', desc:'Eliminate salaries, benefits, training, and technology costs for in-house billing staff. Pay only for what you use.' },
                { icon:'📈', title:'Increase Revenue 20-30%', desc:'Our billing specialists recover more revenue through better coding, fewer denials, and faster collections.' },
                { icon:'⏰', title:'Save Thousands of Hours', desc:'Your clinical staff can focus entirely on patient care while we manage the entire billing process.' },
                { icon:'🎯', title:'Higher Accuracy Rates', desc:'Certified coders with 99.9% accuracy reduce rejections and ensure maximum reimbursement every time.' },
                { icon:'🔐', title:'Full HIPAA Compliance', desc:'Protect your practice with enterprise-grade security, encryption, and strict HIPAA compliance protocols.' },
                { icon:'📱', title:'Real-Time Visibility', desc:'Access live dashboards and detailed reports showing exactly where your revenue stands at all times.' },
                { icon:'🚀', title:'Faster Payments', desc:'Electronic submissions and automated follow-up reduce average payment time from 45 days to under 14 days.' },
                { icon:'🤝', title:'Dedicated Account Team', desc:'A personal account manager and billing specialist team who know your practice inside and out.' },
              ].map((b, i) => (
                <div key={i} className={`${styles.benefitCard} ${benVis.vis ? 'animate-fade-up' : ''}`}
                     style={{opacity: benVis.vis ? 1 : 0, animationDelay: `${(i%4)*0.1}s`}}>
                  <div className={styles.benefitIcon}>{b.icon}</div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className={styles.compareSection} ref={compVis.ref}>
          <div className="container">
            <div style={{textAlign:'center', marginBottom:'48px'}}>
              <div className="section-badge" style={{justifyContent:'center'}}>The Difference</div>
              <h2 className="section-title" style={{textAlign:'center'}}>In-House vs <span>VceraMed</span></h2>
            </div>
            <div className={`${styles.compareTable} ${compVis.vis ? 'animate-fade-up' : ''}`} style={{opacity: compVis.vis ? 1 : 0}}>
              <div className={styles.compareHeader}>
                <div className={styles.compareFeature}>Feature</div>
                <div className={styles.compareInHouse}>In-House Billing</div>
                <div className={styles.compareVcera}>VceraMed</div>
              </div>
              {[
                ['Monthly Cost', '$8,000–15,000+', '$1,500–4,000'],
                ['Collection Rate', '70–85%', '95–98%'],
                ['Claim Denial Rate', '10–20%', '< 2%'],
                ['Days to Payment', '45–60 days', '< 14 days'],
                ['Staff Training', 'Constant need', 'We handle it'],
                ['HIPAA Compliance', 'Your risk', 'Fully managed'],
                ['Scalability', 'Limited', 'Unlimited'],
                ['24/7 Support', '✗ No', '✓ Yes'],
              ].map(([feature, inHouse, vcera], i) => (
                <div key={i} className={`${styles.compareRow} ${i%2===0 ? styles.evenRow : ''}`}>
                  <div className={styles.compareFeature}>{feature}</div>
                  <div className={styles.compareInHouse}>{inHouse}</div>
                  <div className={styles.compareVcera}>{vcera}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI SECTION */}
        <section className={styles.roiSection} ref={roiVis.ref}>
          <div className="container">
            <div className={styles.roiGrid}>
              <div className={`${roiVis.vis ? 'animate-fade-left' : ''}`} style={{opacity: roiVis.vis ? 1 : 0}}>
                <div className="section-badge">Calculate Your ROI</div>
                <h2 className="section-title">See How Much <span>You Could Save</span></h2>
                <p style={{fontSize:'16px', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'24px'}}>
                  A typical 3-physician practice saves $85,000+ annually by switching to VceraMed while increasing collections by over $200,000.
                </p>
                <div className={styles.roiStats}>
                  <div className={styles.roiStat}>
                    <strong>$85K+</strong>
                    <span>Average Annual Savings</span>
                  </div>
                  <div className={styles.roiStat}>
                    <strong>$200K+</strong>
                    <span>Revenue Recovered</span>
                  </div>
                </div>
                <Link href="/services" className="btn-primary" style={{marginTop:'32px', display:'inline-flex'}}>
                  Get Your Free ROI Analysis →
                </Link>
              </div>
              <div className={`${styles.roiCard} ${roiVis.vis ? 'animate-fade-right' : ''}`} style={{opacity: roiVis.vis ? 1 : 0}}>
                <h3>Practice ROI Calculator</h3>
                <div className={styles.roiItem}>
                  <span>Avg Monthly Collections</span>
                  <strong>$150,000</strong>
                </div>
                <div className={styles.roiBar}><div style={{width:'98%'}}></div></div>
                <div className={styles.roiItem}>
                  <span>Collection Rate Improvement</span>
                  <strong>+18%</strong>
                </div>
                <div className={styles.roiBar}><div style={{width:'65%'}}></div></div>
                <div className={styles.roiItem}>
                  <span>Annual Revenue Gain</span>
                  <strong style={{color:'var(--primary)', fontSize:'24px'}}>+$324,000</strong>
                </div>
                <div className={styles.roiFootnote}>*Based on average client results</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
