import { Sponsor } from "../models/Sponsor";
import { Response,Request} from 'express'
import bcryptjs from 'bcryptjs';
export const getSponsors = async(req: Request,res: Response)=> {
    const sponsors = await Sponsor.findAndCountAll({where: {state:true}});
    

    res.json({
        ok: true,
        sponsors,
    });
};

export const getSponsor = async(req:Request, res:Response)=> {
    const {id}  = req.params;
    const sponsor = await Sponsor.findByPk(id);
    res.json({
        ok:true,
        sponsor
    });
}
export const getSponsorByEmail = async(req:Request, res:Response)=> {
    const {email}  = req.params;
    const sponsor = await Sponsor.findOne({where: {email: email}});
    res.json({
        ok:true,
        sponsor
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


export const deleteSponsor = async(req:Request, res:Response)=> {
    const {id} = req.params


    try {
        const sponsor = await Sponsor.findByPk(id);
       await sponsor?.update({state:false});
       await sponsor?.save();

        res.json({
            ok: true,
            msg: "Sponsor Deleted",
            sponsor,
        })
    } catch (error) {
        console.log(`Hable con el administrador: ${error}`);
        return res.status(500).json({
            ok: false,
            msg: "Hable con el admnistrador: "+ error
        });
        
    }


}