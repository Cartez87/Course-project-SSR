const app = require('./app');

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.info(`Server on port ${PORT}`);
});
