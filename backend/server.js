const express = require('express');
const app = express();

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.listen(5000, () => console.log("We are currently listening on port 5000..."));