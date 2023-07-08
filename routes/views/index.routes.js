const router= require('express').Router()
const authRouter=require('./auth.routes')
const mainRouter=require('./entries.routes')
const registrationRouter=require('./registration.routes')
const homeRouter=require('./home.routes')

const viewRoutes=[authRouter,mainRouter,registrationRouter, homeRouter]

router.use('/', viewRoutes )




module.exports=router