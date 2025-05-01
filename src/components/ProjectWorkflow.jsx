import { useEffect } from 'react';
import { io } from 'socket.io-client';

const ProjectWorkflow = ({ project }) => {
  useEffect(() => {
    const socket = io(process.env.REACT_APP_API_URL);
    
    socket.on('stage-update', (updatedProject) => {
      // Update your state here (Redux/Context)
      console.log('Real-time update:', updatedProject);
    });

    return () => socket.disconnect();
  }, [project._id]);

  return (
    <div className="workflow-steps">
      {['initiated', 'scheduled', 'photography', 'editing', 
        'qc_review', 'manager_approval', 'accounts', 'completed'].map((stage) => (
        <div
          key={stage}
          className={`step ${project.currentStage === stage ? 'active' : ''}`}
        >
          <div className="step-marker"></div>
          <div className="step-label">
            {stage.replace(/_/g, ' ')}
          </div>
        </div>
      ))}
    </div>
  );
};