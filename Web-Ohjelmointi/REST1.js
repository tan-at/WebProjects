let dictionary = [];

const express = require("express");
const fs = require("fs");
/*const bodyParser = require("body-parser");
const app = express().use(bodyParser.json());*/         //Vanhentunut tapa, ei enää voimassa
//Katso https://devdocs.io/express/ -> req.body
var app = express();
app.use(express.json());    //For parsing application/json
app.use(express.urlencoded({ extended: true }));

/*CORS isn’t enabled on the server, this is due to security reasons by default,
so no one else but the webserver itself can make requests to the server.*/
// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");

    // Request methods you wish to allow
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    // Request headers you wish to allow
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token"
    );

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);

    res.setHeader("Content-type", "application/json");

    // Pass to next layer of middleware
    next();
});



//GET all users
app.get("/words",  (req, res) => {
    const data = fs.readFileSync('./sanakirja.txt',
        {encoding:"utf8", flag:"r"});
    //data:ssa on nyt koko tiedoston sisältö. Sisältö pitää pätkiä, ja tehdä taulukko.
    const splitLines = data.split(/\r?\n/);

    //Käydään läpi splitLinesissa jokainen rivi
    splitLines.forEach((line) => {
        const words = line.split(" ");  //Sanat laitetaan taulukkoon words
        console.log(words);
        const word = {
            fin:words[0], en:words[1]
        };
        dictionary.push(word);
        console.log(dictionary);
    });

    res.json(dictionary);
});

//GET a user        //app.get("/users/:id"
app.get("/words/:fin",  (req, res) => {
    const fin = String(req.params.fin);
    console.log(fin);
    const user = dictionary.find(user => user.fin === fin);
    res.send(user? user : {message: "Sanaa ei löydy."});
});

//ADD a user
app.post("/words", (req, res) => {
    const word = req.body;
    console.log(req.body);
    dictionary.push(word);
    res.json(dictionary);
});

/*
//UPDATE a user
app.put("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const updated_user = req.body;
    data = data.map((user) => (user.id === id ? updated_user : user));
    res.json(data);
});

//DELETE a user
app.delete("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    data = data.filter((user) => user.id !== id);
    res.json(data);
});
*/

app.listen(3000, () => {
    console.log("Serveri kuuntelee portissa 3000");
});