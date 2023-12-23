const { fork } = require('child_process');
const cluster = require('cluster');
const os = require('os');
const express = require('express');

const totalCPUs = os.cpus().length;

if (cluster.isPrimary) {
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }
} else {
  const app = express();
  const PORT = 8080;


  app.get("/", (req, res) => {
    return res.json({
      message: `Server on PID ${process.pid}`
    })
  });

  app.listen(PORT,()=>console.log(`Server started at port: ${PORT}`));
}