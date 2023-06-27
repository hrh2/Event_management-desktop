const jwt = require('jsonwebtoken');
require('dotenv').config();


function verifyToken(req, res, next) {
     const authHeader = req.headers['authorization'];
     const token = authHeader && authHeader.split(' ')[1];
     if (!token) return res.status(401).send({ message: 'Unauthorized' });
     jwt.verify(token,process.env.JWT, (err, decoded) => { if (err) return res.status(403).send({ message: 'Forbidden' });
          req.user = decoded;
          next();
     });
}

function extractUserIdFromToken(req) {
     const authHeader = req.headers.authorization;
     const token = authHeader ? authHeader.split(' ')[1] : null;

     const decodedToken = jwt.decode(token);
     const userId = decodedToken ? decodedToken._id : null;

     return userId;
}

module.exports = {verifyToken,extractUserIdFromToken};