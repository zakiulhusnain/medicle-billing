'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import styles from './ecosystem.module.css'

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

// FIX: visible prop passed in — no double intersection
function Counter({ end, suffix = '', prefix = '', visible }: { end: number, suffix?: string, prefix?: string, visible: boolean }) {
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
  return <span>{prefix}{count}{suffix}</span>
}

export default function EcosystemPage() {
  const productsRef = useIntersection()
  const capabilitiesRef = useIntersection()
  const resultsRef = useIntersection()

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
            <div className={styles.heroText}>
              <div className="section-badge">AI Powered</div>
              <h1>MedCare <span>AI Ecosystem</span></h1>
              <p className={styles.heroSubtitle}>AI-Powered Automation Across the Entire Revenue Cycle</p>
              <p>We combine AI, RPA, and Business Intelligence to transform billing, coding, compliance, and revenue operations delivering speed, accuracy, and intelligence at every touchpoint.</p>
              <Link href="/services" className="btn-primary">Request a Demo</Link>
            </div>
            <div className={styles.heroImage}>
              <Image src="/ecosystem.webp" alt="MedCare AI Ecosystem" width={500} height={400} style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className={styles.trustSection}>
          <div className="container">
            <div className={styles.trustGrid}>
              <div className={styles.trustItem}><div className={styles.trustLabel}>Trusted by 1000+ providers</div></div>
              <div className={styles.trustDivider}></div>
              <div className={styles.trustMetric}><div className={styles.metricValue}>1,000+</div><div className={styles.metricLabel}>Hours Saved / Month</div></div>
              <div className={styles.trustDivider}></div>
              <div className={styles.trustMetric}><div className={styles.metricValue}>98%</div><div className={styles.metricLabel}>Accuracy Rate</div></div>
              <div className={styles.trustDivider}></div>
              <div className={styles.trustMetric}><div className={styles.metricValue}>80%</div><div className={styles.metricLabel}>Faster Processing</div></div>
            </div>
          </div>
        </section>

        {/* AI PRODUCTS GRID */}
        <section className={styles.productsSection} ref={productsRef.ref}>
          <div className="container">
            <div className={styles.sectionHead}>
              <div>
                <h2 className="section-title">MedCare <span>AI Ecosystem</span></h2>
                <p className="section-subtitle">Complete AI-powered solutions for every step of the revenue cycle</p>
              </div>
            </div>
            <div className={styles.productsGrid}>
              {[
                { icon: '📞', title: 'AI Receptionist', desc: 'Handles all incoming patient calls' },
                { icon: '📅', title: 'AI Patient Scheduling', desc: 'Automated appointment booking' },
                { icon: '✅', title: 'AI Authorization Verification', desc: 'Real-time eligibility check' },
                { icon: '📄', title: 'HealUS EMR Health Assistant', desc: 'Scans and reads documents' },
                { icon: '✍️', title: 'AI Scribe', desc: 'Populates clinical documentation' },
                { icon: '🔢', title: 'AI Coder', desc: 'Automated CPT and ICD coding' },
                { icon: '⚙️', title: 'Maximus PMS', desc: 'Auto-action, Error alerts & Warnings' },
                { icon: '📤', title: 'AI Appeals & Auto Fax', desc: 'Auto-generates appeal letters' },
                { icon: '🧹', title: 'AI Claim Agent', desc: 'Scrubs claims for errors' },
                { icon: '💰', title: 'Payment Posting', desc: 'Apply payments & reconcile accounts' },
                { icon: '📋', title: 'Patients Statement Agent', desc: 'Sends auto patient statements' },
                { icon: '🔍', title: 'AR Claim Status & Follow-Ups', desc: 'Automated claim tracking' },
              ].map((product, i) => (
                // FIX: inline style for stagger delay instead of dynamic Tailwind classes
                <div
                  key={i}
                  className={styles.productCard}
                  style={{ animationDelay: productsRef.visible ? `${(i % 4) * 80}ms` : '0ms', opacity: productsRef.visible ? undefined : 0 }}
                >
                  <div className={styles.productIcon}>{product.icon}</div>
                  <h3>{product.title}</h3>
                  <p>{product.desc}</p>
                </div>
              ))}
            </div>
            <p className={styles.ecosystemDesc}>End-to-end revenue cycle automation — from eligibility to payment posting, every step powered by AI.</p>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className={styles.capabilitiesSection} ref={capabilitiesRef.ref}>
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>Key Capabilities</h2>
            <div className={styles.capabilitiesGrid}>
              {[
                { title: 'AR Claim Status & Follow-Ups', desc: 'Automated toxicology CPT coding with compliance guardrails', stat: '85% reduction in manual AR touchpoints' },
                { title: 'Authorization Status Check', desc: 'Real-time prior auth verification across all major payers', stat: '1,200+ auth checks automated / month' },
                { title: 'Blood CPT Coding Automation', desc: 'AI-driven CPT code assignment for laboratory & blood panels', stat: '98% coding accuracy, 70% faster turnaround' },
                { title: 'TOX CPT Coding Automation', desc: 'Automated toxicology CPT coding with compliance guardrails', stat: '60% error reduction vs. manual coding' },
                { title: 'Patient Demographics & Charges', desc: 'Intelligent demographic correction and charge entry automation', stat: '500+ records corrected / day, 90% accuracy' },
                { title: 'Pre-Submission Check & Reconciliation', desc: 'Multi-layer claim validation before payer submission', stat: '80% reduction in initial denial rate' },
                { title: 'Diagnosis Compatibility & Bundling', desc: 'AI engine flags incompatible DX and bundling violations', stat: '75% fewer coding-related denials' },
                { title: 'Claim Adjustment Automation', desc: 'Automated correction and resubmission of adjusted claims', stat: '3× faster claim resolution cycle' },
                { title: 'Payment Posting Automation', desc: 'AI-powered ERA/EOB parsing with GL reconciliation', stat: '1,000+ hours saved per month' },
                { title: 'OCR – PDF to Structured Excel', desc: 'Convert unstructured payer documents to actionable data', stat: '95% extraction accuracy from PDF/fax' },
                { title: 'Billing Reconciliation Audit', desc: 'Continuous audit engine for charge & payment discrepancies', stat: '50–60% reduction in reconciliation time' },
              ].map((cap, i) => (
                // FIX: stagger with inline style
                <div
                  key={i}
                  className={styles.capabilityCard}
                  style={{ animationDelay: capabilitiesRef.visible ? `${(i % 4) * 80}ms` : '0ms', opacity: capabilitiesRef.visible ? undefined : 0 }}
                >
                  <h3>{cap.title}</h3>
                  <p>{cap.desc}</p>
                  <div className={styles.capabilityStat}>{cap.stat}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REAL RESULTS */}
        <section className={styles.resultsSection} ref={resultsRef.ref}>
          <div className="container">
            <div className={styles.resultsHead}>
              <h2 className="section-title">Real Results. <span>Measurable Impact.</span></h2>
              <p className="section-subtitle">Numbers that prove the power of AI-driven revenue cycle transformation.</p>
            </div>
            <div className={styles.resultsGrid}>
              {[
                { icon: '⏱️', end: 1000, suffix: '+', label: 'Hours Saved per month', desc: 'Across payment posting, AR follow-up & coding workflows' },
                { icon: '✅', end: 98, suffix: '%', label: 'Accuracy Rate', desc: 'AI-verified in coding, claim submission & payment reconciliation' },
                { icon: '⚡', end: 80, suffix: '%', label: 'Faster Processing', desc: 'From documentation to claim submission & posting' },
                { icon: '🔧', end: 60, suffix: '%', label: 'Error Reduction', desc: '50–60% avg in billing, coding & claim-related errors' },
              ].map((r, i) => (
                <div key={i} className={styles.resultCard}>
                  <div className={styles.resultIcon}>{r.icon}</div>
                  <div className={styles.resultValue}><Counter end={r.end} suffix={r.suffix} visible={resultsRef.visible} /></div>
                  <div className={styles.resultLabel}>{r.label}</div>
                  <p className={styles.resultDesc}>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className={styles.featuresSection}>
          <div className="container">
            <div className={styles.featuresGrid}>
              {['🔒 HIPAA Compliant','🏆 SOC 2 Type II','📊 HL7 / FHIR Ready','⚙️ Real-Time Processing','📈 24/7 AI Operations','🎯 Six Sigma & BI Intelligence'].map((feature, i) => (
                <div key={i} className={styles.featureTag}>{feature}</div>
              ))}
            </div>
          </div>
        </section>

        {/* SIX SIGMA */}
        <section className={styles.sixSigmaSection}>
          <div className="container">
            <div className={styles.sixSigmaContent}>
              <div className={styles.sixSigmaText}>
                <h2 className="section-title">Six Sigma & BI Intelligence</h2>
                <p>We apply enterprise-grade Six Sigma methodology combined with real-time business intelligence to continuously optimize your RCM.</p>
                <div className={styles.dmaic}>
                  <h3>Six Sigma Reporting Excellence</h3>
                  <p>DMAIC framework applied to every revenue cycle process — eliminating defects, reducing variance, and sustaining performance improvements.</p>
                  <ul className={styles.dmacList}>
                    <li><strong>Define:</strong> Identify RCM inefficiencies, set measurable goals & scope</li>
                    <li><strong>Measure:</strong> Capture baseline KPIs — denial rates, TAT, payment lag</li>
                    <li><strong>Analyze:</strong> Root-cause analysis using AI pattern detection & BI dashboards</li>
                    <li><strong>Improve:</strong> Deploy AI automations targeting identified bottlenecks</li>
                    <li><strong>Control:</strong> Continuous monitoring, alerts & automated compliance checks</li>
                  </ul>
                </div>
                <div className={styles.sixSigmaStat}>
                  <div className={styles.statNum}>3.4</div>
                  <div className={styles.statText}>Defects per Million<br />Six Sigma quality standard applied to RCM operations</div>
                </div>
              </div>
              <div className={styles.sixSigmaImage}>
                <Image src="/medicalbilling-3.webp" alt="Six Sigma & BI Intelligence" width={420} height={420} style={{ objectFit: 'cover', borderRadius: '20px' }} />
              </div>
            </div>
          </div>
        </section>

        {/* BI ANALYTICS */}
        <section className={styles.biSection}>
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '16px' }}>BI & Data Analytics</h2>
            <p className={styles.biSubtitle}>Real-time dashboards, predictive insights, and performance optimization powered by enterprise-grade business intelligence.</p>
            <div className={styles.biGrid}>
              {[
                { icon: '📊', title: 'Real-Time Dashboards', desc: 'Live RCM KPIs — AR aging, denial rates, collection velocity' },
                { icon: '🔮', title: 'Predictive Analytics', desc: 'Forecast cash flow, denial trends & payer behavior patterns' },
                { icon: '🗄️', title: 'Data Warehousing', desc: 'Centralized, HIPAA-compliant health data architecture' },
                { icon: '📈', title: 'Performance Reports', desc: 'Automated Six Sigma quality reports by provider & payer' },
                { icon: '💡', title: 'Revenue Intelligence', desc: 'AI-driven revenue leakage detection & optimization engine' },
              ].map((bi, i) => (
                <div key={i} className={styles.biCard}>
                  <div className={styles.biIcon}>{bi.icon}</div>
                  <h3>{bi.title}</h3>
                  <p>{bi.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LIVE PERFORMANCE */}
        <section className={styles.performanceSection}>
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>Live Performance Overview</h2>
            <div className={styles.performanceGrid}>
              {[
                { value: '96.2%', label: 'Clean Claim Rate', trend: '↑', positive: true },
                { value: '91.8%', label: 'First-Pass Rate', trend: '↑', positive: true },
                { value: '4.1%', label: 'Denial Rate', trend: '↓', positive: true },
                { value: '18.3', label: 'AR Days', trend: '↓', positive: true },
              ].map((p, i) => (
                <div key={i} className={styles.performanceCard}>
                  <div className={styles.perfValue}>{p.value}</div>
                  <div className={styles.perfLabel}>{p.label}</div>
                  <div className={`${styles.perfTrend} ${styles.perfGood}`}>{p.trend}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaBox}>
              <h2>Transform Your <span>Revenue Cycle</span> with AI</h2>
              <p>From documentation to payment posting — fully automated, fully intelligent. Join healthcare organizations already transforming their RCM with MedCare AI.</p>
              <Link href="/services" className="btn-white">Book a Free Demo Now!</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
