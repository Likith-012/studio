import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Workflow() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const res = await axios.get(`/api/projects/${projectId}`);
      setProject(res.data);
    };
    fetchProject();
  }, [projectId]);

  const handleStageUpdate = async (newStage) => {
    await axios.post(`/api/projects/progress/${projectId}`, { stage: newStage });
    // Add real-time update logic
  };

  return (
    <div className="workflow-container">
      {project && (
        <>
          <StageIndicator currentStage={project.currentStage} />
          <StageActions 
            currentStage={project.currentStage}
            userRole={currentUser.role}
            onUpdate={handleStageUpdate}
          />
        </>
      )}
    </div>
  );
}