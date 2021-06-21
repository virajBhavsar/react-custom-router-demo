let fs = require("fs");

function Datareturn(){
    let data = fs.readFileSync("../data/customers.json", "utf8");
    let mydata = JSON.parse(data);
    console.log(mydata);
    return mydata;
}


module.exports = Datareturn;

