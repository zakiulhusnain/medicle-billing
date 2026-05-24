'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.css'

const aiEcoItems = [
  { label: 'AI Medical Billing Software', href: '/ecosystem' },
  { label: 'AI Scribe', href: '/ecosystem' },
  { label: 'AI Medical Coding', href: '/ecosystem' },
  { label: 'AI Rule Engine', href: '/ecosystem' },
  { label: 'AI Receptionist', href: '/ecosystem' },
  { label: 'AI Authorization Verification', href: '/ecosystem' },
  { label: 'AI Claim Agent', href: '/ecosystem' },
  { label: 'AI Patient Scheduling', href: '/ecosystem' },
  { label: 'AI Appeals Manager', href: '/ecosystem' },
  { label: 'AI Payment Posting', href: '/ecosystem' },
  { label: 'AI Patient Statement Agent', href: '/ecosystem' },
]

const servicesItems = [
  { label: 'Revenue Cycle Management', href: '/services' },
  { label: 'Medical Billing Services', href: '/services' },
  { label: 'Medical Billing Consulting', href: '/services' },
  { label: 'Medical Billing Small Practices', href: '/services' },
  { label: 'AR Recovery Services', href: '/services' },
  { label: 'Hospital Billing Services', href: '/services' },
  { label: 'Denial Management Services', href: '/services' },
  { label: 'Chronic Care Management', href: '/services' },
  { label: 'Remote Patient Monitoring', href: '/services' },
]

const specialtiesItems = [
  { label: 'Rehab', href: '/benefits' },
  { label: 'Oncology', href: '/benefits' },
  { label: 'Psychiatric', href: '/benefits' },
  { label: 'Wound Care', href: '/benefits' },
  { label: 'Dermatology', href: '/benefits' },
  { label: 'Cardiology', href: '/benefits' },
  { label: 'FQHC', href: '/benefits' },
  { label: 'Medical Clinics', href: '/benefits' },
  { label: 'Podiatry', href: '/benefits' },
]

