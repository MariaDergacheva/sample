const router= require('express').Router()
const RegisrationComponent=require('../../components/entries/Reg')



router.get('/registration', (req,res)=>{
    res.renderComponent(RegisrationComponent, {})
})


module.exports=router