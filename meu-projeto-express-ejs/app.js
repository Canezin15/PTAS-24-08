const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 1, nome: "nome produto", preco:"400", descricao:"Descricao do produto", imagem:"produto.jpg"},
  //... copia e cola.
]

//rotas
app.get('/', (req, res) => {
  res.render('index', { message: 'Olá, Mundo!' });
});

app.get('/produtos', (req, res) => {
  res.render('produtos', { message: 'Produto' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});6


