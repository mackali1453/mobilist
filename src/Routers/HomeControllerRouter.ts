import postController from "../controllers/HomeController";
import {Router} from "express";
import AuthorizationModel from "../RequestModels/AuthorizationModel";
import MetaModel from "../ResponseModels/MetaModel";
import BaseMetaModel from "../ResponseModels/BaseMetaModel";
import { executeDbFunctions } from "../DB/ExecuteDbfunctions";
import ApiRequestContext from "../DB/ApiRequestContext";
const controller = new postController(); //postController class includes functions.
const router = Router(); //Router class allow us to associate our functions which have http methods to different routes.

router.all("/login",controller.Login); //routes to leaflet map page
router.all("/Register",controller.Register);
router.all("/Add",async function(req,res)
{   //--------------------------authorization----------------------------------- 
    //  var validationResult = await AuthorizationModel.verify(req,res);
    //  if (validationResult.status_message==MetaModel.Success().status_message)
    //  {
        
        controller.AddPerson(req,res)
        
//      }
        
//      else
//          {
//              res.send(BaseMetaModel.create(validationResult))
//          }
 }
);
router.all("/Delete",async function(req,res)
{//--------------------------authorization----------------------------------- 
    //  var validationResult = await AuthorizationModel.verify(req,res);
    //  if (validationResult.status_message==MetaModel.Success().status_message)
    //  {
        console.log("Delete user")
        controller.DeletePerson(req,res)
        
//      }
        
//      else
//          {
//              res.send(BaseMetaModel.create(validationResult))
//          }
 }
);
router.all("/Search",async function(req,res)
{//--------------------------authorization----------------------------------- 
    //  var validationResult = await AuthorizationModel.verify(req,res);
    //  if (validationResult.status_message==MetaModel.Success().status_message)
    //  {
        
        controller.SearchPerson(req,res)
        
//      }
        
//      else
//          {
//              res.send(BaseMetaModel.create(validationResult))
//          }
 });
router.all("/Update",async function(req,res)
{//--------------------------authorization----------------------------------- 
    //  var validationResult = await AuthorizationModel.verify(req,res);
    //  if (validationResult.status_message==MetaModel.Success().status_message)
    //  {
        
        controller.UpdatePerson(req,res)
        
//      }
        
//      else
//          {
//              res.send(BaseMetaModel.create(validationResult))
//          }
 }
);
router.all("/List",async function(req,res)
{
    //  var validationResult = await AuthorizationModel.verify(req,res);
    //  if (validationResult.status_message==MetaModel.Success().status_message)
    //  {
        
        controller.ListPerson(req,res)
        
//      }
        
//      else
//          {
//              res.send(BaseMetaModel.create(validationResult))
//          }
 }
 
);
export default router;
