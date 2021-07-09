const express =require ('express');
const app = express();
const PORT =3000;

const myMiddleware = (req ,res,next) => {
// console.log("middle ware function");
req.currenTime = new Date(Date.now());
next();
};

app.use((req,res,next)=>{
    res.send('404!!! not found');
});
app.use(myMiddleware);

app.get('/',(req,res) => {
    console.log("i am home."+req.currenTime);
    res.send("<h1> welcome reyan </h1>");
});

app.get('/about',(req,res) => {
    console.log("i am about."+req.currenTime);
    res.send("<h1> welcome to about </h1>");
});


app.listen(PORT,() => {
    console.log(`server is running at http://localhost:${PORT}`);
});