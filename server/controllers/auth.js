import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import * as users from '../models/auth1.js'
import express from 'express';

export const signup = async(req, res) => {
    const { name, email, password} = req.body;
    try{
        const  existiguser = await users.findOne({email});
        if(!existinguser){
            return res.status(404).json({messsage : "User already Exist."})
        }
        
        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = await users.create({name, email, password : hashedPassword})
        
        }
    
    catch(error){
        res.status(500).json("Something went wrong...")
    }

}
// router.post('/si')
export const login = express.Router();

