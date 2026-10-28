// Edit `status` freely: 'professional' | 'exploring' | 'planned'
export type Status = 'professional' | 'exploring' | 'planned'
export interface Item { name: string; status: Status }
export interface Discipline {
  id: string; num: string; title: string; summary: string
  build: string[]; challenges: string[]; tech: Item[]
}
const p = (n: string): Item => ({ name: n, status: 'professional' })
const e = (n: string): Item => ({ name: n, status: 'exploring' })
const l = (n: string): Item => ({ name: n, status: 'planned' })

export const statusLabel: Record<Status, string> = {
  professional: 'Professional experience', exploring: 'Exploring', planned: 'Planned',
}

export const disciplines: Discipline[] = [
  { id: 'frontend', num: '01', title: 'Frontend Development',
    summary: 'My core capability: responsive, data-heavy interfaces built from reusable components and wired to REST APIs.',
    build: ['Data tables with pagination, sorting, search, filtering and column visibility', 'Searchable dropdowns and validated, API-driven forms', 'Reusable component systems across React and Angular apps'],
    challenges: ['Keeping large datasets fast and usable', 'Consistent components across teams and features', 'Accessible, responsive layouts'],
    tech: ['React.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'REST API integration'].map(p) },
  { id: 'backend', num: '02', title: 'Backend Development',
    summary: 'Application services and APIs, from containerized Go microservices to event processing with Kafka.',
    build: ['REST APIs for application features and system-health metrics', 'Containerized Go microservices backed by MongoDB and Kafka', 'Log collection and event-processing services'],
    challenges: ['Clear contracts between frontend and services', 'Reliable event handling and troubleshooting', 'Testing services with unit and integration tests'],
    tech: ['Go', 'Node.js', 'Python', 'REST APIs', 'Microservices', 'MongoDB', 'Apache Kafka', 'Docker', 'Kubernetes', 'JUnit'].map(p) },
  { id: 'ai', num: '03', title: 'AI Agent Development',
    summary: 'An area I am learning and building toward. An agent differs from a chatbot because it chooses tools, completes multi-step tasks, and returns results. No production AI work is claimed here.',
    build: ['Planned: AI Developer Assistant that proposes steps and uses approved tools', 'Planned: Cloud Operations Assistant that explains deployment logs', 'Planned: Document Assistant that answers with source references'],
    challenges: ['Reliability, evaluation and logging', 'Security and human approval for sensitive actions', 'Keeping context and memory manageable'],
    tech: ['LLM APIs', 'Tool calling', 'RAG', 'Embeddings and vector search', 'LangChain / LangGraph', 'Model Context Protocol'].map(l) },
  { id: 'cloud', num: '04', title: 'Cloud and DevOps Engineering',
    summary: 'AWS deployment and monitoring support, plus automation with Docker, Kubernetes, Ansible and CI/CD. GCP and Azure are listed as exploration areas, not professional experience.',
    build: ['AWS deployment and monitoring support for containerized apps', 'Server configuration and deployment automation with Ansible and shell scripts', 'CI/CD workflows with Git on Linux and Unix'],
    challenges: ['Repeatable deployments', 'Monitoring and failure investigation', 'Secure configuration and secrets handling'],
    tech: [...['AWS', 'Docker', 'Kubernetes', 'Ansible', 'CI/CD', 'Git', 'Linux and Unix', 'Shell scripting'].map(p),
      ...['Google Cloud (Cloud Run, GKE)', 'Azure (App Service, AKS)'].map(e)] },
]

