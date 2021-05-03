const socket = io();

socket.on("connect", () => {
    console.log("Connection established")
});

socket.on("user-connected", (data) => {
    console.log("User has connected", data)
});

socket.on("new-user-message", (data) => {
    console.log("Welcome message:", data)
});