//Imports
import express from 'express';
import logReq from './Middleware/loggingmiddleware.mjs';
import baseroute from './Routes/baseroute.mjs';
import globalErr from './GlobalErrorHandling/globalErr.mjs';
import fs from 'fs';
import bodyParser from 'body-parser';
//setups
const app = express();
const PORT = 3000;
//Bulid template engine

// specify directories for templates
app.set('views', './views');
app.set('view engine', 'home');
app.set('view engine', 'contact');


//Middleware
app.use(logReq);
app.use(bodyParser.urlencoded({extended:true}));
// Routes
app.use('/', baseroute);
//Global error handling
app.use(globalErr);

//server listener
app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})