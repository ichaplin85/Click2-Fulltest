const express = require('express');

const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware')
const fileController = require('../controllers/fileController')


router.post('/', authMiddleware, fileController.createDir)
router.get('/', authMiddleware, fileController.fetchFiles)
router.post('/upload', fileController.uploadFile)




module.exports = router;
