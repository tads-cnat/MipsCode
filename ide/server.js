const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/ide', (req, res) => {
  const code = 'req.body.code';
  const user = null
  res.render('index', { code, user });
});

<<<<<<< HEAD
const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
=======
app.listen(3000, () => {
  console.log('Aplicativo rodando em http://localhost:3000');
});
>>>>>>> parent of f2b157a (versão estavel para apresentar)
