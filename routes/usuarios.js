const {Router} = require("express")
const {getUsers, getUserbyID, deleteUserbyID, addUser, updateUserByUsuario} = require("../controllers/usuarios")
const router = Router()

// http://localhost:4000/api/v1/usuarios/?id=1

//GET
router.get("/",getUsers)
router.get("/id/:id",getUserbyID)

//POST
router.post("/", addUser)

//PUT
router.put("/", updateUserByUsuario)

//DELETE
router.delete("/", deleteUserbyID)

module.exports = router