'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import styles from './resources.module.css'

const categories = ['All', 'White Papers', 'Blog', 'Case Studies', 'Guides', 'Webinars']

const resources = [
  {
    category: 'White Papers',
    tag: 'White Papers',
    title: 'How 2026 MIPS Scoring Turns Silent Reporting Gaps into Delayed Medicare Revenue Losses',
    desc: 'Practices are facing a Medicare revenue threat that becomes visible only after it is too late to correct.',
    img: '/medicalbilingcard1.webp',
    readTime: '8 min read',
  },
  {
    category: 'White Papers',
    tag: 'White Papers',
    title: 'How Payer-Side AI Is Replacing Clinical Judgment',
    desc: 'Health insurers are using artificial intelligence to deny care at a scale and speed no human reviewer could match.',
    img: '/medicalbilingcard1.webp',
    readTime: '10 min read',
  },
  {
    category: 'White Papers',
    tag: 'White Papers',
    title: 'Why Providers Should Choose an AI Scribe Now',
    desc: 'AI scribes are becoming proven tools for reducing documentation burden and improving outpatient efficiency.',
    img: '/medicalbilingcard1.webp',
    readTime: '6 min read',
  },
  {
    category: 'White Papers',
    tag: 'White Papers',
    title: 'ICD-11 Is Reshaping Medical Coding and Documentation',
    desc: 'A comprehensive analysis of structural changes, training implications, and healthcare system transformation.',
    img: '/medicalbilingcard1.webp',
    readTime: '12 min read',
  },
  {
    category: 'White Papers',
    tag: 'White Papers',
    title: 'Undercoding and Its Role in $31.7 Billion Medicare Improper Payments',
    desc: 'A comprehensive analysis of revenue loss, compliance risks, and strategic solutions for healthcare providers.',
    img: '/medicalbilingcard1.webp',
    readTime: '9 min read',
  },
  {
    category: 'White Papers',
    tag: 'White Papers',
    title: 'AI Automation in Healthcare Revenue Cycle Management',
    desc: 'How healthcare wastes $19.7 billion annually fighting claim denials that eventually get approved anyway.',
    img: '/medicalbilingcard1.webp',
    readTime: '11 min read',
  },
  {
    category: 'White Papers',
    tag: 'White Papers',
    title: 'Administrative Burden of Prior Authorization',
    desc: 'How prior authorization drains $68,000 per physician annually while approving 70% of requests initially.',
    img: '/medicalbilingcard1.webp',
    readTime: '7 min read',
  },
  {
    category: 'Blog',
    tag: 'Blog',
    title: 'HIPAA Security Risk Assessment and Independent Practices',
    desc: 'Why small practices fail HIPAA risk assessments and what structural barriers prevent compliance despite awareness.',
    img: '/medicalbilingcard1.webp',
    readTime: '5 min read',
  },
  {
    category: 'Guides',
    tag: 'Guides',
    title: 'Specialty Billing Guide to Reduce Denials and Secure Revenue',
    desc: 'Learn the top specialty billing updates and simple steps to stop denials, speed payments, and protect your clinic revenue.',
    img: '/medicalbilingcard1.webp',
    readTime: '14 min read',
  },
  {
    category: 'Guides',
    tag: 'Guides',
    title: 'Integrating Behavioral Health into Primary Care: Billing Strategies for 2026',
    desc: 'Learn how to add behavioral health care into primary care so clinics bill correctly and get paid.',
    img: '/medicalbilingcard1.webp',
    readTime: '10 min read',
  },
  {
    category: 'Blog',
    tag: 'Blog',
    title: 'What Does the Future of RCM Hold?',
    desc: 'Explore how value-based care is transforming revenue cycle management and what it means for the future of healthcare payments.',
    img: '/medicalbilingcard1.webp',
    readTime: '6 min read',
  },
  {
    category: 'Case Studies',
    tag: 'Case Studies',
    title: 'Integrated Practice Management Software: A Strategic Approach to Revenue Optimization',
    desc: 'Care Maximus helps you manage day-to-day operations, from bringing in new patients to making care smoother and billing simpler.',
    img: '/medicalbilingcard1.webp',
    readTime: '8 min read',
  },
  {
    category: 'Guides',
    tag: 'Guides',
    title: 'The Denial Prevention Playbook: Essential Strategies for Healthcare Providers',
    desc: 'Medical billing issues like coding mistakes and payer adjustments can lead to claim denials, which delay payment and increase costs.',
    img: '/medicalbilingcard1.webp',
    readTime: '12 min read',
  },
  {
    category: 'Blog',
    tag: 'Blog',
    title: 'How Digital Transformation Is Impacting Medical Billing Now and In the Near Future',
    desc: 'Digital transformation in medical billing refers to much more than switching from manual paper billing to processing claims electronically.',
    img: '/medicalbilingcard1.webp',
    readTime: '7 min read',
  },
  {
    category: 'Webinars',
    tag: 'Webinars',
    title: 'Live Webinar: Maximizing Revenue with AI-Powered RCM Tools in 2026',
    desc: 'Join our billing experts as they walk through the latest AI tools transforming revenue cycle management for independent practices.',
    img: '/medicalbilingcard1.webp',
    readTime: '60 min',
  },
  {
    category: 'Webinars',
    tag: 'Webinars',
    title: 'On-Demand: Denial Management Best Practices for Multi-Specialty Clinics',
    desc: 'A comprehensive webinar covering proactive denial prevention strategies and rapid appeals workflows.',
    img: '/medicalbilingcard1.webp',
    readTime: '45 min',
  },
  {
    category: 'Case Studies',
    tag: 'Case Studies',
    title: 'How a Multi-Physician Practice Recovered $1.2M in Denied Claims',
    desc: 'A detailed case study on how MedCare MSO helped a 12-physician orthopedic practice overturn systemic payer denials.',
    img: '/medicalbilingcard1.webp',
    readTime: '5 min read',
  },
]

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = resources.filter(r => {
    const matchCat = activeCategory === 'All' || r.category === activeCategory
    const matchSearch = r.title.toLowerCase().includes(search.toLowerCase()) || r.desc.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroBg}></div>
          <div className="container">
            <div className={styles.heroContent}>
              <div className="section-badge">Strategic Insights</div>
              <h1>White Papers & <span>Resources</span></h1>
              <p>Authoritative, research-based topics providing expert analysis of medical billing in the healthcare landscape. Find solutions to the problems your practice faces here.</p>
              <div className={styles.heroSearch}>
                <input
                  type="text"
                  placeholder="Search white papers, guides, webinars..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className={styles.searchInput}
                />
                <button className={styles.searchBtn}>🔍 Search</button>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORY FILTERS */}
        <section className={styles.filterSection}>
          <div className="container">
            <div className={styles.filters}>
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* RESOURCES GRID */}
        <section className={styles.gridSection}>
          <div className="container">
            {filtered.length === 0 ? (
              <div className={styles.noResults}>
                <p>No resources found matching your search.</p>
              </div>
            ) : (
              <div className={styles.resourcesGrid}>
                {filtered.map((res, i) => (
                  <div key={i} className={styles.resourceCard}>
                    <div className={styles.cardImage}>
                      <Image
                        src={i % 2 === 0 ? '/medicalbilingcard1.webp' : '/medicalbiling-cards.webp'}
                        alt={res.title}
                        width={400}
                        height={220}
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      />
                      <div className={styles.cardTagOverlay}>{res.tag}</div>
                    </div>
                    <div className={styles.cardBody}>
                      <div className={styles.cardMeta}>
                        <span className={styles.cardReadTime}>⏱ {res.readTime}</span>
                      </div>
                      <h3>{res.title}</h3>
                      <p>{res.desc}</p>
                      <Link href="#" className={styles.readMore}>Read More →</Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaBox}>
              <h2>Need Professional <span>Consultation?</span></h2>
              <p>If there is any confusion or you need expert advice on medical billing, request a callback and a billing master will get back to you within 12 hours.</p>
              <div className={styles.ctaActions}>
                <Link href="/services" className="btn-white">Request a Consultation</Link>
                <a href="tel:800-640-6409" className={styles.phoneBtn}>📞 800-640-6409</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
