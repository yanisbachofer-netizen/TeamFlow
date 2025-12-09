// backend/utils/auth.js

const jwt = require('jsonwebtoken');

// Retrieve the secret from the .env file
const JWT_SECRET = process.env.JWT_SECRET; 

if (!JWT_SECRET) {
    console.error("FATAL ERROR: JWT_SECRET not defined in environment variables.");
    // Optional: can stop the application if security is compromised.
    // process.exit(1); 
}

/**
 * Generates a JSON Web Token (JWT) for a given user.
 * @param {Object} user - The user object (should include id, username, and role).
 * @returns {string} The signed JWT.
 */
const generateToken = (user) => {
    // The payload contains the user's identification information
    const payload = {
        id: user.id, 
        username: user.username,
        role: user.role, // Useful for future authorization checks (e.g., admin)
    };

    // Token configuration (expiration)
    const options = {
        expiresIn: '24h', // Token expires after 24 hours
    };

    return jwt.sign(payload, JWT_SECRET, options);
};

/**
 * Authentication middleware to verify the JWT in the Authorization header.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Next middleware function.
 */
const authMiddleware = (req, res, next) => {
    // The token is expected to be sent in the header "Authorization: Bearer <token>"
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Access denied. Token not provided or incorrect format.' });
    }

    const token = authHeader.split(' ')[1];

    try {
        // Verification and decoding of the token
        const decoded = jwt.verify(token, JWT_SECRET);
        
        // Attaches the decoded user data to the request object
        req.user = decoded; 
        
        // Token is valid, continue to the next function (the route)
        next();
    } catch (err) {
        // Verification error (invalid signature, expired token, etc.)
        return res.status(401).json({ message: 'Invalid or expired token.' });
    }
};

module.exports = {
    generateToken,
    authMiddleware,
};
