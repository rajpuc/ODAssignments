import {JWT_EXPIRATION_TIME, JWT_SECRET} from "../config/config.js";
import jwt from "jsonwebtoken";

export const EncodeToken = (user_id,email,name,age,city) => {
    const KEY = JWT_SECRET;
    const EXPIRE = { expiresIn: JWT_EXPIRATION_TIME };
    const PAYLOAD = {
        "user_id": user_id,
        "email"  :email,
        "name"   :name,
        "age"    :age,
        "city"   :city
    };
    return jwt.sign(PAYLOAD,KEY,EXPIRE)
}

export const DecodeToken = (token) => {
    try {
        return jwt.verify(token,JWT_SECRET)
    }catch (e) {
        return null;
    }
}