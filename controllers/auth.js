const express= require("express");
var url = require('url');
var adm1,adm2,adm3;

const router = express.Router();
const mysql= require("mysql");
const db=mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});




exports.register=(req,res)=>{
    console.log(req.body);
    const {name, email, sid, sem, sec, phone, size}=req.body;
    console.log(name,sem,sec,email,phone,size);
    db.query('INSERT into user SET ?',{name: name, email: email, sid: sid, sem: sem, sec: sec, phone: phone, size:size,status:"Not Confirmed"},(error,results)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
            db.query('SELECT * FROM p_admin', function(err, result4) {
                if (err) {
                    console.error("3nd error");
                } else {
                    // console.log(result3[0]);
                    return res.render('index', {message:'Registered Successfully', title2: 'Informations', adata: result4[0]}); 
                }
            });
        }
    })
}





exports.login=(req,res)=>{
    const {uname, password}=req.body;
    db.query('select * from p_admin',(error,results)=>{
        if(error){
            console.log(error);
        }
        else{
            if(results[0].uname== uname && results[0].password== password){
                db.query('SELECT * FROM user', function(err, result1) {
                    if (err) {
                        console.error("big error");
                    } else {
                        db.query('SELECT * FROM msg', function(err, result2) {
                            if (err) {
                                console.error("2nd error");
                            } else {


                                db.query('SELECT * FROM p_admin', function(err, result3) {
                                    if (err) {
                                        console.error("3nd error");
                                    } else {
        
                                        db.query('SELECT * FROM team', function(err, result4) {
                                            if (err) {
                                                console.error("3nd error");
                                            } else {
                
                                                adm1=result1;
                                                adm2=result2;
                                                adm3=result3;
                                                // console.log(result3[0]);
                                                res.render('admin', {
                                                    title: 'Registration List',
                                                    data: result1,
                                                    data2: result2,
                                                    data3: result3[0],
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
            else{
                return res.render('login', {
                    message2: 'Wrong username or password.'
                })
            }
        }
    })
}




exports.message=(req,res)=>{
    const {email2, txt}=req.body;
    // console.log(req.body);
    db.query('INSERT into msg SET ?',{email: email2, txt: txt},(error,results)=>{
        if(error){
            // console.log(error);
        }
        db.query('SELECT * FROM p_admin', function(err, result4) {
            if (err) {
                console.error("3nd error");
            } else {
                // console.log(result3[0]);
                return res.render('index', {message:'Message Sent', title2: 'Informations', adata: result4[0]}); 
            }
        });
    })
}




exports.update=(req,res)=>{
    const {uid2,id2, name2,sem2,sec2,email2,phone2,size2,status2}=req.body;
    console.log(uid2);
    console.log(uid2,id2, name2,sem2,sec2,email2,phone2,size2);
    db.query('UPDATE user SET name = ?, sid = ?, sem = ?, sec = ?, email = ?, phone = ?, size = ?, status=? WHERE uid = ?',[name2, id2, sem2, sec2, email2, phone2, size2, status2, uid2],(error,results)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
        }
        db.query('SELECT * FROM user', function(err, result1) {
            if (err) {
                console.error("big error");
            } else {
                db.query('SELECT * FROM msg', function(err, result2) {
                    if (err) {
                        console.error("2nd error");
                    } else {


                        db.query('SELECT * FROM p_admin', function(err, result3) {
                            if (err) {
                                console.error("3nd error");
                            } else {

                                db.query('SELECT * FROM team', function(err, result4) {
                                    if (err) {
                                        console.error("3nd error");
                                    } else {
        
                                        adm1=result1;
                                        adm2=result2;
                                        adm3=result3;
                                        // console.log(result3[0]);
                                        res.render('admin', {
                                            title: 'Registration List',
                                            data: result1,
                                            data2: result2,
                                            data3: result3[0],
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
    })



}






exports.delete=(req,res)=>{
    const {uid2,id2, name2,sem2,sec2,email2,phone2,size2}=req.body;
    console.log(uid2);
    console.log(uid2,id2, name2,sem2,sec2,email2,phone2,size2);
    db.query('DELETE FROM user WHERE uid = ?',[ uid2],(error,results)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
        }
        db.query('SELECT * FROM user', function(err, result1) {
            if (err) {
                console.error("big error");
            } else {
                db.query('SELECT * FROM user', function(err, result1) {
                    if (err) {
                        console.error("big error");
                    } else {
                        db.query('SELECT * FROM msg', function(err, result2) {
                            if (err) {
                                console.error("2nd error");
                            } else {
        
        
                                db.query('SELECT * FROM p_admin', function(err, result3) {
                                    if (err) {
                                        console.error("3nd error");
                                    } else {
        
                                        db.query('SELECT * FROM team', function(err, result4) {
                                            if (err) {
                                                console.error("3nd error");
                                            } else {
                
                                                adm1=result1;
                                                adm2=result2;
                                                adm3=result3;
                                                // console.log(result3[0]);
                                                res.render('admin', {
                                                    title: 'Registration List',
                                                    data: result1,
                                                    data2: result2,
                                                    data3: result3[0],
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
    })



}






exports.upad=(req,res)=>{
    //console.log(req.body);
    const {uname4,pass4,email4,head4,des4,con4,pay4}=req.body;
    console.log(uname4,pass4,email4,head4,des4,con4,pay4);




    db.query('UPDATE p_admin SET uname = ?, password = ?, email = ?, headline = ?, des = ?, contactinfo = ?, paymentinfo = ? WHERE id = 1',[uname4,pass4,email4,head4,des4,con4,pay4],(error,results)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
        }
        db.query('SELECT * FROM user', function(err, result1) {
            if (err) {
                console.error("big error");
            } else {
                db.query('SELECT * FROM msg', function(err, result2) {
                    if (err) {
                        console.error("2nd error");
                    } else {


                        db.query('SELECT * FROM p_admin', function(err, result3) {
                            if (err) {
                                console.error("3nd error");
                            } else {

                                db.query('SELECT * FROM team', function(err, result4) {
                                    if (err) {
                                        console.error("3nd error");
                                    } else {
        
                                        adm1=result1;
                                        adm2=result2;
                                        adm3=result3;
                                        // console.log(result3[0]);
                                        res.render('admin', {
                                            title: 'Registration List',
                                            data: result1,
                                            data2: result2,
                                            data3: result3[0],
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
    })








}








exports.svtm=(req,res)=>{
    //console.log(req.body);
    const {t1,t2,t3,t4}=req.body;
    console.log(t1,t2,t3,t4);




    db.query('UPDATE team SET advisor = ? where tname = "Food Team"',[t1],(error,results)=>{
        if(error){
            console.log(error);
        }
        else{
            db.query('UPDATE team SET advisor = ? where tname = "Game Team"',[t2],(error,results)=>{
                if(error){
                    console.log(error);
                }
                else{
                    db.query('UPDATE team SET advisor = ? where tname = "Security Team"',[t3],(error,results)=>{
                        if(error){
                            console.log(error);
                        }
                        else{
                            db.query('UPDATE team SET advisor = ? where tname = "Transportation Team"',[t4],(error,results)=>{
                                if(error){
                                    console.log(error);
                                }
                                else{
                                    console.log(results);
                                } 
                            });
                        } 
                    });
                } 
            });
        } 
        db.query('SELECT * FROM user', function(err, result1) {
            if (err) {
                console.error("big error");
            } else {
                db.query('SELECT * FROM msg', function(err, result2) {
                    if (err) {
                        console.error("2nd error");
                    } else {


                        db.query('SELECT * FROM p_admin', function(err, result3) {
                            if (err) {
                                console.error("3nd error");
                            } else {

                                db.query('SELECT * FROM team', function(err, result4) {
                                    if (err) {
                                        console.error("3nd error");
                                    } else {
        
                                        adm1=result1;
                                        adm2=result2;
                                        adm3=result3;
                                        // console.log(result3[0]);
                                        res.render('admin', {
                                            title: 'Registration List',
                                            data: result1,
                                            data2: result2,
                                            data3: result3[0],
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

    })

}






exports.adtotm=(req,res)=>{
    //console.log(req.body);
    const {uid9,tm9}=req.body;
    console.log(uid9,tm9);




    db.query('Select status from user where uid=?',[uid9],(error,results)=>{
        if(error){
            console.log(error);
        }
        else{
            str1=results[0].status;
            // console.log(str1);
            var n = str1.localeCompare("Confirmed");
            if(n==0){
                db.query('INSERT into teammem SET ?',{uid: uid9, tname: tm9}, function(err, resultaa) {
                    var mmsg="Inserted";
                }); 
            }
            else{
                mmsg="User Not Confirmed Yet."
                console.log(mmsg);
            }
        }
        db.query('SELECT * FROM user', function(err, result1) {
            if (err) {
                console.error("big error");
            } else {
                db.query('SELECT * FROM msg', function(err, result2) {
                    if (err) {
                        console.error("2nd error");
                    } else {


                        db.query('SELECT * FROM p_admin', function(err, result3) {
                            if (err) {
                                console.error("3nd error");
                            } else {

                                db.query('SELECT * FROM team', function(err, result4) {
                                    if (err) {
                                        console.error("3nd error");
                                    } else {
        
                                        adm1=result1;
                                        adm2=result2;
                                        adm3=result3;
                                        // console.log(result3[0]);
                                        res.render('admin', {
                                            title: 'Registration List',
                                            data: result1,
                                            data2: result2,
                                            data3: result3[0],
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
    })

}








exports.dlfrtm=(req,res)=>{
    //console.log(req.body);
    const {uid9,tm9}=req.body;
    console.log(uid9,tm9);




    db.query('delete from teammem where uid=? and tname=?',[uid9,tm9],(error,results)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
        }
        db.query('SELECT * FROM user', function(err, result1) {
            if (err) {
                console.error("big error");
            } else {
                db.query('SELECT * FROM msg', function(err, result2) {
                    if (err) {
                        console.error("2nd error");
                    } else {


                        db.query('SELECT * FROM p_admin', function(err, result3) {
                            if (err) {
                                console.error("3nd error");
                            } else {

                                db.query('SELECT * FROM team', function(err, result4) {
                                    if (err) {
                                        console.error("3nd error");
                                    } else {
        
                                        adm1=result1;
                                        adm2=result2;
                                        adm3=result3;
                                        // console.log(result3[0]);
                                        res.render('admin', {
                                            title: 'Registration List',
                                            data: result1,
                                            data2: result2,
                                            data3: result3[0],
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
    })

}





exports.upimg=(req,res)=>{
    //console.log(req.body);
    const {img,ttl}=req.body;
    console.log(img,ttl);




    db.query('insert into img set ?',{lnk: img, ttl: ttl},(error,results)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
        }
        db.query('SELECT * FROM user', function(err, result1) {
            if (err) {
                console.error("big error");
            } else {
                db.query('SELECT * FROM msg', function(err, result2) {
                    if (err) {
                        console.error("2nd error");
                    } else {


                        db.query('SELECT * FROM p_admin', function(err, result3) {
                            if (err) {
                                console.error("3nd error");
                            } else {

                                db.query('SELECT * FROM team', function(err, result4) {
                                    if (err) {
                                        console.error("3nd error");
                                    } else {
        
                                        adm1=result1;
                                        adm2=result2;
                                        adm3=result3;
                                        // console.log(result3[0]);
                                        res.render('admin', {
                                            title: 'Registration List',
                                            data: result1,
                                            data2: result2,
                                            data3: result3[0],
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
    })

}