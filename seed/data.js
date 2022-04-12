import db from '../db/connection.js';
import Episode from '../models/episode.js';
import episodes from './episodes.json' assert { type: 'json' };
const insertData = async () => {
  // reset database
  await Episode.deleteMany({});

  // insert episodes into database
  await Episode.insertMany(episodes);

  // close db connection
  await db.close();
};

insertData();
