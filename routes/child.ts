import { Router } from "express";
import { getChilds, postChild, getChild, deleteChild, getChildByCode } from '../controllers/child';
import { check } from 'express-validator';
import { validateFields } from '../middlewares/validate_fields';
import { childExistsById, childExistsByCode } from '../helpers/db-validator';
const router = Router();

router.get("/",getChilds);
router.get("/code/:code",[
    check("code").custom(childExistsByCode),
    validateFields
],getChildByCode);
router.get("/:id",[
    check("id", "ID not valid").isInt(),
    check("id").custom(childExistsById),
    validateFields
],getChild);
router.post("/",[
    check("name", "Name is required").not().isEmpty(),
    check("lastName", "LastName is required").not().isEmpty(),
    check("community", "Community is required").not().isEmpty(),
    check("birthday", "Birthday is required").not().isEmpty(),
    check("birthday", "Birthday are you add isn't real").isDate(),
    check("code", "Code is required").not().isEmpty(),
    check("gender", "Gender is required").not().isEmpty(),
    check("imgSrc", "Image Not valid").isString(),
    validateFields
],postChild);
router.delete("/:id",[
    check("id", "ID not valid").isInt(),
    check("id").custom(childExistsById),
    validateFields
],deleteChild);


export default router;
