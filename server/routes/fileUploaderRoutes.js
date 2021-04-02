const express = require('express');
const {upload} = require('../helpers/filehelpers');
const {singleFileUpload, multipleFileUpload} = require('../controllers/fileUploaderController');

const router = express.Router();

router.post('/singleFile', upload.single('file'), singleFileUpload);
router.post('/multipleFiles', upload.array('files'), multipleFileUpload);

module.exports = {routes: router}