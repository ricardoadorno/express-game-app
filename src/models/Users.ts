import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: String,
    email: String,
    password: String,
    favoriteGame: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "games",
    },
  },
  { versionKey: false },
);

const Users = mongoose.model("users", usersSchema);

export default Users;
