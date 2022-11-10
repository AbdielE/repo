const {Router} = require("express")
const {getPersonajes, getPersonajebyID, deletePersonajebyID, addPersonaje, updatePersonajeByAlias} = require("../controllers/personajes")
const router = Router()

// http://localhost:4000/api/v1/personajes/

//GET
router.get("/",getPersonajes)
router.get("/id/:id",getPersonajebyID) //http://localhost:4000/api/v1/personajes/id/11

//POST
router.post("/", addPersonaje)

//PUT
router.put("/", updatePersonajeByAlias)

//DELETE
router.delete("/", deletePersonajebyID) // http://localhost:4000/api/v1/personajes/?id=1

module.exports = router