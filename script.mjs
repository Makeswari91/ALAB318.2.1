//Imports
import express from 'express';
import logReq from './Middleware/loggingmiddleware.mjs';
import baseroute from './Routes/baseroute.mjs';
//setups
const app = express();
const PORT = 3000;


//Middleware
app.use(logReq);
// Routes
app.use('/', baseroute);
app.get("/home", (req,res)=>{
    let option={
        title: "Mahi",
        content: "sdvs wfewf ef qwf bdfbdb wdv wf wwf qwqqref r3f"
    };
    res.render("home", option);
});

//Global error handling

//server listener
app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})