//Imports
import express from 'express';
import logReq from './Middleware/loggingmiddleware.mjs';

//setups
const app = express();
const PORT = 3000;


//Middleware
app.use(logReq);
// Routes

//Global error handling

//server listener
app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})