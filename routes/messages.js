const {Router} = require("express")
const router = Router()

//router.get("",()=>{})
router.get("/",(req,res)=>{res.send("Hola")})

module.exports = router