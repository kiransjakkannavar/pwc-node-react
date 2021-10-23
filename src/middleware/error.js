module.exports = (error, req, res, next) => {
  res.status(error.status || 500).json({
    success: false,
    message: error.status ? error.message : "Something doesn't add up here, please try again"
  });
};
