const express = require("express");

const app = express();
const path = "./views/";

app.get("/", (_, res) => {
    res.sendFile(`${path}index.html`, { root: __dirname });
});
app.get("/contact-me", (_, res) => {
    res.sendFile(`${path}contact-me.html`, { root: __dirname });
});
app.get("/about", (_, res) => {
    res.sendFile(`${path}about.html`, { root: __dirname });
});
app.get("/contact", (_, res) => {
    res.redirect("contact-me");
});

app.use((_, res) => {
    res.status(404).sendFile(`${path}404.html`, { root: __dirname });
});
app.listen(process.env.PORT || 3000);
