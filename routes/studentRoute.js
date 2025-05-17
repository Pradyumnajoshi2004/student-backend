const {getStudent, postStudent, putStudent, delteteStudent} = require("../controller/studentController")

const route = require("express").Router()

route.get("/",getStudent)

route.post("/",postStudent)

route.put("/:id",putStudent)

route.delete("/:id",delteteStudent)

module.exports = route