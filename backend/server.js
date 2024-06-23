const app = require('./app');
const pool = require('./config/db');
const port = process.env.PORT || 5000;

pool.connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => console.error('Error connecting to the database', err));
