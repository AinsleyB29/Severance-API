import db from '../db/connection.js';
import Episode from '../models/episode.js';
import episodes from './episodes.json';

const insertData = async () => {
  // reset database
  db.dropDatabase();

  // insert episodes into database
  await Episode.insertMany(episodes);

  // close db connection
  db.close();
};

insertData();
