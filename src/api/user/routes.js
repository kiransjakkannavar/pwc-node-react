const express = require('express');

const userRouter = express.Router();

const async = require('../../middleware/async');

const user = require('./index');

userRouter.get('/', async(user.fetch));

module.exports = userRouter;
