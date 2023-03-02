import { Router} from 'express'
import { getSponsors, postSponsor } from '../controllers/sponsor';

const router = Router();

router.get("/", getSponsors);
router.post("/", postSponsor);



export default router;