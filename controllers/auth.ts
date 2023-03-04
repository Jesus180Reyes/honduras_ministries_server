import {Request,Response} from 'express'
import { Sponsor } from '../models/Sponsor';
import bcryptjs from 'bcryptjs';
export const loginAuthSponsor =async (req:Request, res:Response)=> {
    const { email, password} = req.body;
    try {
        const sponsor:any = await Sponsor.findOne({where:{email: email}});
        
        if(!sponsor.state){
            return res.status(401).json({
                ok:false,
                msg:"Estas actualmente Baneado de la Plataforma"
            });
        }
        const validPassword = bcryptjs.compareSync(password, sponsor.password);
        if(!validPassword) {
            return res.status(401).json({
                ok:false,
                msg: "Password Incorrect"
            });
        }
        res.json({
            ok:true,
            sponsor,
        })

    } catch (error) {
        console.log(`Hable con el admnistrador ${error}`);
        return res.status(500).json({
            ok:false,
            msg: "Hable con el administrador" + error,
        })
    }
    
}