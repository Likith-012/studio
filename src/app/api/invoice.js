export default function handler(req, res) {
    if (req.method === 'POST') {
      const { projectId, amount, dueDate } = req.body;
  
      // Create and store invoice logic here (e.g., save to DB)
  
      return res.status(200).json({ message: 'Invoice created', projectId, amount, dueDate });
    }
  
    res.status(405).json({ message: 'Method Not Allowed' });
  }
  