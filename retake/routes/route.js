var express = require('express');
var router = express.Router();
var listcon = require("../controller/list")
/* GET home page. */
router.get('/', listcon.list );
router.get('/:id',  listcon.id);

module.exports = router;
