const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { USERFRONT_PUBLIC_KEY } = require("./environment");

const app = express();
app.use(cors());

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  // Authorizatiom: Bearer dffgsdg
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "Bad token",
    });
  }

  try {
    const auth = await jwt.verify(token, USERFRONT_PUBLIC_KEY);
    req.auth = auth;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Bad token",
    });
  }
};

app.get("/data", authenticateToken, (req, res) => {
  return res.json({
    someSecretData: "Shhh!!",
  });
});

app.listen(3010, () => console.log("listening on port 3010"));
