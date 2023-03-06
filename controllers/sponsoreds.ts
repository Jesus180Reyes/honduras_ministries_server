import {Request,Response} from 'express'
import { Sponsored } from '../models/Sponsored';
import { Sponsor } from '../models/Sponsor';
import { Child } from '../models/Child';

export const getChildSponsoreds = async(req:Request,res:Response) => {

    const sponsoreds = await Sponsored.findAndCountAll();


    res.json({
        ok:true,
        sponsoreds
    });

}

export const postChildSponsoreds = async(req:Request,res:Response)=> {

    const {child, sponsor,createdBy} = req.body;

    try {
        const sponsorId = await Sponsor.findByPk(createdBy);
        const childId = await Child.findByPk(child);
        const sponsored = await Sponsored.create({child:childId,sponsor:sponsorId,createdBy:sponsorId });
        await sponsored.save();
        res.status(201).json({
            ok:true,
            msg: "New Child are been sponsored ",
            sponsored
        })
    } catch (error) {
       console.log(`Hable con el administrador ${error}`);
        return res.status(500).json({
            ok: true,
            msg: `Hable con el administrador ${error}`
        });
    
    }

}

export const getChildsSponsoredsById = async(req:Request, res:Response) => {
    const {sponsorid} = req.params;
    
        const sponsoreds = await Sponsored.findAndCountAll({where: {"sponsor.uid": sponsorid}});
       
    res.json({
        ok:true,
        sponsoreds
    });

}