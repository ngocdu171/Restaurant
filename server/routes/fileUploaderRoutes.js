const express = require('express');
const {upload} = require('../helpers/filehelpers');
const {singleFileUpload} = require('../controllers/fileUploaderController');

const router = express.Router();

router.post('/singleFile', upload.single('file'), singleFileUpload);

module.exports = {routes: router}