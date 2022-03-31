import { Router } from 'express';
import episodesRoutes from './episodes.js';

const router = Router();

router.get('/', (req, res) => res.send('This is the api root!'));

router.use('/', episodesRoutes);

export default router;
