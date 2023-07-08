const router= require('express').Router()
const {User}= require('../../db/models')
const bcrypt= require('bcrypt')

router.post('/auth',async (req,res, next)=>{
    try{
   const condidate= await User.findOne({where:{email:req.body.email}})
   console.log(req.body);
   if (!condidate){
   throw Error ("Пользователь не зарегистрирован")
   }

   const isPasswordTrue= await bcrypt.compare(req.body.password, condidate.hash)
   if (!isPasswordTrue){
    throw Error ("Неверный пароль")
   }
   req.session.user=condidate
   res.json(condidate)
   }
   catch(error){
   next(error)
   }
   })





module.exports=router