const projectSchema = new mongoose.Schema({
    // Add workflow stages
    currentStage: {
      type: String,
      enum: ['invert-initiated', 'shoot-scheduled', 'image-upload', 'editing', 'qc-review', 
             'manager-approval', 'accounts-processing', 'completed'],
      default: 'invert-initiated'
    },
    // Add task assignments
    tasks: [{
      type: { type: String, enum: ['photography', 'editing', 'qc'] },
      assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      status: { type: String, default: 'pending' }
    }],
    // Add approval tracking
    approvals: {
      qc: { type: Boolean, default: false },
      manager: { type: Boolean, default: false },
      accounts: { type: Boolean, default: false }
    }
  });