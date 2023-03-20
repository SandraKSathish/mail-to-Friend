const express = require('express');
const appRoute = require('./router/router')



const app = express();
const port = process.env.PORT|| 5000;

app.use(express.json());

// routes
app.use('/api',appRoute)

app.listen(port, () => {
    console.log(`Project is listening at http://localhost:${port}`)
  })