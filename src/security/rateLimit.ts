import rateLimit from 'express-rate-limit';

const allowList = process.env.RATE_LIMITE_ALLOW_LIST?.split(',') || [];

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  skip: (request) => allowList.includes(request.ip),
});

export default limiter;
