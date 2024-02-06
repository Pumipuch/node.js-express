// คำสั่งสร้าง express() 2บรรทัด
const express = require('express');
const app = express();

const debug = require('debug', 'app');
const path = require('path');


const port = 3000;

//app.use(express.static(path.join(__dirname, "/public/")));

//set ส่งข้อมูลไปไฟล์ ejs
app.set("views", "./src/views");
app.set("view engine", "ejs")

app.get("/", (req, res) => {

    res.render('index' , {username : 'earth555' , customers : ["kat","cat","fat"]});
    //ส่งได้ทั้งข้อมูล string & array
})

app.listen(port, () => {
    debug("Linstening on port %d", port);
})