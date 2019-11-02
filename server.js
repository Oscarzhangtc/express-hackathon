const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("if you see this message, the server is working")

})
app.post('/', (req, res)=>{
    console.log(req.body)
})
app.listen(3000, ()=>{
    console.log("the express server is listening of port 3000"); 
});