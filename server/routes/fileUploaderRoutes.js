const express = require('express');
const {upload} = require('../helpers/filehelpers');
const {singleFileUpload, multipleFileUpload, getallSingleFile} = require('../controllers/fileUploaderController');

const router = express.Router();

router.post('/singleFile', upload.single('file'), singleFileUpload);
router.post('/multipleFiles', upload.array('files'), multipleFileUpload);
router.get('/getSingleFile', getallSingleFile);

module.exports = {routes: router}