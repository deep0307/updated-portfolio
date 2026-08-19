import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Footer from './components/Footer.jsx';

const ENDPOINTS = ['profile', 'experience', 'projects', 'skills', 'education'];

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all(
      ENDPOINTS.map((name) => fetch(`/api/${name}`).then((res) => res.json())),
    )
      .then(([profile, experience, projects, skills, education]) =>
        setData({ profile, experience, projects, skills, education }),
      )
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return (
      <main className="status">
        Couldn&apos;t load portfolio data. Is the backend running?<br />
        <code>{error}</code>
      </main>
    );
  }

  if (!data) {
    return <main className="status">Loading…</main>;
  }

  return (
    <div className="app">
      <Navbar profile={data.profile} />
      <main>
        <Hero profile={data.profile} />
        <Experience items={data.experience} />
        <Projects items={data.projects} />
        <Skills items={data.skills} />
        <Education items={data.education} />
      </main>
      <Footer profile={data.profile} />
    </div>
  );
}
