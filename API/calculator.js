const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
   res.sendFile(__dirname + "/index.html");
} );

app.post("/", (req, res)=>{
   // console.log(req.body);
   // console.log(req.body.num1);
   // console.log(req.body.num2);
   var num1 = Number(req.body.num1); //read num1
   var num2 = Number(req.body.num2); //read num2
   var result = num1 + num2; // sum of num1 and num2
   res.send("The result of the calculation is " + result);
} );

app.get("/bmiCalculator", (req, res)=>{
   res.sendFile(__dirname + "/bmiCalculator.html");
} );

app.post("/bmiCalculator", (req, res)=>{
   console.log(req.body);
   console.log(req.body.weight);
   console.log(req.body.height);
   var weight = Number(req.body.weight); //read weight
   var height = Number(req.body.height); //read height
   height = height / 100; // convert cm to m
   var bmi = weight / (height * height); // calculate BMI
if (bmi < 18.5) {
   res.send("Your BMI is " + bmi.toFixed(2) + ",<br>so you are underweight.");
} else if (bmi >= 18.5 && bmi <= 24.9) {
   res.send("Your BMI is " + bmi.toFixed(2) + ",<br>nso you have a normal weight.");
} else if (bmi >= 25 && bmi <= 29.9) {
   res.send("Your BMI is " + bmi.toFixed(2) + ",<br>so you are overweight.");
} else {
   res.send("Your BMI is " + bmi.toFixed(2) + ",<br>so you are obese.");
}
} );

app.listen(3000, ()=> {
   console.log ("Server is running on port 3000");
});
// open server 
// npx nodemon calculator.js