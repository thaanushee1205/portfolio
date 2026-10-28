// All editable content. status: 'pro' = professional experience, 'exploring' = hands-on labs/learning, 'learning' = studying/planned
export type Status = 'pro' | 'exploring' | 'learning'
export interface Tech { name: string; slug?: string; status: Status }
const t = (name: string, slug?: string, status: Status = 'pro'): Tech => ({ name, slug, status })
export const statusText: Record<Status, string> = { pro: 'Professional', exploring: 'Exploring', learning: 'Learning' }

export const stats = [
  { value: '4+', label: 'years of professional experience' },
  { value: '3', label: 'featured professional projects' },
  { value: 'Full stack', label: 'plus cloud engineering' },
]

export const clouds = [
  { name: 'Amazon Web Services', note: 'Resume-supported exposure: deployment and monitoring.', services: ['EC2', 'S3', 'IAM', 'CloudWatch'].map(n => t(n)) },
  { name: 'Google Cloud Platform', note: 'Hands-on labs and learning. Not professional experience.', services: ['Compute Engine', 'Cloud Run', 'Cloud Storage', 'Google Kubernetes Engine', 'Cloud Monitoring'].map(n => t(n, undefined, 'exploring')) },
  { name: 'Microsoft Azure', note: 'Hands-on labs and learning. Not professional experience.', services: ['Azure Virtual Machines', 'Azure App Service', 'Azure Storage', 'Azure Kubernetes Service', 'Azure Monitor'].map(n => t(n, undefined, 'exploring')) },
]

export interface Group { title: string; items?: Tech[]; subs?: { name: string; items: Tech[] }[] }
export const groups: Group[] = [
  { title: 'Frontend Engineering', items: [t('React.js', 'react'), t('Angular', 'angular'), t('TypeScript', 'typescript'), t('JavaScript', 'javascript'), t('HTML5', 'html5'), t('CSS3', 'css3'), t('Responsive design'), t('Reusable components'), t('REST API integration')] },
  { title: 'Backend Engineering', items: [t('Go', 'go'), t('Node.js', 'nodedotjs'), t('Python', 'python'), t('REST APIs'), t('Microservices'), t('Event-driven architecture'), t('Apache Kafka', 'apachekafka')] },
  { title: 'Databases & Messaging', items: [t('MongoDB', 'mongodb'), t('MySQL', 'mysql'), t('Apache Kafka', 'apachekafka')] },
  { title: 'Cloud Platforms', subs: clouds.map(c => ({ name: c.name, items: c.services })) },
  { title: 'DevOps & Automation', items: [t('Docker', 'docker'), t('Kubernetes', 'kubernetes'), t('Ansible', 'ansible'), t('Git', 'git'), t('GitLab CI/CD', 'gitlab'), t('Shell scripting', 'gnubash'), t('Linux', 'linux'), t('Unix')] },
  { title: 'AI Agents & Intelligent Automation', items: ['LLM integrations', 'AI agent workflows', 'Tool calling', 'RAG', 'Embeddings', 'Python', 'Node.js', 'LangChain', 'LangGraph', 'MCP'].map(n => t(n, n === 'LangChain' ? 'langchain' : undefined, 'learning')) },
  { title: 'Testing & Engineering Practices', items: [t('JUnit', 'junit5'), t('Unit testing'), t('Integration testing'), t('Code reviews'), t('Agile/Scrum'), t('Application troubleshooting')] },
]

