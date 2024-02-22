const express = require("express");
const Controller = require("../controllers/controller");
const router = express.Router();

router.post("/login", Controller.login);

module.exports = router;

//ambil login infonya
// pindahin ke endpoint sendiri pindahin ke router socketnya
