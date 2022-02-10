import { Tasks } from "task-run";
import {Request,Response} from "express";
import { ServerResponse } from "http";
import Connection from "./Connection";
import ApiRequestContext from "../DB/ApiRequestContext";
import MetaModel from "../ResponseModels/MetaModel";
import { fstat } from "fs";
import { json } from "body-parser";
import BaseMetaModel from "../ResponseModels/BaseMetaModel";
const path = require('path');
export class executeDbFunctions
    {
        
        
        public static async executeRequest(task:Function,res:Response)
            
        {
            
            var db = new Connection();

            try{
                
                var context = new ApiRequestContext(db);
                var result = await Tasks.run(()=>task(context));
                res.header("Access-Control-Allow-Origin", "*");
                res.header("Access-Control-Allow-Headers", "X-Requested-With");
                console.log(result)
                return res.json(result);
            }
            catch
            {
                return BaseMetaModel.create(MetaModel.GenericError());
            }
            
            
        }
        
    }