const router= require('express').Router()
const AuthComponent= require("../../components/entries/Authorization")

router.get('/auth',(req,res)=>{
    res.renderComponent(AuthComponent, {})
})




module.exports=router