const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  invertDate: Date,
  shootDate: Date,
  jobCardNumber: { type: String, unique: true },
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  currentStage: {
    type: String,
    enum: ['initiated', 'scheduled', 'photography', 'editing', 
           'qc_review', 'manager_approval', 'accounts', 'completed'],
    default: 'initiated'
  },
  tasks: [{
    type: { type: String, enum: ['shoot', 'edit', 'qc'] },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, default: 'pending' }
  }],
  approvals: {
    qc: { approved: Boolean, comment: String },
    manager: { approved: Boolean, comment: String },
    accounts: { approved: Boolean, paymentId: String }
  },
  images: [String],
  invoice: String
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);