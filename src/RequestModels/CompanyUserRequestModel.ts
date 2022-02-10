import { Request, Response } from "express";
import ApiRequestContext from "../DB/ApiRequestContext";
import BaseMetaModel from "../ResponseModels/BaseMetaModel";
import MetaModel from "../ResponseModels/MetaModel";
import UserModel from "../ResponseModels/UserModel";
class CompanyUserRequestModel 
{
    company_user_first_name:string | null=null;
    company_user_last_name:string | null=null;
    company_user_cell_number:string | null=null;
    company_name:string | null=null;
    user_email:string ="";
    public constructor(req:Request,res:Response)
    {
        Object.assign(this,req.body)
    }
    public async AddCompanyUser(context:ApiRequestContext)
    {
        var newUser =  await context.ExecuteQuery("INSERT INTO companyusers (company_user_first_name,company_user_last_name,company_user_cell_number,company_name,user_email) VALUES (?,?,?,?,?)"
        ,this); 
        return BaseMetaModel.create(newUser)

    }
    public async DeleteCompanyUser(context:ApiRequestContext)
    {  
        var newUser =  await context.ExecuteQuery("DELETE FROM companyusers WHERE company_user_first_name=? and company_user_last_name=? and company_user_cell_number=? and company_name=? and user_email=? "
        ,this); 
        return BaseMetaModel.create(newUser)

    }
    public async UpdateCompanyUser(context:ApiRequestContext)
    {
        var newUser =  await context.ExecuteQuery("UPDATE companyusers SET company_user_first_name=?,company_user_last_name=?,company_user_cell_number=?,company_name=?  WHERE user_email=?"
        ,this); 
    }
    public async ListCompanyUser(context:ApiRequestContext)
    {
        var newUser =  await context.QueryArray("select * FROM companyusers WHERE user_email=?"
        ,{"user_email":this.user_email}); 
        return BaseMetaModel.create(MetaModel.userExist(),newUser)
    }
    public async SearchCompanyUser(context:ApiRequestContext)
    {   
        
        var newUser =  await context.QueryArray("select * FROM companyusers WHERE company_user_first_name=? and company_user_last_name=?  and  company_user_cell_number=? and company_name=? and user_email=?"
        ,this); 
        return BaseMetaModel.create(MetaModel.userExist(),newUser)
    }
}
export default CompanyUserRequestModel

