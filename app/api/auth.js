import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const users = [
  // Example users (in production, use a real DB)
  { id: 1, email: 'photographer@example.com', password: 'password', role: 'photographer' },
  { id: 2, email: 'editor@example.com', password: 'password', role: 'editor' },
  { id: 3, email: 'qc@example.com', password: 'password', role: 'qc' },
  { id: 4, email: 'studio@example.com', password: 'password', role: 'studio' },
  { id: 5, email: 'accounts@example.com', password: 'password', role: 'accounts' },
  { id: 6, email: 'client@example.com', password: 'password', role: 'client' }
];

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    const user = users.find(user => user.email === email);
    if (!user) return res.status(401).json({ message: 'Invalid email or password' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid email or password' });

    const token = jwt.sign({ userId: user.id, role: user.role }, 'your-secret-key', { expiresIn: '1h' });

    return res.json({ token });
  }

  res.status(405).json({ message: 'Method Not Allowed' });
}
