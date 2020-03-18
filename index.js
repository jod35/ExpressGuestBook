const express=require('express');
const handlebars=require('express3-handlebars').create({defaultLayout:'main'});
const logger=require('morgan');
const body_parser=require('body-parser');
const path=require('path');


const app =express();

app.set('view engine','handlebars');
app.set('views',path.resolve(__dirname+'views/'));

const entries =[]; // array to store all our entries