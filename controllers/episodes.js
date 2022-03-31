import Episode from '../models/episode.js';

export const getEpisodes = async (req, res) => {
  try {
    const episodes = await Episode.find();
    res.json(episodes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getEpisode = async (req, res) => {
  try {
    const { id } = req.params;
    const episode = await Episode.findById(id);
    if (episode) {
      return res.json(episode);
    }
    res.status(400).json({ message: 'Episode not found!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createEpisode = async (req, res) => {
  try {
    const episode = new Episode(req.body);
    await episode.save();
    res.status(201).json(episode);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateEpisode = async (req, res) => {
  try {
    const { id } = req.params;
    const episode = await Episode.findByIdAndUpdate(id, req.body);
    res.status(200).json(episode);
  } catch (error) {
    console.error(error);
    res.status(304).json({ error: error.message });
  }
};

export const deleteEpisode = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Episode.findByIdAndRemove(id);
    if (deleted) {
      return res.status(200).send('Episode deleted!');
    }
    throw new Error('Episode not found!');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
