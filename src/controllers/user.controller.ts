import { Request, Response } from 'express';
import User, { IUser } from '../models/user.model';
import jwt from 'jsonwebtoken';
import config from '../config/config'

function createToken(user:IUser) { 
    return jwt.sign({id:user._id, email: user.email}, config.jwtSecret, {expiresIn: 60*60*24});
}

export const signUp = async (req: Request, res: Response): Promise<Response> => {

    if(!req.body.email || !req.body.password) {
        return res.status(400).json({message: 'Please send your email and password'})
    };

    const { email, password }  = req.body
    const user = await User.findOne({email});

    if(user) { 
        return res.status(400).json({message: 'User already exists'});
    }

    const newUser = await new User({email, password})
    await newUser.save();
    return res.status(201).json({newUser})
}

export const signIn = async (req: Request, res: Response): Promise<Response> => {
    if(!req.body.email || !req.body.password) {
        return res.status(400).json({message: 'Please send your email and password'})
    };
    const { email , password} = req.body;
    const user = await User.findOne({email})

    if(!user) { 
        return res.status(404).json({message: 'User does not exists'});
    };

    const isMatch = await user.comparePassword(password);
    if(isMatch) { 
        return res.json({token: createToken(user)})
    }

    return res.status(400).json({message: 'The email or password is wrong'})
}
