const express1=require("express");
const app=express1();
const route = require('./Router/route')


app.use(express1.json());

app.use('/', route);

app.listen(3000);
