const router= require('express').Router()
const authRouter=require('./auth.routes')
const logoutRouter=require('./logout.routes')
const registrationRouter=require('./regisration.routes')
const albumRouter=require("./album.routes")

const apiRoutes=[authRouter,logoutRouter,registrationRouter,albumRouter ]

router.use('/', apiRoutes )




module.exports=router