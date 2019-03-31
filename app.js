
const express = require('express');
const morgan = require('morgan');


const app = express();


app.use(morgan('combined'))
app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.get('/burgers',(req,res)=>{
  res.send('We have juicy cheese burgers')

})


app.get('/pizza/pineapple',(req,res)=>{
  res.send('"Your pizza is on the way!"')
})



app.get('/echo', (req, res) => {
  const responseText = `Here are some details of your request:
    Base URL: ${req.baseUrl}
    Host: ${req.hostname}
    Path: ${req.path}
    Ip:${req.ip}
    Body:${req.body}
  `;
  res.send(responseText);
});

app.get('/queryViewer',(req,res)=>{
  console.log(req.query);
  res.send(req.query)
  res.end();
})

app.get('/greetings',(req,res)=>{
  const name = req.query.name;
  const race = req.query.race;
  if(!name){
    return res.status(400).send('Please provide a name')
  }
  
  if(!race){
    return res.status(400).send('Please provide a race');
  }
  const greeting = `Greetings ${name} the ${race}, welcome
  to our kingdom.here is the additional info`;

  res.send(greeting);
})

app.listen(8000, () => {
  console.log('Express server is listening on port 8000!');
 
});