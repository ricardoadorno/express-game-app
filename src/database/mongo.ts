import mongoose from 'mongoose';

async function connectMongo() {
  if (!process.env.MONGO_DB_URI) {
    console.error('Missing MONGO_DB_URI env variable');
    process.exit(1);
  }

  mongoose
    .connect(process.env.MONGO_DB_URI)
    .then(() => {
      console.log('Successfully connected to database');
    })
    .catch((error) => {
      console.log('database connection failed. exiting now...');
      console.error(error);
      process.exit(1);
    });
}

export default connectMongo;
