const express= require("express");
const authController = require('../controllers/auth');

const router = express.Router();

router.post('/index', authController.register);

router.post('/login', authController.login);

router.post('/msg', authController.message);

router.post('/update', authController.update);

router.post('/delete', authController.delete);

router.post('/updatead', authController.upad);

router.post('/svtm', authController.svtm);

router.post('/adtotm', authController.adtotm);

router.post('/dlfrtm', authController.dlfrtm);

router.post('/upimg', authController.upimg);


module.exports = router;