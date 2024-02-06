// คำสั่งสร้าง express() 2บรรทัด
const express = require('express');
const app = express();

const debug = require('debug', 'app');
const path = require('path');
//ย้ายไปไว้ใน productRouter แล้ว
//const products = require("./data/products.json");
//const productRouter = express.Router();

const port = 3000;

//สร้างตัวแปรรับ require
const productsRouter = require("./src/router/productsRouter");
const vlogsRouter = require("./src/router/vlogsRouter");

//app.use(express.static(path.join(__dirname, "/public/")));

//set ส่งข้อมูลไปไฟล์ ejs
app.set("views", "./src/views");
app.set("view engine", "ejs")

//ย้ายไปไว้ใน productRouter แล้ว
/*productRouter.route("/").get((req,res) => {
    res.render("products", {
        products,
});
});

productRouter.route("/:id").get((req,res) => {
    const id = req.params.id;
    res.render("product",{
        product: products[id],
    })
}); */

app.use("/products", productsRouter)
app.use("/vlogs", vlogsRouter)

//เทส get เฉยๆ
app.get("/", (req, res) => {

    res.render('index' , {username : 'earth555' , customers : ["kat","cat","fat"]});
    //ส่งได้ทั้งข้อมูล string & array
})

app.listen(port, () => {
    debug("Linstening on port %d", port);
})