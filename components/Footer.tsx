import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className="container">
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <Image src="/Capture.PNG" alt="MedCare MSO Logo" width={160} height={52} style={{ objectFit: 'contain' }} />
              <p>Empower Your Healthcare Practice with MedCare MSO — AI-powered medical billing solutions for the modern healthcare provider.</p>
              <div className={styles.contact}>
                <div>📞 <a href="tel:800-640-6409">800-640-6409</a></div>
                <div>✉️ <a href="mailto:info@medcaremso.com">info@medcaremso.com</a></div>
              </div>
            </div>

            <div className={styles.footerCol}>
              <h4>AI Eco-System</h4>
              <ul>
                <li><Link href="/ecosystem">AI Medical Billing</Link></li>
                <li><Link href="/ecosystem">AI Scribe</Link></li>
                <li><Link href="/ecosystem">AI Medical Coding</Link></li>
                <li><Link href="/ecosystem">AI Receptionist</Link></li>
                <li><Link href="/ecosystem">AI Claim Agent</Link></li>
                <li><Link href="/ecosystem">AI Payment Posting</Link></li>
              </ul>
            </div>

            <div className={styles.footerCol}>
              <h4>Services</h4>
              <ul>
                <li><Link href="/services">Revenue Cycle Management</Link></li>
                <li><Link href="/services">Medical Billing Services</Link></li>
                <li><Link href="/services">AR Recovery Services</Link></li>
                <li><Link href="/services">Denial Management</Link></li>
                <li><Link href="/services">Chronic Care Management</Link></li>
                <li><Link href="/services">Hospital Billing</Link></li>
              </ul>
            </div>

            <div className={styles.footerCol}>
              <h4>Resources</h4>
              <ul>
                <li><Link href="/resources">White Papers</Link></li>
                <li><Link href="/resources">Blog</Link></li>
                <li><Link href="/resources">Webinars</Link></li>
                <li><Link href="/resources">Case Studies</Link></li>
                <li><Link href="/resources">Guides</Link></li>
                <li><Link href="/about">About Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className="container">
          <p>© 2026 MedCare MSO. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Return Policy</a>
            <a href="#">Quality Policy</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
