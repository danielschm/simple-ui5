const express = require("express");
const PORT = 8081;

express()
    .use("/", express.static("./webapp"))
    .listen(PORT, () => {
        console.log("HTTP server listening on localhost:" + PORT);
    });
