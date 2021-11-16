const express= require("express");
const mysql= require("mysql");
const router = express.Router();
const db=mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});


router.get("/",(req,res)=>{
    //res.send("<h1>Home Page</h1>")
    res.render("index");
});


router.get("/login",(req,res)=>{
    res.render("login");
});

router.get("/gallery",(req,res)=>{
    db.query('SELECT * FROM img', function(err, rows) {
        if (err) {
            console.error("3nd error");
        } else {
            // console.log(result3[0]);
            res.render('gallery', { pcs: rows}); 
        }
    });
});

router.get("/admin",(req,res)=>{
    res.render("admin");
});

router.get("/confirmlist",(req,res)=>{
    db.query('SELECT * FROM user WHERE status="Confirmed"', function(err, rows) {
        if (err) {
            console.error("3nd error");
        } else {
            // console.log(result3[0]);
            res.render('confirmlist', { dts: rows}); 
        }
    });
});


router.get("/teams",(req,res)=>{
    db.query('SELECT * FROM team ', function(err, rows,fld) {
        if (err) {
            console.error("3nd error");
        } else {
            db.query('Select * from user inner join teammem where user.uid = teammem.uid and tname=?',["Food Team"], function(err, result1) {
                if (err) {
                    console.error("big error");
                } else {
                    db.query('Select * from user inner join teammem where user.uid = teammem.uid and tname=?',["Game Team"], function(err, result2) {
                        if (err) {
                            console.error("2nd error");
                        } else {
    
    
                            db.query('Select * from user inner join teammem where user.uid = teammem.uid and tname=?',["Security Team"], function(err, result3) {
                                if (err) {
                                    console.error("3nd error");
                                } else {
    
                                    db.query('Select * from user inner join teammem where user.uid = teammem.uid and tname=?',["Transportation Team"], function(err, result4) {
                                        if (err) {
                                            console.error("3nd error");
                                        } else {
            
                                            // console.log(result4);
                                            res.render('teams', {

                                                title: 'Registration List',
                                                dts:rows,
                                                data: result1,
                                                data2: result2,
                                                data3: result3,
                                                data4: result4
                                            }); 
                                        }
                                    }); 
                                }
                            });
    
                        }
                    });
                }
            });
        }
    });
});




module.exports = router;