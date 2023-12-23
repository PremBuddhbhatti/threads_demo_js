const express = require('express');

const app = express();
const PORT = 3000;


app.get("/",(req,res)=>{
  return res.json({
    message: `Server on PID ${process.pid}`
  })
});

app.listen(PORT,()=>console.log(`Server started at port: ${PORT}`))