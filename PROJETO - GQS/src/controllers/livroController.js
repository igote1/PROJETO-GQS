const { Livro } = require('../models/livro');

exports.cadastrarLivro = async (req, res) => {
  try {
    const livro = await Livro.create(req.body);
    res.status(201).json(livro);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
};
