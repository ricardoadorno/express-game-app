import mongoose from 'mongoose';

const gamesSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: String,
  description: String,
  price: Number,
  rating: Number,
  releaseDate: Date,
  cover: String,
  tags: [String],
});

const Games = mongoose.model('games', gamesSchema);

export default Games;
