var express = require('express');
var router = express.Router();
const mysql= require("mysql");
const db=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'picnicregi'
});



router.get('/', function(req, res, next) {

    var query = 'SELECT * FROM user';
    db.query('select * from p_admin',(err,rows)=> {
      if(err) console.log(err);
      res.render('index', { title2: 'Informations', adata: rows[0]});
    })
  });


module.exports = router;