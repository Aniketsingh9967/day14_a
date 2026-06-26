const express = require("express");

const app = express();

let students = [
    { id: 1, name: "Nirmal", city: "Gorakhpur" },
    { id: 2, name: "Sachin", city: "GKP" }
];

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API IS RUNNING");
});
app.get("/students", (req, res) => {
    res.json({
        massage: "ALL students",
        data: students

    });
});

app.post("/students", (req, res) => {
    const { id, name, city } = req.body;
    const newStudent = { id, name, city };
    students.push(newStudent);
    res.json({
        message: "Record Added",
        student: newStudent,
        data: students
    })
});
// data update 
app.put("/students/:id", (req, res) => {
    const {id} =req.params;
    const student = students.find(s => s.id == id);
    // if student found =value....
    if (!student) {

        return res.status(404).json({
            menubar: "student not found"
        });

    }
    student.name = req.body.name;
    student.city = req.body.city;
    res.json({
        message: "record update",
        student
    });
});

app.delete("/students/:id", (req, res) => {
    const id = req.params.id;
    const student = students.find(s => s.id == id);
    if (!student) {
        return res.status(404).json({ message: "Invalid Id" });
    }
    students = students.filter(s => s.id != id);
    res.json({
        massage: "record deleted",
        students
    })
});

app.listen(3000, () => {
    console.log("Server started");
})