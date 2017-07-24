var path = require('path');//helps with file paths
var fs = require('fs');//helps with file system tasks
var mysql = require('mysql');
var __dirname = "C:\\users\\jon\\desktop\\jonathanrick\\public";//Change this to your directory
var bodyParser = require('body-parser');
var https = require('https');
var pem = require('pem');
var express = require('express');
var app = express();

//Listen on port 8080
app.listen(8080);
//Parse Object from response
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Send HTML
app.get('/',  function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
  });
//Link static files to client
app.use(express.static(path.join(__dirname)));

//create handlers for forms
    app.post('/SI', function (req, res) {
        if (!req.body) return res.sendStatus(400);
                var StudentID = req.body.StudentID;
                var StudentName = req.body.StudentName;
                var StudentAddress = req.body.StudentAddress;
                var StudentPhone = req.body.StudentPhone;
                var StudentEmail = req.body.StudentEmail;
                
                var School = req.body.School;
                var BeginningDate = req.body.BeginningDate;
                var EndingDate = req.body.EndingDate;
                var Major = req.body.Major;
                var Degree = req.body.Degree;
                
                var Company = req.body.Company;
                var Role = req.body.Role;
                var BeginningDate1 = req.body.BeginningDate1;
                var EndingDate1 = req.body.EndingDate1;
     
                var ProjectTitle = req.body.ProjectTitle;
                var ProjectDescription = req.body.ProjectDescription;
                var BeginningDate2 = req.body.BeginningDate2;
                var EndingDate2 = req.body.EndingDate2;
                var YourRole = req.body.YourRole;
                
                var CourseID = req.body.CourseID;
                var CourseTitle = req.body.CourseTitle;
                var BeginningDate3 = req.body.BeginningDate3;
                var EndingDate3 = req.body.EndingDate3;
                var InstructorName = req.body.InstructorName;
                //Student ID is required to Insert Into table
                if(StudentID != ""){
                var sqlInsersion = "INSERT INTO StudentInformation.tbl_student2 \n\
                (StudentID,StudentName, StudentAddress, StudentPhone, StudentEmail,School,BeginningDate,EndingDate,Major,Degree,\n\
                Company ,Role,BeginningDate1,EndingDate1,ProjectTitle ,ProjectDescription,BeginningDate2 ,EndingDate2 ,Role2,CourseID,CourseTitle,BeginningDate3 ,EndingDate3 ,InstructorName)\n\
                 VALUES (StudentName,StudentID,StudentAddress,StudentPhone,StudentEmail,School,BeginningDate,EndingDate,Major,Degree,Company,Role,BeginningDate1,EndingDate1,\n\
                ProjectTitle ,ProjectDescription,BeginningDate2 ,EndingDate2 ,Role2,CourseID,CourseTitle,BeginningDate3 ,EndingDate3 ,InstructorName)";
                conn.query(sqlInsersion , function(err,result){
                        if(err) throw err;                        
                        
            });
                
              
            
            res.end("Record Successfuly Added");
        }		else
			res.end("Record was not Added to the table")
});



//Connect to mysql database
var conn = mysql.createConnection({host: "localhost", port: 3306,user:"root",password: "password"});//Change to your Authentication settings

conn.connect(function(err){
		if(err){
			console.log("Error");
			throw err;
		}
		else{
			console.log("Succesful");
	//Create database
			conn.query("CREATE DATABASE IF NOT EXISTS StudentInformation;",function(err,result){
				if(err) throw err;
				console.log("database create!");
			});
	//Use database	
			var sqlQuery1 = 'USE StudentInformation;';
			conn.query(sqlQuery1 , function(err,result){
				if(err) throw err;
			console.log("Connected to database!");});
	//Create tables
			var sqlQuery2 = "CREATE TABLE IF NOT EXISTS tbl_student2 (StudentID varchar(64),StudentName varchar(64), StudentAddress varchar(64), StudentPhone varchar(64), StudentEmail varchar(64),School varchar(64),BeginningDate varchar(64),EndingDate varchar(64),Major varchar(64),Degree varchar(64),Company varchar(64) ,Role varchar(64),BeginningDate1 varchar(64),EndingDate1 varchar(64),ProjectTitle varchar(64),ProjectDescription varchar(64),BeginningDate2 varchar(64),EndingDate2 varchar(64),Role2 varchar(64),CourseID varchar(64),CourseTitle varchar(64),BeginningDate3 varchar(64) ,EndingDate3 varchar(64),InstructorName varchar(64))";
			conn.query(sqlQuery2 , function(err,result){
			if(err) throw err;
			console.log("tbl_student2 is created!");
			});
                        
                        
                        
                        
                    
                }
});
			








