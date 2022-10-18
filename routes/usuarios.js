const {Router} = require("express")
const {getUsers, getUserbyID} = require("../controllers/usuarios")
const router = Router()

// http://localhost:4000/api/v1/usuarios/

router.get("/",getUsers)
router.get("/id/:id",getUserbyID)

module.exports = router