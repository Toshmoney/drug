const express = require("express");
const Drug = require("../model/Drug")
const User = require("../model/User")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const dashboardData = require("../utils/dashboardData");

express().use(cookieParser())
const salt = bcrypt.genSaltSync(9);
const secret = "ghjft56ucvbkuyln8vcr6xsdtvygh";

const profile = (req, res)=>{
    // res.json(req.cookie)
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info)=>{
        if(err){
          return res.json(err)
        }
        res.json(info)
    })
}

const login = async(req, res)=>{
    const {email, password} = req.body;
    const userDoc = await User.findOne({email});
    const passOk = bcrypt.compareSync(password, userDoc.password)
    if(passOk){
        jwt.sign({username:email, details: userDoc, id : userDoc._id}, secret, {}, (err, token)=>{
            if(err)throw err;
            // res.json(token)
            res.cookie('token', token).json({token})
            // res.json(userDoc)

        })
        // res.status(200).json(userDoc)

    }else{
        res.json({"msg": "Invalid Login credentials"})
    }
}

const logout = async(req, res)=>{
    res.cookie('token', '')
    res.status(200).json({ message: 'Logged out successfully' });
}

const registerDrug = async(req, res)=>{

    const {token} = req.cookies;
    jwt.verify(token, secret, {}, async(err, info)=>{
        if(err) throw err;
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
                owner:info.id,
                drug_type,
                product_qty,
                nafdac,
                
            });
            res.json(createdDrug)
    
            } catch (error) {
               res.json(error) 
            }
    })
}


const checkDrugAuthenticity = async(req, res)=>{
    const verif_code = req.params['code'];
    try {
        const drug_details = await Drug.findOne({verif_code})
        .populate("owner", ["name"])
        if(drug_details){
            res.status(200).json(drug_details)
            drug_details.count++
            drug_details.save()
        }else{
            res.status(404).json({"error": "The Drug you are trying to verify is suspected to be fake. As it is not found in our database!"})
        }
        
    } catch (error) {
        console.log(error);
    }
}

const regDrugs = (req, res)=>{

    const {token} = req.cookies;
    jwt.verify(token, secret, {}, async(err, info)=>{
    if(err){
       return res.json(err)
    }
    const userId = info.details.name;
    const drugs =  await Drug.find()
    .populate("owner")

    if(drugs){
        const serch = drugs.filter((drug)=>{
            if(drug.owner.name === userId){
                return drug
            }
        })

        return res.json(serch)
    }
})
}

const registerCompany = async (req, res, next) => {
    const {
        name,
        email,
        regNumber,
        password,
    } = req.body

    const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

    try {
        const userDoc = await User.create({
        name,email, regNumber, 
        password: bcrypt.hashSync(password, salt)});
        console.log("User registered successfully, you can now log in as " + userDoc.email);
        res.status(200).json(userDoc)
   } catch (error) {
        res.status(400).json(error)
   }
}



const dashboard = (req, res)=>{

        const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info)=>{
        if(err){
           return res.json(err)
        }
        return res.json(info);
    })
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