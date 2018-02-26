var socket = io.connect('http://localhost:8080',{'forceNew':true});

socket.on('messages',function(data){
  console.log(data);
  render(data);
})
function render(data){
  const html = data.map(function(elem,index){
    return(`<div>
              <img src="${elem.image}" style="width:2%">
              <strong>${elem.title}</strong>
              <em>${elem.text}</em>
            </div>`);
  }).join(" ");
  var _count = data.length;
  $('.__count').html(_count);
  //$('#notifications').append(html);
  document.getElementById('notifications').innerHTML = html;
}

function addNotifications(e){
  var payload = {
    image: document.getElementById('image').value,
    title: document.getElementById('title').value,
    text:document.getElementById('texto').value,
  };
  notifiacations(payload);
  socket.emit('new-menssage',payload);
  return false;
}

function notifiacations(data){
  var options = {
        title: data.title,
        options: {
          body: data.text,
          icon: data.image,
          lang: 'en-US'
        }
      };
      console.log(options);
      $("#notifycations").notifycations(options);
}
