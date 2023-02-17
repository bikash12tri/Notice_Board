// const express = require("express")
// const router = express.Router()

// const {userregister,userOtpSend,userLogin} = require('../controller/adminController')
// const {authentication, authorization} = require('../middleware/auth')

// // Routes
// router.post("/register",userregister);
// router.post("/sendotp",userOtpSend);
// router.post("/login",userLogin);


// router.all("/*", function (req, res) { 
//     return res.status(400).send({ status: false, message: "invalid http request" });
// });

// module.exports =router

const express = require('express');
const router = express.Router();
const { adminLogin } = require('../controller/adminController');
const { createNotice, deleteNotice, viewNotice } = require('../controller/noticeController');
const { createDocument, deleteDocument, viewDocument } = require('../controller/documentController');
const { createUser } = require('../controller/adminController');
const { isAdmin, isContentManager, isViewer } = require('../middleware/auth');

// Auth routes
router.post('/admin/login', adminLogin);

// Notice routes
router.post('/notices', isAdmin, createNotice);
router.delete('/notices/:id', isAdmin, deleteNotice);
router.get('/notices/:id', isContentManager, viewNotice);

// Document routes
router.post('/documents', isAdmin, createDocument);
router.delete('/documents/:id', isAdmin, deleteDocument);
//router.get('/documents/:id', isContentManager, viewDocument);

// User routes
router.post('/users', isAdmin, createUser);

module.exports = router;