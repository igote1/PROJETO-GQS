const express = require('express');
const app = express();
const livroRoutes = require('./src/routes/livroRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', livroRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
