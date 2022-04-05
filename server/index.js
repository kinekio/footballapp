const express=require("express")
const bodyParser =require("body-parser")
const cors =require("cors")
const app =express()
const mysql=require("mysql");

const db= mysql.createPool({
    host:"localhost",
    user:"root",
    password:"dbms",
    database: "customer"
});
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.post("/login",(req,res)=>{
    const email=req.body.useremail;
    const password=req.body.userpass;
    console.log(email)
    const gmail="rahul@dravid.com"
    const q="Select * from customer where email=? and password=?";
    var query=db.query(q,[email,password],(err,result)=>{
        if(err){
            res.send({err:err})
        }
        if (result.length > 0){
            res.send({message: "Sucessful",name: result[0].p_fname,id: result[0].p_id});

        }
        else{
            res.send({message: "Unsucessful"})
        }
      
        console.log(result)
    })
    console.log(query.sql)
})

app.listen(3001,()=>{
});