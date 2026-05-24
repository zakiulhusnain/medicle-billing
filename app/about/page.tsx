'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import styles from './about.module.css'

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

const team = [
  { name:'Dr. Amanda Ross', role:'CEO & Founder', initials:'AR', bio:'15+ years in healthcare revenue management. Former CBO at Memorial Health System.' },
  { name:'James Whitfield', role:'VP of Operations', initials:'JW', bio:'Expert in billing process optimization with a track record of 40% efficiency improvements.' },
  { name:'Maria Santos', role:'Director of Coding', initials:'MS', bio:'CPC certified with expertise in 30+ specialties. Leads our team of 50+ coders.' },
  { name:'Kevin Park', role:'Head of Technology', initials:'KP', bio:'Built integrations with 200+ EHR platforms ensuring seamless data flow and security.' },
]

export default function About() {
  const hero = useVisible()
  const story = useVisible()
  const teamVis = useVisible()
  const ctaVis = useVisible()

  return (
    <>
      <Navbar />
      <main>
        <section className={styles.pageHero} ref={hero.ref}>
          <div className="container">
            <div className={`${styles.heroInner} ${hero.vis ? 'animate-fade-up' : ''}`} style={{opacity: hero.vis ? 1 : 0}}>
              <div className="section-badge">About VceraMed</div>
              <h1 className="section-title">Your Trusted <span>Medical Billing Partner</span></h1>
              <p className="section-subtitle">For over 15 years, we&apos;ve helped healthcare providers nationwide optimize their revenue cycle and focus on delivering exceptional patient care.</p>
            </div>
          </div>
        </section>

        {/* STORY */}
        <section className={styles.storySection} ref={story.ref}>
          <div className="container">
            <div className={styles.storyGrid}>
              <div className={`${story.vis ? 'animate-fade-left' : ''}`} style={{opacity: story.vis ? 1 : 0}}>
                <div className="section-badge">Our Story</div>
                <h2 className="section-title">Founded by <span>Healthcare Professionals</span></h2>
                <p style={{fontSize:'16px', color:'var(--gray-text)', lineHeight:'1.9', marginBottom:'20px'}}>
                  VceraMed was founded in 2009 by Dr. Amanda Ross after she experienced firsthand how poor billing practices were undermining physician practices across the country. She assembled a team of certified billers, coders, and technology experts with one mission: make medical billing work for doctors, not against them.
                </p>
                <p style={{fontSize:'16px', color:'var(--gray-text)', lineHeight:'1.9', marginBottom:'32px'}}>
                  Today, we serve 500+ providers across 30+ specialties in all 50 states, processing over $500M in claims annually with an industry-leading 98.5% collection rate.
                </p>
                <div className={styles.storyValues}>
                  {['Integrity in every interaction','Clinical knowledge-driven approach','Technology-first solutions','Transparent reporting always'].map((v, i) => (
                    <div key={i} className={styles.valueItem}>
                      <span className={styles.valueDot}></span>
                      {v}
                    </div>
                  ))}
                </div>
              </div>
              <div className={`${styles.storyStats} ${story.vis ? 'animate-fade-right' : ''}`} style={{opacity: story.vis ? 1 : 0}}>
                <div className={styles.storyStatGrid}>
                  {[
                    { num:'2009', label:'Founded' },
                    { num:'500+', label:'Clients Nationwide' },
                    { num:'$500M+', label:'Claims Annually' },
                    { num:'98.5%', label:'Collection Rate' },
                    { num:'30+', label:'Specialties Served' },
                    { num:'50', label:'States Covered' },
                  ].map((s, i) => (
                    <div key={i} className={styles.storyStat}>
                      <strong>{s.num}</strong>
                      <span>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className={styles.teamSection} ref={teamVis.ref}>
          <div className="container">
            <div style={{textAlign:'center', marginBottom:'56px'}}>
              <div className="section-badge" style={{justifyContent:'center'}}>Our Leadership</div>
              <h2 className="section-title" style={{textAlign:'center'}}>Meet the <span>Expert Team</span></h2>
            </div>
            <div className={styles.teamGrid}>
              {team.map((member, i) => (
                <div key={i} className={`${styles.teamCard} ${teamVis.vis ? `animate-fade-up delay-${(i+1)*100}` : ''}`}
                     style={{opacity: teamVis.vis ? 1 : 0}}>
                  <div className={styles.teamAvatar}>{member.initials}</div>
                  <h3>{member.name}</h3>
                  <span className={styles.teamRole}>{member.role}</span>
                  <p>{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection} ref={ctaVis.ref}>
          <div className="container">
            <div className={`${styles.ctaBox} ${ctaVis.vis ? 'animate-fade-up' : ''}`} style={{opacity: ctaVis.vis ? 1 : 0}}>
              <h2>Ready to Partner With <span>VceraMed</span>?</h2>
              <p>Let&apos;s have a conversation about your practice and how we can help you recover more revenue.</p>
              <div className={styles.ctaActions}>
                <Link href="/services" className="btn-white">Schedule a Demo</Link>
                <a href="tel:+18005558455" className="btn-outline" style={{color:'white', borderColor:'rgba(255,255,255,0.4)'}}>
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
