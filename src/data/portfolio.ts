import { Monitor, Server, Layers, Network, Workflow, Cloud, type LucideIcon } from 'lucide-react'

export const profile = {
  name: 'Thaanushee Balamurugan',
  first: 'Thaanushee',
  role: 'Full Stack Developer',
  email: 'thaanusheebalamurugan12@gmail.com',
  linkedin: 'https://linkedin.com/in/thaanushee-balamurugan-21b827256',
  github: '', // TODO: paste your GitHub profile URL here, e.g. 'https://github.com/yourname'
  resume: '/Thaanushee_Balamurugan_Resume.pdf', // put the PDF in /public with this exact name
  location: 'Chennai, India',
}

export const navLinks = [
  { label: 'Home', id: 'home' }, { label: 'About', id: 'about' }, { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' }, { label: 'Projects', id: 'projects' }, { label: 'Contact', id: 'contact' },
]

export interface SkillGroup { title: string; primary: string[]; familiar: string[] }
// Primary = daily-use strengths. Familiar = working exposure. Adjust honestly.
export const skillGroups: SkillGroup[] = [
  { title: 'Frontend', primary: ['React.js', 'TypeScript', 'JavaScript'], familiar: ['Angular', 'HTML5', 'CSS3'] },
  { title: 'Backend and APIs', primary: ['Go', 'Node.js', 'REST APIs'], familiar: ['Python', 'Microservices', 'Event-driven architecture'] },
  { title: 'Cloud and DevOps', primary: ['Docker', 'Kubernetes', 'CI/CD', 'Git'], familiar: ['AWS', 'Ansible', 'Shell scripting', 'Linux and Unix'] },
  { title: 'Databases and Messaging', primary: ['MongoDB', 'Apache Kafka'], familiar: ['MySQL'] },
  { title: 'Testing and Engineering', primary: ['Unit testing', 'Code reviews', 'Agile/Scrum'], familiar: ['JUnit', 'Integration testing'] },
]

export interface Job { title: string; period: string; points: string[] }
export const company = 'Kyndryl Solutions Private Limited, Chennai, India'
export const jobs: Job[] = [
  { title: 'Senior Associate, Software Engineer', period: 'April 2024 – Present', points: [
    'Develop full-stack features using React, Angular, TypeScript, Go, and Python.',
    'Build reusable UI components and integrate REST APIs.',
    'Work with containerized Go microservices using Docker, Kubernetes, MongoDB, and Kafka.',
    'Support AWS deployment and monitoring.',
    'Write JUnit tests and contribute to application framework upgrades.' ] },
  { title: 'Associate Software Engineer', period: 'July 2022 – March 2024', points: [
    'Developed responsive Angular and TypeScript applications.',
    'Participated in sprint planning, code reviews, and defect resolution.',
    'Automated server configuration and deployment tasks using Ansible and shell scripting.',
    'Worked with Linux, Unix, Windows environments, Git, and CI/CD workflows.' ] },
]

export interface Project { name: string; tags: string[]; text: string; note?: string }
export const projects: Project[] = [
  { name: 'Bridge Platform', tags: ['React.js', 'TypeScript', 'REST APIs'],
    text: 'Developed searchable dropdowns and sortable, paginated data tables for large datasets. Integrated REST APIs and created reusable components while collaborating with cross-functional teams on feature development and fixes.' },
  { name: 'Inventory Service', tags: ['React.js', 'TypeScript', 'REST APIs'],
    text: 'Built data-table functionality with pagination, sorting, search, filtering, and show/hide column options to improve usability when working with large datasets.' },
]

export interface Service { title: string; text: string; icon: LucideIcon }
export const services: Service[] = [
  { title: 'Frontend Development', icon: Monitor, text: 'Responsive, reusable React and Angular interfaces built with TypeScript.' },
  { title: 'Backend API Development', icon: Server, text: 'REST APIs in Go and Node.js, designed to be clear and maintainable.' },
  { title: 'Full Stack Applications', icon: Layers, text: 'Features delivered end to end, from UI to API to data store.' },
  { title: 'Microservices and Event-Driven Systems', icon: Network, text: 'Containerized services that communicate through Kafka.' },
  { title: 'CI/CD and Deployment Automation', icon: Workflow, text: 'Pipelines, Ansible, and shell scripts that make releases repeatable.' },
  { title: 'Cloud-Native Application Support', icon: Cloud, text: 'Docker, Kubernetes, and AWS deployment and monitoring support.' },
]

export const steps = ['Understand requirements', 'Design the solution', 'Develop and integrate', 'Test and review', 'Deploy and monitor', 'Improve and maintain']
