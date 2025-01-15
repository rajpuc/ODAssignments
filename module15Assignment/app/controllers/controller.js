import { EncodeToken } from "../utility/tokenUtility.js";

export const showHello = async(req,res) =>{
    return res.status(200).send("Hello World");
}

export const showToken = async(req,res) =>{
    let user_id = "1725";
    let email = "ajoypal.raj@gmail.com";
    let name = "Rajesh Pal";
    let age =  "25";
    let city = "Rangamati";
    let result= EncodeToken(user_id,email,name,age,city);
    return res.status(201).json({token:result});
}

export const postResponse = async(req,res) =>{
    return res.status(200).send("I am post body");
}

