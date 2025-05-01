'use client';

import { useEffect, useState } from 'react';

interface Project {
  id: string;
  name: string;
  status: string;
  // Add other properties if needed
}

const ProjectDashboard = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('/api/projects');
      const data = await response.json();
      setProjects(data.projects);
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Project Dashboard</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name} - {project.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDashboard;
