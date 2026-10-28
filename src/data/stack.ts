// Stack Matrix content. status: 'pro' = professional, 'exploring' = labs/learning, 'learning' = studying
import type { Status } from './site'

export interface Tool { name: string; icons: string[]; status: Status }
export interface Also { name: string; status: Status }
export interface StackGroup { title: string; big: boolean; grow?: boolean; tools: Tool[]; also?: Also[] }

const si = (slug: string, color = '') => `https://cdn.simpleicons.org/${slug}${color ? '/' + color : ''}`
const dv = (n: string, v = 'original') => `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${n}/${n}-${v}.svg`
const tool = (name: string, icons: string[], status: Status = 'pro'): Tool => ({ name, icons, status })
const also = (names: string[], status: Status = 'pro'): Also[] => names.map(name => ({ name, status }))

export const stack: StackGroup[] = [
  { title: 'Languages & Frameworks', big: false,
    tools: [tool('React.js', [si('react')]), tool('Angular', [si('angular', 'dd0031'), dv('angularjs')]), tool('TypeScript', [si('typescript')]),
      tool('JavaScript', [si('javascript')]), tool('HTML5', [si('html5'), dv('html5')]), tool('CSS3', [si('css3'), dv('css3')]),
      tool('Go', [si('go')]), tool('Node.js', [si('nodedotjs')]), tool('Python', [si('python')]),
      tool('Java', [si('openjdk'), dv('java')]), tool('Vue.js', [si('vuedotjs'), dv('vuejs')]),
      tool('Express.js', [si('express', 'ffffff')]), tool('Spring Boot', [si('springboot')]), tool('C++', [si('cplusplus'), dv('cplusplus')])],
    also: also(['Responsive design', 'Reusable components', 'REST APIs', 'Microservices', 'Event-driven architecture']) },
  { title: 'Databases & Messaging', big: true, grow: true,
    tools: [tool('MongoDB', [si('mongodb')]), tool('MySQL', [si('mysql')]), tool('Apache Kafka', [si('apachekafka', 'ffffff')])] },
  { title: 'Cloud Platforms', big: true,
    tools: [tool('AWS', [si('amazonaws', 'ffffff'), dv('amazonwebservices', 'plain-wordmark')]),
      tool('Google Cloud', [si('googlecloud'), dv('googlecloud')], 'exploring'), tool('Azure', [si('microsoftazure'), dv('azure')], 'exploring')],
    also: [...also(['AWS EC2', 'AWS S3', 'AWS IAM', 'AWS CloudWatch']),
      ...also(['GCP Compute Engine', 'GCP Cloud Run', 'GCP Cloud Storage', 'GCP GKE', 'GCP Cloud Monitoring', 'Azure VMs', 'Azure App Service', 'Azure Storage', 'Azure AKS', 'Azure Monitor'], 'exploring')] },
  { title: 'DevOps & Tools', big: true,
    tools: [tool('Docker', [si('docker')]), tool('Kubernetes', [si('kubernetes')]), tool('Ansible', [si('ansible')]), tool('Git', [si('git')]),
      tool('GitLab CI/CD', [si('gitlab')]), tool('Shell', [si('gnubash')]), tool('Linux', [si('linux')])],
    also: also(['Unix', 'Deployment automation']) },
  { title: 'AI Agents & Automation', big: true,
    tools: [tool('OpenAI API', [si('openai', 'ffffff')])],
    also: also(['Large Language Model (LLM) Integration', 'Prompt Engineering', 'API Integration'], 'learning') },
  { title: 'Testing & Practices', big: true,
    tools: [tool('JUnit', [si('junit5')]), tool('Jest', [si('jest')]), tool('Playwright', [si('playwright')])],
    also: also(['Unit testing', 'Integration testing', 'Code reviews', 'Agile/Scrum', 'Troubleshooting']) },
]
