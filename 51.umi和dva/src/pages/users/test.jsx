const fs = require("fs")

var int = 0;
function readFile(params) {
    fs.readFile("./src/pages/users/index.css",(err, data) => {
        if (err) throw err;
        // test(data);
        // console.log(data.toString());
        setTimeout(() => {
            test(data);
        }, 1000);

    })
    test2 = ()=>{
        console.log("data.toString()");
    }
}

function test(params) {
    console.log(int++,"|----------");
    readFile()
}

var a = 1;
b = ((a++) + (a++))
console.log(b); 
console.log(a++===2?a:1);