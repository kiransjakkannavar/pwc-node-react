require('dotenv').config();

const expressApp = require('./src/server');

expressApp.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}...`);
});