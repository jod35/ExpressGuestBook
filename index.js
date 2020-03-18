const express=require('express');
const handlebars=require('express3-handlebars').create({defaultLayout:'main'});
const logger=require('morgan');
const body_parser=require('body-parser');
const path=require('path');


const app =express();
const port =2000;

app.set('port',port);
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
// app.set('views',path.resolve(__dirname+'/views'));

const entries =[]; // array to store all our entries

app.use(logger("dev"));
app.locals.entries=entries;
app.use(body_parser.urlencoded({extended:false}));


app.get('/',(req,res)=>{
  res.render('index');
});

app.get('/new-entry',(req,res)=>{
    res.render('new-entry');
});

app.post('new_entry',(req,res)=>{
   if (!res.body.title || request.body.body) {
       res.status(400).send("Entries must have a body and a title");
       return;
   }
   
   entries.push(
       {
           title:request.body.title,
           content:request.body.body,
           published:new Date(),
       }
   )

   res.redirect('/')
});

app.use((req,res)=>{
    res.status(404);
    res.render("404");
});

app.listen(app.get('port'),()=>{
    console.log(`Express App running on port ${app.get('port')}`);
    
});