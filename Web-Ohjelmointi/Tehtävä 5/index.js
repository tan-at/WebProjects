var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const mysql = require("mysql");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const con = mysql.createConnection({
    host:"localhost",
    user:"testUser",
    password:"kt123456",
    database:"puhelinluettelo",
    multipleStatements:true //out parametria varten aliohjelmassa
});

con.connect((err) => {
    if (err) {
        console.log("Error connecting to Db");
        return;
    }
    console.log("Connection established");
});

//---------------------------------------------------------------------------------------------------------------------

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
        "X-Requested-With,content-type"
    );

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);

    // Pass to next layer of middleware
    next();
});

//------------------------------------GET, POST, PUT, DELETE -metodit--------------------------------------------------

// Retrieve all users
app.get('/henkilot', function (req, res) {
    con.query('SELECT * FROM henkilot', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'kaikki listan tiedot.' });
    });
});

// Retrieve user with id
app.get('/henkilo/:id', function (req, res) {
    let henkilo_id = req.params.id;
    if (!henkilo_id) {
        return res.status(400).send({ error: true, message: 'Anna haettavan henkilön id' });
    }
    con.query('SELECT * FROM henkilot where id=?', henkilo_id, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[0], message: 'henkilön tiedot.' });
    });
});

// Add a new user
app.post('/henkilo', function (req, res) {
    //let henkilo = req.body.henkilo;
    let henkilo = req.body;
    if (!henkilo) {
        return res.status(400).send({ error:true, message: 'Anna lisättävä henkilo' });
    }
    con.query("INSERT INTO henkilot SET ? ", henkilo, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Uusi tietue luotu onnistuneesti.' });
    });
});

//  Update user with id
app.put('/henkilo', function (req, res) {
    let henkilo_id = req.body.id;
    let user = req.body.user;
    if (!henkilo_id || !user) {
        return res.status(400).send({ error: user, message: 'Anna päivitettävä henkilö ja henkilön id' });
    }
    con.query("UPDATE henkilot SET henkilo = ? WHERE id = ?", [user, henkilo_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'henkilön tietue on päivitetty onnistuneesti.' });
    });
});

//  Delete user
app.delete('/henkilo', function (req, res) {
    let henkilo_id = req.body.id;
    if (!henkilo_id) {
        return res.status(400).send({ error: true, message: 'Anna poistettavan id' });
    }
    con.query('DELETE FROM henkilot WHERE id = ?', [henkilo_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Tietue poistettu onnistuneesti.' });
    });
});

//----------------------------------------------------------------------------------------------------------------------

/*const henkilo = {nimi:'Ankka Roope', puhelin:'050-1231232'};
con.query('INSERT INTO henkilot SET ?', henkilo, (err, res) => {
    if(err) throw err;

    console.log('Last insert ID:', res.insertId);
});*/

/*con.query(
    'UPDATE henkilot SET puhelin = ? Where ID = ?',
    ['044-6544655', 3],
    (err, result) => {
        if (err) throw err;

        console.log(`Changed ${result.changedRows} row(s)`);
    }
);*/

/*con.query(
    'DELETE FROM henkilot WHERE id = ?', [5], (err, result) => {
        if (err) throw err;

        console.log(`Deleted ${result.affectedRows} row(s)`);
    }
);*/

/*con.query("CALL sp_get_henkilot()", function (err, rows) {
    if (err) throw err;

    console.log("Data received from Db:");
    //console.log(rows);
    rows[0].forEach((row) => {
        console.log(`${row.nimi}, puhelin on ${row.puhelin}`);
    });
});*/

/*con.query(
    "SET @henkilo_id = 0; CALL sp_insert_henkilo(@henkilo_id, 'Matti Miettinen', '044-5431232'); SELECT @henkilo_id",
    (err, rows) => {
        if (err) throw err;

        console.log("Data receiver from Db:\n");
        //console.log(rows);
    }
)*/

/*con.query("SELECT * FROM henkilot", (err, rows) => {
    if (err) throw err;
    console.log("Data received from Db:");
    rows.forEach((row) => {
        console.log(`${row.nimi}, puhelin on ${row.puhelin}`);
    });
    //console.log(rows);
});*/

con.end((err) => {
    //The connection is terminated gracefully
    //Ensures all remaining queries are executed
    //Then sends a quit packet to the MySQL server.
});