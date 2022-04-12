import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let Episode = new Schema({
  name: { type: String, required: true },
  season: { type: Number, required: true },
  episode: { type: Number, required: true },
  airdate: { type: String },
  platform: { type: String, required: true },
  runtime: { type: Number },
  rating: { type: Number },
  imdb: { type: String },
  image: { type: String },
  cast: { type: Object, required: true },
  director: { type: String, required: true },
  writers: { type: Array, required: true },
  synopsis: { type: String, required: true },
  genres: { type: Array, required: true },
  certificate: { type: String },
});

export default mongoose.model('episodes', Episode);
