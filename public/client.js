const socket = io(); // url här (inom parentesen) om det behövs! "http://localhost:4000"

socket.on("connect", () => {
    console.log("Connection established")
});

socket.on("user-connected", (data) => {
    console.log("User has connected", data)
});

socket.on("new-user-message", (data) => {
    console.log("Welcome message:", data)
});