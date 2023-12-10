import mongoose from 'mongoose';

const studiosSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: String,
    games: [String],
    location: String,
    logo: String,
  },
  { versionKey: false }
);

const Studios = mongoose.model('studio', studiosSchema);

export { Studios, studiosSchema };