export interface Project { name: string; tags: string[]; short: string; overview: string; problem: string; contribution: string; architecture: string; challenges: string; approach: string; outcome: string }
export const projects: Project[] = [
  { name: 'Bridge Platform', tags: ['React.js', 'TypeScript', 'REST APIs'],
    short: 'Developed reusable interface components, searchable dropdowns, and sortable, paginated data tables for large datasets, integrating REST APIs and collaborating with cross-functional teams.',
    overview: 'A professional web application interface for working with large datasets. Details are kept general to respect employer confidentiality.',
    problem: 'Users needed to find and work with records in large datasets without slow or cluttered screens.',
    contribution: 'Built searchable dropdowns, sortable and paginated data tables, and reusable components; integrated REST APIs; collaborated with cross-functional teams on features and fixes.',
    architecture: 'React and TypeScript frontend consuming REST APIs.',
    challenges: 'Keeping large tables usable and keeping components reusable across features.',
    approach: 'Reusable typed components with API-driven data, pagination and sorting.',
    outcome: 'No verified metrics are published for this project.' },
  { name: 'Inventory Service', tags: ['React.js', 'TypeScript', 'REST APIs'],
    short: 'Implemented searchable, sortable, paginated data tables with filtering and configurable column visibility to make large datasets easier to navigate.',
    overview: 'A professional inventory-focused interface. Details are kept general to respect employer confidentiality.',
    problem: 'Large inventory-style datasets were hard to scan and narrow down.',
    contribution: 'Implemented pagination, sorting, search, filtering and show/hide column options.',
    architecture: 'React and TypeScript frontend consuming REST APIs.',
    challenges: 'Balancing flexible table controls with a clear, fast interface.',
    approach: 'Composable table features that can be switched on per screen.',
    outcome: 'No verified metrics are published for this project.' },
  
  { name: 'DayPilot AI', tags: ['React.js', 'TypeScript', 'Node.js', 'REST APIs', 'LLM API'],
    short: 'Planned full-stack productivity application for AI-generated plans, rescheduling, and progress summaries.',
    overview: 'A planned full-stack productivity application for managing tasks, with AI-generated plans, rescheduling, and progress summaries.',
    problem: 'Personal planning can be difficult to organize, reschedule, and summarize consistently.',
    contribution: 'Planned end-to-end task modeling, planning and rescheduling flows, AI-generated plans, and progress summaries.',
    architecture: 'Draft: React and TypeScript frontend, REST API backend, database for tasks, and AI model integration with API keys kept on the backend.',
    challenges: 'Keeping task plans useful while allowing safe edits, rescheduling, and reliable progress summaries.',
    approach: 'A planned full-stack implementation focused on clear task flows and backend-protected AI integration.',
    outcome: 'Not built yet, so there are no outcomes to report.' },
  { name: 'FlowPilot', tags: ['Go', 'REST APIs', 'Docker', 'LLM API'],
    short: 'Planned workflow engine with tool calling, approval gates, logs, and retries.',
    overview: 'Reuses the productivity domain from DayPilot AI and adds a separate workflow engine with tool calling, approval gates, logs, and retries.',
    problem: 'AI-assisted workflows need controlled execution, human approval, visibility, and repeatable failure recovery.',
    contribution: 'Planned workflow engine, tool-calling layer, approval gates, step-level logs, and retry handling.',
    architecture: 'Draft: a separate workflow service calls tools, pauses at approval gates, logs each step, and retries failed steps.',
    challenges: 'Handling sensitive steps, failed tools, retries, and human approval without losing workflow state.',
    approach: 'A separate service designed around explicit steps, approval gates, logs, and idempotent retries.',
    outcome: 'Not built yet, so there are no outcomes to report.' },
  { name: 'StockPilot', tags: ['React.js', 'TypeScript', 'REST APIs'],
    short: 'Planned smart inventory application for stock tracking, alerts, and reorder suggestions.',
    overview: 'A planned smart inventory management application for stock tracking and reorder suggestions.',
    problem: 'Inventory changes and low-stock risk need to be visible and easy to act on.',
    contribution: 'Planned stock tracking, low-stock alerts, and reorder suggestions, to be refined when the scope is final.',
    architecture: 'Draft: React and TypeScript frontend consuming REST APIs backed by a database for stock data.',
    challenges: 'Defining reliable stock rules and an accurate low-stock and reorder model.',
    approach: 'Start with essential stock CRUD, alerts, and a simple reorder suggestion model.',
    outcome: 'Not built yet, so there are no outcomes to report.' },
]

export const labs = [
  { name: 'AI Agent Development Lab', status: 'Planned' }, { name: 'AWS Cloud Deployment Lab', status: 'Planned' },
  { name: 'GCP Cloud Engineering Lab', status: 'Planned' }, { name: 'Azure Cloud Engineering Lab', status: 'Planned' },
  { name: 'Full Stack Application Demo', status: 'In progress' },
]

export const aiDemos = [
  { name: 'AI Developer Assistant', text: 'Helps break down software tasks and proposes implementation steps.' },
  { name: 'Cloud Operations Assistant', text: 'Analyzes supplied deployment logs and suggests troubleshooting steps.' },
  { name: 'Intelligent Document Assistant', text: 'Retrieves information from documents and answers with source references.' },
]

export const jobs = [
  { title: 'Senior Associate, Software Engineer', period: 'April 2024 – Present', points: ['Develop full-stack features using React, Angular, TypeScript, Go, and Python.', 'Build reusable UI components and integrate REST APIs.', 'Work with containerized Go microservices using Docker, Kubernetes, MongoDB, and Kafka.', 'Support AWS deployment and monitoring.', 'Write JUnit tests and contribute to application framework upgrades.'] },
  { title: 'Associate Software Engineer', period: 'July 2022 – March 2024', points: ['Developed responsive Angular and TypeScript applications.', 'Participated in sprint planning, code reviews, and defect resolution.', 'Automated server configuration and deployment tasks using Ansible and shell scripting.', 'Worked with Linux, Unix, Windows environments, Git, and CI/CD workflows.'] },
]
