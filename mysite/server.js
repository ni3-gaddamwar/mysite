const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("Hi there");
});

app.listen(8888, () => {
    console.log("hello my site is running")
});
