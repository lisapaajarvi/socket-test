const socket = io(); // url här (inom parentesen) om det behövs! "http://localhost:4000"

let messages = document.getElementById('messages');
let form = document.getElementById('form');
let input = document.getElementById('input');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (input.value) {
        socket.emit('message', input.value);
        input.value = '';
    }
});

socket.on("connect", () => {
    console.log("Connection established")
});

socket.on("user-connected", (data) => {
    console.log("User has connected", data)
});

socket.on("new-user-message", (data) => {
    console.log("Welcome message:", data)
});

socket.on('message', function(msg) {
    let item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });
  
socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });