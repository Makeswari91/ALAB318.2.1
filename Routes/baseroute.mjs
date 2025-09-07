import express from 'express';

const router = express.Router();

router
 .route("/")
 .get((req, res) => {
    res.send(`Testing`)
})
.post((req, res)=>{
    res.send(`Testing post route`)
 });


router
  .route("/:id")
  .put((req, res)=>{
    res.send(`Tesing, put route: Param value ${req.params.id}`)
 })
 
  .delete((req, res)=>{
    res.send(`Testing, delete route: Param value ${req.params.id}`)
 })


export default router;