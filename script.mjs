//Imports
import express from 'express';
import logReq from './Middleware/loggingmiddleware.mjs';
import baseroute from './Routes/baseroute.mjs';
import globalErr from './GlobalErrorHandling/globalErr.mjs';
//setups
const app = express();
const PORT = 3000;


//Middleware
app.use(logReq);
// Routes
app.use('/', baseroute);
//Global error handling
app.use(globalErr);

//server listener
app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})