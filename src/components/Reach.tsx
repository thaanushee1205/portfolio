import { Download, Mail } from 'lucide-react'
import Section from './Section'
import { profile } from '../data/portfolio'

export default function Reach() {
  return (
    <Section id="contact" n="06" label="CONTACT" title="Let’s build something." text="I’m interested in full-stack engineering opportunities, cloud-native applications, AI-powered automation, and meaningful technical collaborations.">
      <div className="contact-boxes">
        <a className="contact-box" href={`mailto:${profile.email}`}><Mail size={20} /><span>Email<strong>{profile.email}</strong></span></a>
        <a className="contact-box" href={profile.linkedin} target="_blank" rel="noreferrer"><svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.3 7.7A2.3 2.3 0 1 0 5.3 3a2.3 2.3 0 0 0 0 4.7ZM3.3 9.3h4v11.7h-4V9.3Zm6.2 0h3.8v1.6h.1c.5-.9 1.8-2 3.8-2 4 0 4.8 2.7 4.8 6.1v6H18v-5.3c0-1.3 0-3-1.8-3-1.8 0-2.1 1.4-2.1 2.9V21H9.5V9.3Z" /></svg><span>LinkedIn<strong>View profile</strong></span></a>
        <a className="contact-box" href={profile.resume} download="Thaanushee_Balamurugan_Resume.pdf"><Download size={20} /><span>Resume<strong>Download PDF</strong></span></a>
      </div>
    </Section>
  )
}
