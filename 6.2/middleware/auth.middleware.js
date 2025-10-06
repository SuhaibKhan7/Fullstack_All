

const jsonwebtoken = require('jsonwebtoken');
const authVerify = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).send("Access denied. No token provided.");
    }
    try {
        const secretkey="helloabchello"
        const decoded = jsonwebtoken.verify(token, secretkey);
        req.user = decoded.id;
        next();
    } catch (err) {
        res.status(400).send("Invalid token.");
    }  
}
module.exports = { authVerify } 