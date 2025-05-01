import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { assignTask } from '../redux/actions';

const ManagerDashboard = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector(state => state.projects);
  
  const handleAssign = (projectId, taskType, userId) => {
    dispatch(assignTask(projectId, taskType, userId));
  };

  return (
    <div className="dashboard">
      <h2>Workflow Management</h2>
      {projects.map(project => (
        <div key={project._id} className="project-card">
          <h3>{project.client}</h3>
          <TaskAssignment 
            project={project}
            onAssign={handleAssign}
          />
        </div>
      ))}
    </div>
  );
};