//JavaScript Object Notation

var myJSON = '{"name": "Kate", "pet": {"dog": "Corgi", "cat": "Persian"}}';

//แปลงข้อมูล
var myObj = JSON.parse(myJSON);

//เรียกข้อมูล 2วิธี
var customerName = myObj.name;
var customerName = myObj["name"];

//การเพิ่มข้อมูล
//เพิ่มข้อมูลให้ key ใหม่ชื่อ status และ value เป็น “single”ทำได้ด้วยคำสั่ง
myObj.status = "single";
//ผลลัพธ์ myObj จะมีข้อมูลแบบนี้
//{name: "Kate", pet: {dog: "Corgi", cat: "Persian"}, status: "single"}

//การลบข้อมูล
delete myObj.name
//ผลลัพธ์ myObj จะมีข้อมูลแบบนี้
//{pet: {dog: "Corgi", cat: "Persian"}, status: "single"}

//เมื่อเราจัดการข้อมูล JSON object จนพอใจแล้วต้องการเปลี่ยนกลับเป็น JSON เพื่อนำไปใช้งาน ให้ใช้คำสั่งนี้ได้เลย
JSON.stringify(myObj);