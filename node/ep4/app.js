const express = require('express');
const debug = require('debug', 'app');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "/public/")));

app.get("/", (req, res) => {

    res.send('Hello earth');

})

app.listen(port, () => {
    debug("Linstening on port %d", port);
})