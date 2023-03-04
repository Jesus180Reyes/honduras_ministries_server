import { Router} from 'express'
import { getSponsors, postSponsor, getSponsor, deleteSponsor, getSponsorByEmail } from '../controllers/sponsor';
import { check } from 'express-validator';
import { validateFields } from '../middlewares/validate_fields';
import { emailExists, sponsorIdExists, sponsorEmailExists, sponsorState } from '../helpers/db-validator';

const router = Router();

router.get("/", getSponsors);
router.get("/:id",[
    check("id", "ID not valid").isInt(),
    check("id").custom(sponsorIdExists),
    validateFields
], getSponsor);
router.get("/email/:email",[
    check("email", "Email not valid").isEmail(),
    check("email").custom(sponsorEmailExists),
    check("email").custom(sponsorState),
    validateFields
], getSponsorByEmail);
router.post("/",[
    check("name", "Name is required").not().isEmpty(),
    check("lastName", "LastName is required").not().isEmpty(),
    check("email", "Email is required").not().isEmpty(),
    check("email", "Email not valid").isEmail(),
    check("email").custom(emailExists),
    check("address", "Address is required").not().isEmpty(),
    check("password", "Password is required").not().isEmpty(),
    check("password", "The password is so low, add a strongest password").isLength({min:6}),
    validateFields
], postSponsor);
router.delete("/:id",deleteSponsor);



export default router;