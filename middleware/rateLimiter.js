const rateLimit = require("express-rate-limit");

const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 20, 
  message: {
    error: "Too many submissions. Please try again later.",
  },
});

module.exports = formLimiter;
