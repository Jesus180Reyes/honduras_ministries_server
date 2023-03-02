import { Sponsor } from "../models/Sponsor";
import { Response,Request} from 'express'
import bcryptjs from 'bcryptjs';
export const getSponsors = async(req: Request,res: Response)=> {
    const sponsors = await Sponsor.findAndCountAll();
    

    res.json({
        ok: true,
        sponsors,
    });
}

export const postSponsor = async (req:Request, res: Response)=> {


    try {
        const { body} =  req
        const salt = bcryptjs.genSaltSync();
        body.password = bcryptjs.hashSync(body.password,salt);
        const sponsor = await Sponsor.create(body);
        sponsor.save();

        res.json({
            ok:true,
            msg: "Sponsor Created Succesfully",
            sponsor,
        });

    } catch (error) {
        console.error(`Hable con el adminstrador: ${error} `);
        return res.status(500).json({
            ok:false,
            msg: "Hable con el administrador " +error 
        });
    }
}