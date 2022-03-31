import { Router } from 'express';
import * as controllers from '../controllers/episodes.js';

const router = Router();

router.get('/episodes', controllers.getEpisodes);
router.get('/episodes/:id', controllers.getEpisode);
router.post('/episodes', controllers.createEpisode);
router.put('/episodes/:id', controllers.updatedEpisode);
router.delete('/episodes/:id', controllers.deleteEpisode);

export default router;
