import express from 'express';
import router from './router';
var bodyParser = require('body-parser');
var helmet = require('helmet');
const PORT = 5000;

const app = express();
router(app);

app.listen(PORT, error => {
    if (error) return console.log(error);
    console.log(`Server is listening on port ${PORT}`);
});