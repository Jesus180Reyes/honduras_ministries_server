import { Child } from '../models/Child';
import { Sponsor } from '../models/Sponsor';
export const emailExists = async (email:string) => {
    const emailExists = await Sponsor.findOne({ where: {email: email} });
    if (emailExists) {
        throw new Error(`Email: ${email} are exists`);
    }
}
export const sponsorIdExists = async (id:string) => {
    const sponsorIdExists = await Sponsor.findByPk(id);
    if (!sponsorIdExists) {
        throw new Error(`ID: ${id} not exists`);
    }
}
export const sponsorEmailExists = async (email:string) => {
    const isSponsorExistsEmail = await Sponsor.findOne({where: {email: email} });
    if (!isSponsorExistsEmail) {
        throw new Error(`Email: ${email} not exists`);
    }
}
export const sponsorState = async (email:string) => {
    const isSponsorStateAvailable = await Sponsor.findOne({where: {email: email, state:true} });
    if (!isSponsorStateAvailable) {
        throw new Error(`Email: ${email} are Banned`);
    }
}


export const childExistsById = async(id:number)=> {
    const ischildExists = await Child.findByPk(id);
    if(!ischildExists) {
        throw new Error(`Child with ${id} not exists`);
       
    }

}
export const childExistsByCode = async(code:string)=> {
    const ischildExists = await Child.findOne({where: {code:code}});
    if(!ischildExists) {
        throw new Error(`Child with ${code} not exists`);
       
    }

}
