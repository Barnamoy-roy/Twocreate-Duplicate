const express = require('express');
const app = express();
app.listen(3000);

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname});
});

app.get('/resolve', (req, res) => {
    res.sendFile('./views/resolve.html', { root: __dirname});
});