import {json, Request,Response} from "express";
import MetaModel from "../ResponseModels/MetaModel";
import BaseMetaModel from "../ResponseModels/BaseMetaModel";
import UserModel from "../ResponseModels/UserModel";
import ApiRequestContext from "../DB/ApiRequestContext";
import { isNull } from "util";
import { resolve } from "url";
import LoginRequestModel from "./LoginRequestModel";
const crypto = require('crypto');
const jwt = require("jsonwebtoken");
const path = require("path");
require('dotenv').config({
    path: path.resolve(__dirname, '../.env')
  });
class ValidateUserModel extends UserModel{
    
    public static async validate(context:ApiRequestContext,usermodel:UserModel)
    {   
        usermodel.password = crypto.createHash('md5').update(usermodel.password).digest('hex');        

        var user =  await context.QueryFirstOrDefault("select first_name,last_name,email,password from users where  email=?",
        {"email":usermodel.email});
        console.log(user)
        if (user!=undefined)
            return BaseMetaModel.create(MetaModel.userExist(),user )  
        else 
            return BaseMetaModel.create(MetaModel.userNotExist())
    }
    

  
    
}
export default ValidateUserModel;