const resourcesItems = [
  { icon: '📋', label: 'White Papers', desc: 'Access reports and analyses to improve billing accuracy', href: '/resources' },
  { icon: '📝', label: 'Blog', desc: 'Stay updated with industry trends, billing tips, and best practices', href: '/resources' },
  { icon: '🎓', label: 'Webinars', desc: 'Join our live and on-demand webinars for expert billing insights', href: '/resources' },
  { icon: '📊', label: 'Case Studies', desc: 'Discover how our billing solutions improved revenue cycle performance', href: '/resources' },
  { icon: '📖', label: 'Guides', desc: 'Explore guides on reducing claim denials and boosting reimbursements', href: '/resources' },
  { icon: '🔍', label: 'Comparisons', desc: 'Compare billing solutions and find what suits your practice', href: '/resources' },
  { icon: '⭐', label: 'Testimonials', desc: 'Read client feedback on how we have optimized their billing', href: '/resources' },
  { icon: '🏢', label: 'About Us', desc: 'Learn more about MedCare MSO and our mission in healthcare', href: '/about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(name)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navInner}`}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/Capture.PNG"
            alt="MedCare MSO Logo"
            width={160}
            height={52}
            priority
            style={{ objectFit: 'contain' }}
          />
        </Link>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          {/* AI Eco-system */}
          <li
            className={styles.hasDropdown}
            onMouseEnter={() => handleMouseEnter('ai')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`${styles.navBtn} ${activeDropdown === 'ai' ? styles.active : ''}`}
              onClick={() => setMobileExpanded(mobileExpanded === 'ai' ? null : 'ai')}
            >
              <span className={styles.aiStar}>✦</span> AI Eco-system
              <svg className={`${styles.chevron} ${activeDropdown === 'ai' || mobileExpanded === 'ai' ? styles.chevronOpen : ''}`} width="12" height="12" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
            </button>
            <div className={`${styles.dropdown} ${styles.dropdownSimple} ${activeDropdown === 'ai' ? styles.dropdownVisible : ''} ${mobileExpanded === 'ai' ? styles.mobileExpanded : ''}`}>
              {aiEcoItems.map((item, i) => (
                <Link key={i} href={item.href} className={styles.dropdownItem} onClick={() => { setMenuOpen(false); setMobileExpanded(null) }}>
                  {item.label}
                </Link>
              ))}
            </div>
          </li>

          {/* Services */}
          <li
            className={styles.hasDropdown}
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`${styles.navBtn} ${activeDropdown === 'services' ? styles.active : ''}`}
              onClick={() => setMobileExpanded(mobileExpanded === 'services' ? null : 'services')}
            >
              Services
              <svg className={`${styles.chevron} ${activeDropdown === 'services' || mobileExpanded === 'services' ? styles.chevronOpen : ''}`} width="12" height="12" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
            </button>
            <div className={`${styles.dropdown} ${styles.dropdownSimple} ${activeDropdown === 'services' ? styles.dropdownVisible : ''} ${mobileExpanded === 'services' ? styles.mobileExpanded : ''}`}>
              {servicesItems.map((item, i) => (
                <Link key={i} href={item.href} className={styles.dropdownItem} onClick={() => { setMenuOpen(false); setMobileExpanded(null) }}>
                  {item.label}
                </Link>
              ))}
            </div>
          </li>

          {/* Specialties */}
          <li
            className={styles.hasDropdown}
            onMouseEnter={() => handleMouseEnter('specialties')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`${styles.navBtn} ${activeDropdown === 'specialties' ? styles.active : ''}`}
              onClick={() => setMobileExpanded(mobileExpanded === 'specialties' ? null : 'specialties')}
            >
              Specialties
              <svg className={`${styles.chevron} ${activeDropdown === 'specialties' || mobileExpanded === 'specialties' ? styles.chevronOpen : ''}`} width="12" height="12" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
            </button>
            <div className={`${styles.dropdown} ${styles.dropdownSimple} ${activeDropdown === 'specialties' ? styles.dropdownVisible : ''} ${mobileExpanded === 'specialties' ? styles.mobileExpanded : ''}`}>
              {specialtiesItems.map((item, i) => (
                <Link key={i} href={item.href} className={styles.dropdownItem} onClick={() => { setMenuOpen(false); setMobileExpanded(null) }}>
                  {item.label}
                </Link>
              ))}
            </div>
          </li>

          {/* Resources — Mega Dropdown */}
          <li
            className={styles.hasDropdown}
            onMouseEnter={() => handleMouseEnter('resources')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`${styles.navBtn} ${styles.resourcesBtn} ${activeDropdown === 'resources' ? styles.active : ''}`}
              onClick={() => setMobileExpanded(mobileExpanded === 'resources' ? null : 'resources')}
            >
              Resources
              <svg className={`${styles.chevron} ${activeDropdown === 'resources' || mobileExpanded === 'resources' ? styles.chevronOpen : ''}`} width="12" height="12" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
            </button>
            <div className={`${styles.dropdown} ${styles.dropdownMega} ${activeDropdown === 'resources' ? styles.dropdownVisible : ''} ${mobileExpanded === 'resources' ? styles.mobileExpanded : ''}`}>
              <div className={styles.megaGrid}>
                {resourcesItems.map((item, i) => (
                  <Link key={i} href={item.href} className={styles.megaItem} onClick={() => { setMenuOpen(false); setMobileExpanded(null) }}>
                    <span className={styles.megaIcon}>{item.icon}</span>
                    <div>
                      <div className={styles.megaLabel}>{item.label}</div>
                      <div className={styles.megaDesc}>{item.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </li>

          <li>
            <Link href="/about" className={styles.navLink} onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
        </ul>

        <div className={styles.navActions}>
          <Link href="/services" className={styles.requestDemo}>Request Demo</Link>
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}
