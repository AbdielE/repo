const {Router} = require("express")
const {getUsers, getUserbyID, deleteUserbyID} = require("../controllers/usuarios")
const router = Router()

// http://localhost:4000/api/v1/usuarios/?id=1

router.get("/",getUsers)
router.get("/id/:id",getUserbyID)

router.delete("/", deleteUserbyID)

module.exports = router