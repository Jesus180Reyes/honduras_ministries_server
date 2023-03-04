import { Router } from 'express';
import { loginAuthSponsor } from '../controllers/auth';
import { check } from 'express-validator';
import { validateFields } from '../middlewares/validate_fields';
import { sponsorEmailExists } from '../helpers/db-validator';


const router = Router();

router.post("/",[
    check("email", "Email is Required to login").not().isEmpty(),
    check("password", "Password is Required to login").not().isEmpty(),
    check("email","Email not valid").isEmail(),
    check("password", "Password so Low").isLength({min:6}),
    check("email").custom(sponsorEmailExists),
    validateFields
],loginAuthSponsor);


export default router;