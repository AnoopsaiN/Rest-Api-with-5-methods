var express =require('express');
var session = require('express-session');
const fetch = require('node-fetch');
var app = express();
const path =require('path');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require ('swagger-ui-express');
var bodyParser= require('body-parser');
app.set('view engine', 'ejs');
var cookieParser = require('cookie-parser');
var userprofile =require('./utilities/userprofile')
app.use('/assets', express.static('assets'));

app.use(session({secret: 'NBAD',
                    saveUninitialized: true,
                    resave: true}));
 app.use(cookieParser());
 app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
//routes to controller
const swaggerOptions ={
  swaggerDefinition: {
    info: {
      title: 'Trip api',
      description: 'implementation of swagger ',
      contact: {
        name:'Anoop Narne'
      },
      basePath:"/api/v1",
      servers:["http://64.225.28.35:3000"]
    }
  },
  apis: ['./controller/Usercontroller.js']
  }
   
  const swaggerDocs= swaggerJsDoc(swaggerOptions);
  
var usercontroller=require('./controller/Usercontroller')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api/v1', express.static(path.join(__dirname, 'routes')));
app.use('/api/v1/savedConnections', usercontroller)
app.get('/',function(req,res){
  res.render('index')
})
app.get('/index',function(req,res){
  res.render('index')
})
app.get('/newConnection',function(req,res){
  res.render('newConnection')
})




app.get('/mytrips', function(req,res){
  fetch('http://64.225.28.35:3000/api/v1/savedConnections').then(res => res.json()).then(json =>{
   
    res.render('savedConnections',{data: json})
  })
  });
  
  
  app.post('/rsvp',function(req,res){
    query = req.body;
    fetch('http://64.225.28.35:3000/api/v1/savedConnections',{
      method: 'POST',
      body: JSON.stringify(query),
      headers: { 'Content-Type': 'application/json' },
      })
      .then(res => res.json()).then(json => {  res.redirect('/mytrips');})
  });
    
  app.delete('/delete',function(req,res){
    console.log(req.body)
    query=req.body
    console.log(query);
    
    fetch('http://64.225.28.35:3000/api/v1/savedConnections',{
      method: 'DELETE',
      body: JSON.stringify(query),
      headers: { 'Content-Type': 'application/json' },
      })
      .then(res => res.json()).then(json => {  res.redirect('/mytrips');})
  });
   
  app.get('/connection',function(req,res){
    
    
    var tripid =req.query.TripId
    
    var specifictripbyid =userprofile.getConnection(tripid);
    console.log(userprofile.getConnection(tripid));
    res.render('put',{data:specifictripbyid})
  
  })
  
  app.get('/connections',function(req,res){
    var tripid =req.query.TripId
    console.log('inside');
    
    var specifictripby =userprofile.getConnection(tripid);
    console.log(userprofile.getConnection(tripid));
    res.render('patch',{data:specifictripby})
  })
  
  
  
  app.post('/update',function(req,res){
   
    put =req.body
    console.log(put);
    
    fetch('http://64.225.28.35:3000/api/v1/savedConnections',{
      method: 'PUT',
      body: JSON.stringify(put),
      headers: { 'Content-Type': 'application/json' },
      })
      .then(res => res.json()).then(json => {  res.redirect('/mytrips');})
  
  })
  app.listen(3000);
  
  
