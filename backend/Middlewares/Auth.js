
const jwt = require('jsonwebtoken');
const ensureAuthenticated = (req, res, next) => {
    console.log("req.headers", req.headers);
    
    const authHeader = req.headers['authorization'];
    // const token = req.body.token || req.query.token || req.headers['authorization'];
    // console.log("Token: ", token);
  
    if (!authHeader) {
      return res.status(403).send("A token is required");
    }

    // Split the "Bearer" prefix from the actual token
    const token = authHeader.split(" ")[1]; // Extracts the token after "Bearer"
    if (!token) {
        return res.status(403).json({ message: 'Unauthorized, JWT token is required' });
    }

    console.log("token", token);
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {
            email: decoded.email,
        };
        next();
    } catch (err) {
        return res.status(403)
            .json({ message: 'Unauthorized, JWT token wrong or expired' });
    }
}

module.exports = ensureAuthenticated;