const jwt = require("jsonwebtoken");
const fs = require("fs");

const privateKEY = fs.readFileSync("./private.key");
// const publicKEY = fs.readFileSync("./public.key");

const i = "jwt-node";
const s = "jwt-node";
const a = "jwt-node";

// const verifyOptions = {
//   issuer: i,
//   subject: s,
//   audience: a,
//   expiresIn: "8784h",
//   algorithm: "RS256",
//   // header: {
//   //     typ: undefined
//   // }
// };

const generateJWT = (payload) => {
  const signOptions = {
    issuer: i,
    subject: s,
    audience: a,
    expiresIn: "8784h",
    algorithm: "RS256",
    // header: {
    //     "typ": undefined,
    //     "alg": "RS256"
    // }
  };
  const options = signOptions;
  if (payload && payload.exp) {
    delete options.expiresIn;
  }

  return jwt.sign(JSON.parse(JSON.stringify(payload)), privateKEY, options);
};

// const verifyJWT = (payload) => jwt.verify(payload, publicKEY, verifyOptions);

const signJWT = () => false;

module.exports = { generateJWT, signJWT };
