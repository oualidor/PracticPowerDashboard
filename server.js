const path = require('path')
const express = require('express');


const app = express();
app.use(express.static(path.join(__dirname, 'FrontEnd')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'FrontEnd', 'index.html'));
});
app.get('/*/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'FrontEnd', 'index.html'));
});

app.listen(9000);