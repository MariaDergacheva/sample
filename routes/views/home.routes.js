const router= require('express').Router()
const Home= require("../../components/entries/Home")

router.get('/', (req,res)=>{
    console.log({auth:req.session.user? true:false});
    res.renderComponent(Home,{auth:req.session.user? true:false})
  }
  )




module.exports=router