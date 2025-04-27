// Progress to next stage
router.post('/progress/:projectId', async (req, res) => {
    const project = await Project.findById(req.params.projectId);
    
    // Add state machine logic
    const workflow = {
      'invert-initiated': 'shoot-scheduled',
      'shoot-scheduled': 'image-upload',
      // Add all transition logic
    };
  
    project.currentStage = workflow[project.currentStage];
    await project.save();
    res.status(200).json(project);
  });
  
  // QC Approval Endpoint
  router.post('/qc-approve/:projectId', async (req, res) => {
    const project = await Project.findById(req.params.projectId);
    project.approvals.qc = req.body.approved;
    project.currentStage = req.body.approved ? 'manager-approval' : 'editing';
    await project.save();
    res.status(200).json(project);
  });