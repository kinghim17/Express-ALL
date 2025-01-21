//create a HTTP server and expose it to the world and answer through query parameters
const express = require("express");
const app = express();
function sum(n){
    let sumi=0;
    for(let i=0;i<=n;i++){
        sumi=sumi+i;
    }
    return sumi;
}
app.get("/",function(req,res){
    const n = req.query.n
    const ans=sum(n);
    res.send("Answer is:" + ans);
})
app.listen(3000);
