const  fs = require('fs');

fs.exists("demo2.txt", (result) => {
    if(result){
        console.log("paisi to");
    }else{
        console.log("pai nai");
    };
});