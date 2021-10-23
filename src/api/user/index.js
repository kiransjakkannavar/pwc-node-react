const { getUsers } = require('./service')

const fetch = async (req, res) => {
  const users = await getUsers();
  res.status(201).json({
    success: true,
    users
  });
};

module.exports = { fetch };
