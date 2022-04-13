const express = require ("express");
const app = express ();

const path = require ("path");
//const pathResolve = (path.resolve(__dirname, "./public"));
app.use(express.static("./public"));

app.listen (3040, ()=> {
    console.log ("servidor corriendo en http://localhost:3040")
});

app.get ("/",(req,res) => {
    res.sendFile (path.resolve(__dirname, './views/index.html'));
});

app.get ("/banner",(req,res) => {
    res.sendFile(path.resolve(__dirname, '/img/img-home-banner.jpg'));
});

app.get ("/cafetera",(req,res) => {
    res.sendFile(path.resolve(__dirname, '/img/img-cafetera-moulinex.jpg'));
});

app.post("/register", (req,res) => {
    res.sendFile (path.resolve(__dirname,'./views/index.html'));
});

app.get ("/register",(req,res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.post("/login", (req,res) => {
    res.sendFile (path.resolve(__dirname,'./views/index.html'));
});

app.get ("/login",(req,res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});
