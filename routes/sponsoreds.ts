import { Router } from 'express';
import { getChildsSponsoredsById, getChildSponsoreds, postChildSponsoreds } from '../controllers/sponsoreds';
import { check } from 'express-validator';
import { validateFields } from '../middlewares/validate_fields';
import { sponsoredsExistsById, sponsorIdExists, childExistsById } from '../helpers/db-validator';
const router = Router();

router.get("/",getChildSponsoreds);
router.get("/:sponsorid",[
    check("sponsorid", "ID is required").not().isEmpty(),
    check("sponsorid", "ID not valid").isInt(),
    check("sponsorid").custom(sponsoredsExistsById),
    validateFields
],getChildsSponsoredsById);
router.post("/",[
    check("sponsor").custom(sponsorIdExists),
    check("child").custom(childExistsById),
    validateFields
],
 postChildSponsoreds);



export default router;