const express =require ("express");
const app = express();
const PORT = 3001;
const bodyParser = require ("body-parser");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// app.get('/',(req,res) => {
//     const {id,name } = req.query;
//     // const id = req.query.id;
//     // const name = req.query.name;
//     res.send(`<h1> student name is :${name},id is: ${id}</h1>`);
// });
 

 // app.get('/userId/:id/userAge/:age',(req,res) => {
    // const {id,age } = req.params;
  // const id = req.query.id;
    // const name = req.query.name;
  // res.send(`<h1> student id is :${id},age is: ${age}</h1>`);
// });

//header
// app.get('/',(req,res) => {
//     // const id= req.header("id");
//     // const name = req.header("name");
//     // res.send(`student id is :${id},name is: ${name}`);
// });



//video  8

app.use('/register',(req,res)=> {
    res.sendFile(__dirname +"/index.html");
})
app.post('/register',(req,res)=> {
    const fullName = req.body.fullName;
    const age = req.body.age;
   res.send(`<h2> your name is ${fullName} and your age is ${age} </h2>`);
});
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});