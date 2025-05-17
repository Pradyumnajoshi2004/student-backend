const {getStudent, postStudent, putStudent, delteteStudent, getStudentById} = require("../controller/studentController")

const route = require("express").Router()

route.get("/",getStudent)

route.post("/",postStudent)

route.put("/:id",putStudent)

route.delete("/:id",delteteStudent)

route.get("/:id",getStudentById)


module.exports = route
