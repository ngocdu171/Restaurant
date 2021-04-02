const express = require('express');
const {upload} = require('../helpers/filehelpers');
const {singleFileUpload, multipleFileUpload, getallSingleFile, getallMultiFiles} = require('../controllers/fileUploaderController');

const router = express.Router();

router.post('/singleFile', upload.single('file'), singleFileUpload);
router.post('/multipleFiles', upload.array('files'), multipleFileUpload);
router.get('/getSingleFile', getallSingleFile);
router.get('/getMultiFile', getallMultiFiles);

module.exports = {routes: router}