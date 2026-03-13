const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Look here! The password is now ballabh123 and there are no confusing symbols.
const MONGO_URI = "mongodb+srv://ballabh:ballabh123@cluster0.6tuaxdp.mongodb.net/FinQuest?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch(err => {
      console.log("❌ Connection Error Details:");
      console.log(err.message);
  });

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  points: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  completedGames: [String]
});

const User = mongoose.model('User', UserSchema);

app.post('/api/sync-profile', async (req, res) => {
  try {
    const { email, points, level, completedGames } = req.body;
    const user = await User.findOneAndUpdate(
      { email },
      { points, level, completedGames },
      { upsert: true, new: true }
    );
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/user/:email', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (user) res.json(user);
    else res.status(404).send("User not found");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
