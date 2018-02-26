const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const messages = [{
  id:1,
  text:"Agrego un projecto",
  title:"Thornton cline",
  image:"https://storyrocket-aws3.s3.amazonaws.com/full5a43d61b534f61514395163sr_jpg"
}]
app.use(express.static('public'))

app.get('/',function(req,res){
  res.status(200).send("index.");
});

io.on('connection',function(socket){
  console.log('Alguien se conecto');
  socket.emit('messages',messages);

  socket.on('new-menssage',function(data){
    messages.push(data);
    io.sockets.emit('messages',messages);///emite a todos los sockets el mesages - data
  })
});


server.listen(8080,function(){
  console.log("server fue ejecutado ___");
});
