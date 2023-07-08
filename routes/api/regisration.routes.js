const router= require('express').Router()
const {User}= require('../../db/models')
const bcrypt= require('bcrypt')

router.post('/registration', async (req,res, next)=>{
 try{
const condidate= await User.findOne({where:{email:req.body.email}})
console.log(req.body);
if (condidate){
throw Error ("Пользователь уже зарегистрирован")
}
const hash= await bcrypt.hash(req.body.password, 5)
const user= await User.create({...req.body, hash:hash})
req.session.user=user
res.json(user)
}
catch(error){
next(error)
}
})





module.exports=router