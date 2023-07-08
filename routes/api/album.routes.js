const router= require('express').Router()
const {Party}=require('../../db/models')


router.post('/addAlbum', async (req,res, next)=>{
    try{
        console.log(req.body);

   
   const party= await Party.create({...req.body, time: new Date(`${req.body.date}T${req.body.time}`),
    userId:+req.session.user.id})
   res.json(party)
   }
   catch(error){
   next(error)
   }
}
)
module.exports=router


// name: 'др', date: '2023-07-20', time: '12:30', location: 'пляж'