const app = require('./index');

app.get('*', (req, res) => {
  res.json({statusCode: 400, message: [`Não encontramos ${req.originalUrl} no servidor!`]});
});

app.listen(3001, () => {
  console.log(`CodeBy API is running at port 3001`)
})
