const express = require('express')
const validator = require('validator');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello HNG!')
})

app.get('/info', (req, res) => {
    const email = req.query.email; 
  
    if (!email) {
      return res.status(400).json({
        error: "Email query parameter is required"
      });
    }

    if(validator.isEmail(email)){
      return res.status(400).json({
        error: "The input is an invalid email "
      });
    }
    const currentDatetime = new Date().toISOString(); 
    const response = {
      email: email, 
      current_datetime: currentDatetime,
      github_url: "https://github.com/pepps01/hngx-stage0-public-api.git" 
    };
  
    res.status(200).json(response);
});
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})