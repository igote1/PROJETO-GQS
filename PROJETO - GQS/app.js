const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { sequelize } = require('./src/database/models');

const livroRoutes = require('./src/routes/livroRoutes');
const autorRoutes = require('./src/routes/autorRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static(path.join(__dirname, 'src/public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/livros', livroRoutes);
app.use('/autores', autorRoutes);

app.get('/', (req, res) => {
  res.redirect('/livros/novo');
});

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch(err => {
  console.error('Erro ao conectar no banco:', err);
});
