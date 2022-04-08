import mongoose from 'mongoose';
import chalk from 'chalk';

// Setting up connection for MongoDB
const MONGODB_URI =
  process.env.PROD_MONGODB ||
  'mongodb+srv://AinsleyB29:<thegeneralisme>@severance.azsl3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// This is for Model.findByIdAndUpdate so that we can see what we updated.
mongoose.set('returnOriginal', false);

mongoose
  .connect(MONGODB_URI)
  .catch((error) =>
    console.error('Error connecting to MongoDB: ', error.message)
  );

// Listen to MongoDB Events
mongoose.connection.on('disconnected', () =>
  console.log(chalk.bold(`Disconnected from MongoDB!`))
);

// Listen to any errors while connected to MongoDB
mongoose.connection.on('error', (error) =>
  console.error(chalk.red(`MongoDB connection error: ${error}`))
);

// Export the connection
export default mongoose.connection;
