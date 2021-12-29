const express1=require("express");
const route=express1.Router();

const dtmodule=require('../Modules/datetimemodule');


route.get("/create",dtmodule.crt);
route.get("/view",dtmodule.view);
  
module.exports=route;
