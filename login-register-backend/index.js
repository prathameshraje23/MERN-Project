import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

//connecting database of name myLoginRegisterDB
mongoose.connect('mongodb+srv://jivan:raje123@nodeexpressprojects.fm9j6iw.mongodb.net/myLoginRegisterDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB Connected")
})


//creating schema for user

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

//model
const User = new mongoose.model("User",userSchema)

//routes
app.get("/",(req,res)=>{
    res.send("My API")
})

app.post("/login",(req,res)=>{
    const {email, password } = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
             if(password === user.password ){
                res.send({message: "Login Successful",user: user})
             }
             else{
                res.send({message: "Password didn't match"})
             }
        }
        else
        {
            res.send({message: "User not registered"})
        }
    })
})

app.post("/register",(req,res)=>{
    // console.log(req.body)
    const { name, email, password } = req.body
    
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User Already registered"});
        }
        else{
            const user = new User({
                name,
                email,
                password
            })
            user.save( err => {
                if(err) {
                    res.send(err)
                }
                else {
                    res.send( { message: "Successfully Registered! Please login now.."})
                }
            })
        }
    })
})

app.listen(9002,() => {
    console.log("BE started at port 9002")
})