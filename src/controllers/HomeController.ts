import {Request,Response} from "express";
import RegisterRequestModel from "../RequestModels/RegisterRequestModel";
import BaseMetaModel from "../ResponseModels/BaseMetaModel";
import { executeDbFunctions } from "../DB/ExecuteDbfunctions";
import ApiRequestContext from "../DB/ApiRequestContext";
import randomRequestModel from "../RequestModels/AuthorizationModel";
import LoginRequestModel from "../RequestModels/LoginRequestModel";
import AuthorizationModel from "../RequestModels/AuthorizationModel";
import CompanyUserRequestModel from "../RequestModels/CompanyUserRequestModel";

const path = require('path');
class postController{
    
    public Register(req:Request,res:Response)
		{	
			return  executeDbFunctions.executeRequest((context:ApiRequestContext)=>new RegisterRequestModel(req,res).register(context),res);
		}
	public Login(req:Request,res:Response)
	{
		return  executeDbFunctions.executeRequest((context:ApiRequestContext)=>new LoginRequestModel(req,res).Login(context),res);
	}

	public async AddPerson(req:Request,res:Response)
	{
		return  executeDbFunctions.executeRequest((context:ApiRequestContext)=>new CompanyUserRequestModel(req,res).AddCompanyUser(context),res);
	}
	public async DeletePerson(req:Request,res:Response)
	{
		return  executeDbFunctions.executeRequest((context:ApiRequestContext)=>new CompanyUserRequestModel(req,res).DeleteCompanyUser(context),res);
	}
	public async UpdatePerson(req:Request,res:Response)
	{
		return  executeDbFunctions.executeRequest((context:ApiRequestContext)=>new CompanyUserRequestModel(req,res).UpdateCompanyUser(context),res);
	}
	public async ListPerson(req:Request,res:Response)
	{
		return  executeDbFunctions.executeRequest((context:ApiRequestContext)=>new CompanyUserRequestModel(req,res).ListCompanyUser(context),res);
	}
	public async SearchPerson(req:Request,res:Response)
	{
		return  executeDbFunctions.executeRequest((context:ApiRequestContext)=>new CompanyUserRequestModel(req,res).SearchCompanyUser(context),res);
	}

}
export default postController;