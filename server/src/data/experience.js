/**
 * Work experience, newest first. Replace the placeholder entries with your own.
 */
export default [
  {
    id: 'exp-1',
    role: 'Software Engineer',
    company: 'Trimble Inc.',
    location: 'Princeton, NJ',
    period: 'Aug. 2024 — Present',
    summary: 'Full-stack development and automated testing for enterprise scheduling products.',
    tech: ['angular', 'dotnet', 'mongodb', 'amazonwebservices', 'playwright', 'typescript'],
    highlights: [
      'Designed and implemented 50+ full-stack features and bug fixes across two enterprise scheduling products (Appian Resource Calendar, Appian Daily Planner) — Angular UI, C#/.NET microservices, and MongoDB — backed by AWS updates and comprehensive test coverage on every change.',
      'Developed a scalable E2E testing framework for ARC and ADP using Playwright (TypeScript), authoring 250+ automated tests over one year and cutting the automation backlog by 45%.',
      'Monitored and stabilized the nightly Bamboo regression suite, triaging 100+ recurring failures to separate flaky tests from real defects, and authored 1000+ unit tests for ARC and ADP.',
    ],
  },
  {
    id: 'exp-2',
    role: 'Algorithm Developer',
    company: 'Autonomous Networks Research Group (ANRG)',
    location: 'Los Angeles, CA',
    period: 'Sept. 2023 — July 2024',
    summary: 'Task graph scheduling algorithm research and implementation for distributed computing.',
    tech: ['python', 'numpy', 'pandas'],
    highlights: [
      'Researched and implemented task graph scheduling algorithms (Min-Min and Sufferage) for distributed computing environments within the SAGA (Scheduling Algorithms Gathered) project.',
      'Extended the scheduling algorithms with financial cost constraints (E-HEFT), improving task execution efficiency and load balancing over baseline heuristics.',
    ],
  },
  {
    id: 'exp-3',
    role: 'Software Engineer Intern',
    company: 'JPMorgan Chase',
    location: 'Mumbai, India',
    period: 'May 2021 — July 2021',
    summary: 'Architectural enhancements and backend optimizations for financial asset record software.',
    tech: ['spring', 'apachecassandra', 'java'],
    highlights: [
      'Enhanced Financial Asset Record Software by analyzing and recommending architectural modifications to incorporate Sub-Line-Of-Business as an independent component during End-Of-Day functionality.',
      'Proposed and designed critical code changes in Spring Boot and database structure modifications in Apache Cassandra to ensure accurate and efficient operations.',
    ],
  },
];
