const projects = [
    { id: 1, name: 'Project 1', status: 'Pending' },
    { id: 2, name: 'Project 2', status: 'In Progress' },
    { id: 3, name: 'Project 3', status: 'Completed' }
  ];
  
  export default function handler(req, res) {
    res.status(200).json({ projects });
  }
  