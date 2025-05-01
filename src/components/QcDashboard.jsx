import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosConfig';

const QcDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get('/api/projects?stage=qc_review');
      setProjects(res.data);
    };
    fetchProjects();
  }, []);

  const handleApproval = async (approved) => {
    try {
      await axios.post(`/api/projects/${selectedProject}/qc-approval`, { approved });
      alert(`Project ${approved ? 'approved' : 'rejected'}`);
      setSelectedProject(null);
    } catch (err) {
      alert('Approval failed: ' + err.response?.data?.message);
    }
  };

  return (
    <div className="qc-container">
      <h2>QC Review Panel</h2>
      <div className="project-list">
        {projects.map(project => (
          <div 
            key={project._id} 
            className={`project-card ${selectedProject === project._id ? 'active' : ''}`}
            onClick={() => setSelectedProject(project._id)}
          >
            <h3>{project.client}</h3>
            <p>Images: {project.images?.edited?.length || 0}</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="review-actions">
          <button onClick={() => handleApproval(true)}>Approve</button>
          <button onClick={() => handleApproval(false)}>Reject</button>
        </div>
      )}
    </div>
  );
};