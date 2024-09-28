require("dotenv").config()
const express = require("express");
const Drug = require("../model/Drug")
const User = require("../model/User")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const dashboardData = require("../utils/dashboardData");

express().use(cookieParser())
const salt = bcrypt.genSaltSync(9);
const secret = process.env.JWT_SECRET

const profile = async(req, res)=>{
    const user = req.user;
    const userData = await User.findById(user);
    if(!user){
        return res.status(404).json({error:"user not found"})
    }

    return res.status(200).json({user:userData})
}

const login = async(req, res)=>{
    const {email, password} = req.body;
    try {
        const userDoc = await User.findOne({email});
        if(!userDoc){
                return res.status(401).json({ message: 'User not found' });
        }

        const passOk = bcrypt.compareSync(password, userDoc.password)

        if(!passOk){
            return res.status(401).json({ message: 'Incorrect username or password' });
        }

        jwt.sign({username:email, details: userDoc, id : userDoc._id}, secret, {}, (err, token)=>{
                if(err)throw err;
                res.cookie('token', token).json({token})
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const logout = async(req, res)=>{
    res.cookie('token', '')
    return res.status(200).json({ message: 'Logged out successfully' });
}

const registerDrug = async(req, res)=>{

    const user = req.user;
    const{
        drug_name,
        manufac_date,
        exp_date,
        drug_type,
        product_qty,
        nafdac,
    } = req.body;
    try {
        const createdDrug = await Drug.create({
            drug_name,
            manufac_date,
            exp_date,
            owner:user,
            drug_type,
            product_qty,
            nafdac,
            
        });

        if(!createdDrug){
            return res.status(400).json({error: "Error creating a drug"})
        }
        res.json(createdDrug)

        } catch (error) {
           res.json(error) 
        }

}


const checkDrugAuthenticity = async(req, res)=>{
    const verif_code = req.params['code'];
    try {
        const drug_details = await Drug.findOne({verif_code})
        .populate("owner", ["name"])
        if(drug_details){
            drug_details.count++
            drug_details.save()
            return res.status(200).json(drug_details)
        }else{
            res.status(404).json({error: "The Drug you are trying to verify is suspected to be fake. As it is not found in our database!"})
        }
        
    } catch (error) {
        console.log(error);
    }
}

const regDrugs = async(req, res)=>{
    const user = req.user;
    const drugs =  await Drug.find({owner:user});

    if(!regDrugs){
        return res.status(404).json({error:"No drugs registered yet!"})
    }

    return res.status(200).json({drugs})
}

const registerCompany = async (req, res) => {
    const {
        name,
        email,
        regNumber,
        password,
        address
    } = req.body;

    try {

        if(!name ||
            !email ||
            !regNumber ||
            !password ||
            !address){
                return res.status(400).json({error:"All inputs required!"})
            }

    const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({error:"User already exists"})
  }

    const userDoc = await new User ({
    name,email, regNumber, address,
    password: bcrypt.hashSync(password, salt)});

    if(!userDoc){
        return res.status(400).json({error:"Registration failed, please check all the input."})
    }

    await userDoc.save()
    return res.status(200).json(userDoc)
   } catch (error) {
        res.status(400).json(error)
   }
}



const dashboard = async(req, res)=>{
    const user = req.user;
    const userData = await User.findById(user).populate("drugs");
    if(!user){
        return res.status(404).json({error:"user not found"})
    }

    return res.status(200).json({user:userData})
}

module.exports = {
registerCompany,
registerDrug,
checkDrugAuthenticity,
dashboard,
login,
logout,
profile,
regDrugs
}