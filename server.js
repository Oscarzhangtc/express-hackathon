const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("if you see this message, the server is working")

})
app.post('/', (req, res)=>{
    console.log(req.body)
})

app.listen(process.env.PORT || 3000, function() {
    //allows to HEROKU to change port and run on localhost:3000
    console.log("server is running on port 3000.");
  });
  