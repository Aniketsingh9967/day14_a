const express = require("express");

const app = express();
 
let students = [
    {id:1,name:"Nirmal",city:"Gorakhpur"},
    {id:2,name:"Sachin",city:"GKP"}
];

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("API IS RUNNING");
});
app.get("/student",(req,res)=>{
    res.json({
        massage:"ALL students",
        data:students
   
    });
});

app.post("/students",(req,res)=>{
    const{id,name, city } = req .body;
    const newStudent ={ id,name,city };
    students,push(newStudent);
    res.json({
        message:"Record Added",
        student:newStudent,
        data:students
    })
});
app.listen(3000,()=>{
    console.log("Server started");
})