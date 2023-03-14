import {Request,Response} from 'express'
import { Child } from '../models/Child';

export const getChilds = async (req:Request, res: Response)=> {
    const {limit = 5 , gender = undefined} = req.query;
  
    
    const childs  = await Child.findAndCountAll({
        limit: Number(limit),
        where: gender ? {gender:gender} : undefined,
        
    });

    res.json({
        ok: true,
        childs,
    });
}

export const getChild = async (req:Request, res: Response)=> {
    const {id} = req.params;

    const child = await Child.findByPk(id);
    
    res.json({
        ok: true,
        child
    });

}
export const getChildByCode = async (req:Request, res: Response)=> {
    const {code} = req.params;

    const child = await Child.findAndCountAll({where: {code:code}});
    res.json({
        ok: true,
        child
    });

}
export const postChild =async (req:Request, res: Response)=> {
   const {body} = req;
    try {
        const child  = await Child.create(body);
        child.save();   
        res.json({
            ok: true,
            msg: "Child created succesfully",
            child
        });
    } catch (error) {
        console.error("Hable con el administrador: ", error);
        return res.status(500).json({
            ok:false,
            msg: "Hable con el administrador" + error
        })
    }
}


export const deleteChild = async(req:Request, res:Response)=> {
    const {id} = req.params;

    try {
        const child = await Child.findByPk(id);
       await child?.update({state:false});
        child?.save();
        res.json({
            ok: true,
            msg: "Child Deleted",
            child
        });
    } catch (error) {
        console.error(`Hable con el administrador: ${error}`);
        return res.status(500).json({
            ok: false,
            msg: `Hable con el administrador: ${error}`
        });
    }
}