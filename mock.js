var express = require('express');
var app = express ();
var bodyParser = require('body-parser');

app.use(bodyParser.raw({ type: '*/*'}))

var success = {status: "success"}
var failure = {status: "failure"}

app.get('/', (req, res)=> {
    res.send('<html><body><h1>JAVASCRIBES MOCK SERVER 2</h1></body></html>')
  })


app.post('/login', (req, res)=>{
    var usernameInfo = JSON.parse(req.body.toString());
    var userName = usernameInfo.username

    if(userName === "bob"){
   
    res.send(JSON.stringify(success))}

    else{(res.send(JSON.stringify(failure)))}
})

app.post('/signup', (req, res)=>{
   
    res.send(JSON.stringify(success))
})

app.get('/dashboard', (req, res)=>{
  
    res.send(JSON.stringify(success))

})

app.get('/openOrders', (req, res)=>{
  
    res.send(JSON.stringify(success))

})

app.get('/closedOrders', (req, res)=>{
  
    res.send(JSON.stringify(success))

})

app.get('/pastDue', (req, res)=>{
  
    res.send(JSON.stringify(success))

})

app.post('/addOrder', (req, res)=>{
    res.send(JSON.stringify(success))

})

app.post('/cancelOrder', (req, res)=>{
    res.send(JSON.stringify(success))

})

app.post('/modifyOrder', (req, res)=>{
    res.send(JSON.stringify(success))

})

app.get('/cancelOrder', (req, res)=>{
    res.send(JSON.stringify(success))

})
  
app.listen(4000, console.log('up and running on port 4000'))