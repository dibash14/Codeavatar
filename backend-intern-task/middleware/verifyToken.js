const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded; // attaches user info to request
    next(); // continue to next middleware or route
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = verifyToken;
