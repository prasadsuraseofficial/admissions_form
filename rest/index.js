const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyparser = require("body-parser");
const multer = require("multer");
const path = require("path");
const uuid = require("uuid4");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use("/docs", express.static("docs"));

const conn = mysql.createPool({
    database: "students",
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password"
})

conn.getConnection((err) => {
    if(err){
        console.log("connection error: " + err);
    }else{
        console.log("Connected to DB!");
    }
});

// -------------------------multer start------------------------------
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./docs");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + req.body.fullName.split(" ").join("-") + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage
});

const multiUpload = upload.fields([{name: "profile"}, {name: "marksheet"}]);

// --------------------------multer end-------------------------------


app.post("/register", multiUpload, (req, res) => {
    console.log(req.body);
    let insertQuery = `INSERT INTO admissions(admissionId, fullName, motherName, email, mobNumber, parentsMobNumber, lastQualification, college, address, aadharNo, batchNo, dob, batchMode, profile, marksheet) values(${uuid()}, )`;
    res.status(200).json("registered..!");
});

// ---------------------------------------------------
app.listen(5000, () => {
    console.log("Server Is Up & Running.!");
})