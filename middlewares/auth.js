const jwt = require('jsonwebtoken');
const User = require('../model/User');
// const TransactionPin = require("../models/transactionpin.model")

const isLoggin = async (req, res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		try {
			token = req.headers.authorization.split(' ')[1];

			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			req.user = await User.findById(decoded.userId).select('-password');
			if (!req.user) throw new Error('Not authorized');
		} catch (error) {
			console.log(error);
			return res
				.status(401)
				.json({status: false, message: 'Not authorized, no token'});
		}
	}
	if (!token) {
		return res
			.status(401)
			.json({status: false, message: 'Not authorized, no token'});
	}
	next();
};

const isAdmin = (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
  
    if (req.user.userType !== 'admin') {
      return res.status(403).json({ error: "You are not an admin" });
    }
  
    next();
  };

  
  const isVerified = (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
  
    if (!req.user.isVerified) {
      return res.status(403).json({ error: "Your account is not verified" });
    }
  
    next();
  };

  

module.exports = {
    isLoggin,
    isAdmin,
    isVerified
};