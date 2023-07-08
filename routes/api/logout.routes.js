const router= require('express').Router()


router.get('/logout', (req,res)=>{
    res.clearCookie("auth")
    req.session.destroy()

    // res.json("Пользователь вышел из учетнной записи")
    res.redirect('/')
})





module.exports=router