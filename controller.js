// let sql=require('mysql');
// const express = require('express');
var con=require('./connection')


class studentController {
    
    getAllStudents(req,res){
        con.query('select * from student',(err,data)=>{
            res.status(200).send(JSON.stringify(data))
        })
    }

   async getStudentsById(req,res){
        let id = req.params.ID
        await con.query(`select *from student where ID = ${id}`,(err,data)=>{
            res.status(200).send(JSON.stringify(data))
        })
    }

    addNewStudent(req,res){
        let {id,name,age}=req.body;
        con.query(`insert into student values (${id},"${name}",${age})`)
        res.status(200).send("New student added")
    }

    editStudent(req,res){
        let id = req.params.ID
        let {name,age}=req.body;
        con.query(`update student set Name="${name}",age=${age} where ID=${id}`)
        res.status(200).send(`Student data updated for ID: ${id}`)
    }

    deleteStudent(req,res){
        let id = req.params.ID
        con.query(`delete from student where ID=${id}`)
        res.status(200).send(`Student ID:${id} deleted`)
    }
}

module.exports=new studentController()