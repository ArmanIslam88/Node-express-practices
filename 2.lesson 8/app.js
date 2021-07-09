const express = require ('express');
const app = express(); 
const userRouter = require('./routes/users.route');

app.use("/api/user",userRouter);

app.get('/', (req,res) => {
    res.send("<h1> i am a home route </h1>");
});
app.get('/register', (req,res) => {
    // res.status(200).json({
    //     name : "arman islam",
    //     // statusCode: 200,
    // });
    // res.redirect('/login');
    res.sendFile(__dirname+"/views/register.html")
    // res.cookie("name","arman");
    // res.cookie("age","30");

    res.clearCookie("age");
});

app.get('/what',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html');
});

app.get('/login', (req,res) => {
    res.send("<h1> i am a login pge </h1>");
});

app.use((req,res) => {
    res.send("<h1> 404 !!! page not found </h1>")
});

module.exports = app;