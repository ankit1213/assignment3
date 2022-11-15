const express=require("express")
const bodyParser=require("body-parser")

const app=express()
app.set("views","./views")
app.set("view engine","ejs")

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static("public"))

var ans

app.get('/',(req,res)=>{
    res.render("users.ejs",{ans})
})
app.get("/add",(req,res)=>{
    res.render("add.ejs")
})
app.post("/add/number",(req,res)=>{
    ans=`The sum of given numbers is ${parseInt(req.body.num1)+parseInt(req.body.num2)}`
    console.log(ans)
    res.redirect("/")
})
app.get("/sub",(req,res)=>{
    res.render("sub.ejs")
})

app.post("/sub/number",(req,res)=>{
    ans=`The difference of given numbers is ${parseInt(req.body.num3)-parseInt(req.body.num4)}`
    console.log(ans)
    res.redirect("/")
})
app.get("/mul",(req,res)=>{
    res.render("mul.ejs")
})
app.post("/mul/number",(req,res)=>{
    ans=`The product of given numbers is ${parseInt(req.body.num5)*parseInt(req.body.num6)}`
    console.log(ans)
    res.redirect("/")
})

app.get("/div",(req,res)=>{
    res.render("div.ejs")
})
app.post("/div/number",(req,res)=>{
    if(parseInt(req.body.num8)!=0){
        ans=`The division of given numbers is ${parseInt(req.body.num7)/parseInt(req.body.num8)}`
    }
    else{
        ans="Cannot divide a number with 0"
    }
    
    console.log(ans)
    res.redirect("/")
})


app.listen(5000,()=>{
    console.log("Server is up at 5000")
})