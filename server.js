const fs = require("fs");
const http = require("http");

const serverInstance = http.createServer((req, res) => {
    path = "./views/";
    res.setHeader("Content-Type", "text/html");
    switch (req.url) {
        case "/": {
            path += "index.html";
            res.statusCode = 200;
            break;
        }
        case "/contact": {
            path += "contact-me.html";
            res.statusCode = 200;
            break;
        }
        case "/about": {
            path += "about.html";
            res.statusCode = 200;
            break;
        }
        case "/contact-us": {
            res.statusCode = 302;
            res.setHeader("Location", "/contact");
            break;
        }
        default: {
            path += "404.html";
            res.statusCode = 404;
            break;
        }
    }
    fs.readFile(path, (error, data) => {
        if (error) {
            console.error(error);
            res.end();
        } else {
            res.end(data);
        }
    });
});
serverInstance.listen(3000);
