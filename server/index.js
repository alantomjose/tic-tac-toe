const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,"..","build")));
app.use(express.static("public"));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"));
});


app.listen(5000, () => {
    console.log('App listening on port 5000!');
});