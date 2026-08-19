/**
 * Skills, grouped by category.
 *
 * Each entry is { name, icon } where `icon` is a Simple Icons slug
 * (https://simpleicons.org). The logo is rendered automatically from the CDN,
 * so adding a skill is as easy as adding a line and its slug.
 *
 * Examples: { name: 'Go', icon: 'go' }, { name: 'Kubernetes', icon: 'kubernetes' }
 */
export default [
  {
    category: 'Languages',
    items: [
      { name: 'Python', icon: 'python' },
      { name: 'C#', icon: 'csharp' },
      { name: 'Java', icon: 'java' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'C', icon: 'c' },
      { name: 'C++', icon: 'cplusplus' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Bash', icon: 'gnubash' },
      { name: 'PHP', icon: 'php' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      { name: 'ASP.NET', icon: 'dotnet' },
      { name: 'Angular', icon: 'angular' },
      { name: 'Playwright', icon: 'playwright' },
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'React.js', icon: 'react' },
      { name: 'Flask', icon: 'flask' },
      { name: 'TensorFlow', icon: 'tensorflow' },
      { name: 'PyTorch', icon: 'pytorch' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Oracle', icon: 'oracle' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Cassandra', icon: 'apachecassandra' },
      { name: 'Amazon DynamoDB', icon: 'amazondynamodb' },
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'Jira', icon: 'jira' },
      { name: 'Bamboo', icon: 'bamboo' },
      { name: 'AWS', icon: 'amazonwebservices' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Jenkins', icon: 'jenkins' },
      { name: 'Jest', icon: 'jest' },
    ],
  },
];
