const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());


// Connect to MongoDB

mongoose.connect('mongodb://127.0.0.1:27017/ProjectManagement', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully 🚀'))
.catch(err => console.error('MongoDB connection error:', err));

// User schema and model
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});


const User = mongoose.model("User", userSchema);

// Register route (optional, to create users for testing)
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ email, password: hashedPassword });
  await newUser.save();
  res.send({ success: true });
});

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  
  if (!user) {
    return res.status(400).send({ error: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send({ error: "Invalid credentials" });
  }
// Generate JWT token
const token = jwt.sign({ userId: user._id }, "your_jwt_secret", { expiresIn: "1h" });
  res.send({ success: true, token });
});


app.use(cors());  // Enable CORS for all routes

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
