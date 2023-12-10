import mongoose from 'mongoose';
import { studiosSchema } from './Studios';

const gamesSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: String,
    description: String,
    price: Number,
    rating: Number,
    releaseDate: Date,
    cover: String,
    tags: [String],
    studio: studiosSchema,
  },
  { versionKey: false }
);

const Games = mongoose.model('games', gamesSchema);

export default Games;
