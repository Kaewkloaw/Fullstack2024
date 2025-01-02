
const express = require('express');
const mysql = require('mysql2');
const app = express();

app.get('/students', (req, res) => {
 const connection = mysql.createConnection({ // สร้าง connection ไปที่ database
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'student_database', // connect ไปที่ database ชื่อ student_database
 });

 // เปิด connection ไปที่ database
 connection.connect();

 connection.query('SELECT * from students WHERE id = 3', (err, rows, fields) => {
   if (err) throw err;

   // return response กลับไปหา client โดยแปลง record เป็น json array
   res.json(rows);
 });

 // ปิด connection
 connection.end();
});

app.listen(3000, () => {
 console.log('server started on port 3000!');
});

// http://localhost/phpmyadmin/
// npm i express mysql2 nodemon
// nodemon app.js