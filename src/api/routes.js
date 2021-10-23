const express = require('express');
const userRouter = require('./user/routes');

const router = (app) => {
  const mainRouter = express.Router();

  mainRouter.use('/user', userRouter);

  mainRouter.use((req, res, next) => {
    if (!req.route) {
      const error = new Error('No route matched');
      error.status = 404;
      return next(error);
    }

    next();
  });

  app.use('/api', mainRouter);
};

module.exports = router;
