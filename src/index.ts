import router from "./Routers/HomeControllerRouter"; 
var bodyParser = require('body-parser')
let express = require('express'); //express is a modul which allow us to create rest-api.
let app = express(); //Creating instance of it
const path = require("path");
require('dotenv').config({
    path: path.resolve(__dirname, '../.env')
  });
const cors=require("cors");
const corsOptions ={
    origin:'*'
}
const configuredCors = cors(corsOptions);
app.options('*', configuredCors)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use("/",router); //Using router let us jumping between html pages.
app.listen(process.env.PORT,console.log(process.env.PORT)); 
