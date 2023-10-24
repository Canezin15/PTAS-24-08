const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 1, nome: "Onix 1.0 Sedan", preco:"82.950", descricao:"Carro com 51.027km Rodados, Ano 21/21, Flex, Manual, Motor 1.0, Flaca Final 7, 4 Portas, Branco e Sedan", imagem:"carro1.avif"},
  {id: 2, nome: "Onix 1.0 Sedan", preco:"82.950", descricao:"Carro com 51.027km Rodados, Ano 21/21, Flex, Manual, Motor 1.0, Flaca Final 7, 4 Portas, Branco e Sedan", imagem:"carro2.avif"},
  {id: 3, nome: "Onix 1.0 Sedan", preco:"82.950", descricao:"Carro com 51.027km Rodados, Ano 21/21, Flex, Manual, Motor 1.0, Flaca Final 7, 4 Portas, Branco e Sedan", imagem:"carro3.jpg"},
  {id: 4, nome: "Onix 1.0 Sedan", preco:"82.950", descricao:"Carro com 51.027km Rodados, Ano 21/21, Flex, Manual, Motor 1.0, Flaca Final 7, 4 Portas, Branco e Sedan", imagem:"carro4.jpg"},
  {id: 5, nome: "Onix 1.0 Sedan", preco:"82.950", descricao:"Carro com 51.027km Rodados, Ano 21/21, Flex, Manual, Motor 1.0, Flaca Final 7, 4 Portas, Branco e Sedan", imagem:"carro5.jpg"},
  {id: 6, nome: "Onix 1.0 Sedan", preco:"82.950", descricao:"Carro com 51.027km Rodados, Ano 21/21, Flex, Manual, Motor 1.0, Flaca Final 7, 4 Portas, Branco e Sedan", imagem:"carro6.jpg"},
  {id: 7, nome: "Onix 1.0 Sedan", preco:"82.950", descricao:"Carro com 51.027km Rodados, Ano 21/21, Flex, Manual, Motor 1.0, Flaca Final 7, 4 Portas, Branco e Sedan", imagem:"carro7.jpg"},
  {id: 8, nome: "Onix 1.0 Sedan", preco:"82.950", descricao:"Carro com 51.027km Rodados, Ano 21/21, Flex, Manual, Motor 1.0, Flaca Final 7, 4 Portas, Branco e Sedan", imagem:"carro8.jpg"},
  {id: 9, nome: "nome produto", preco:"400", descricao:"Descricao do produto", imagem:"produto.jpg"},
  {id: 10, nome: "nome produto", preco:"400", descricao:"Descricao do produto", imagem:"produto.jpg"},
  {id: 11, nome: "nome produto", preco:"400", descricao:"Descricao do produto", imagem:"produto.jpg"},
  {id: 12, nome: "nome produto", preco:"400", descricao:"Descricao do produto", imagem:"produto.jpg"},
  {id: 13, nome: "nome produto", preco:"400", descricao:"Descricao do produto", imagem:"produto.jpg"},
  {id: 14, nome: "nome produto", preco:"400", descricao:"Descricao do produto", imagem:"produto.jpg"},
  {id: 15, nome: "nome produto", preco:"400", descricao:"Descricao do produto", imagem:"produto.jpg"},
  {id: 16, nome: "nome produto", preco:"400", descricao:"Descricao do produto", imagem:"produto.jpg"},
  {id: 17, nome: "nome produto", preco:"400", descricao:"Descricao do produto", imagem:"produto.jpg"},
  {id: 18, nome: "nome produto", preco:"400", descricao:"Descricao do produto", imagem:"produto.jpg"},
  {id: 19, nome: "nome produto", preco:"400", descricao:"Descricao do produto", imagem:"produto.jpg"},
  {id: 20, nome: "nome produto", preco:"400", descricao:"Descricao do produto", imagem:"produto.jpg"},
  {id: 21, nome: "nome produto", preco:"400", descricao:"Descricao do produto", imagem:"produto.jpg"},
  {id: 22, nome: "nome produto", preco:"400", descricao:"Descricao do produto", imagem:"produto.jpg"},
  {id: 23, nome: "nome produto", preco:"400", descricao:"Descricao do produto", imagem:"produto.jpg"},
  {id: 24, nome: "nome produto", preco:"400", descricao:"Descricao do produto", imagem:"produto.jpg"},
  {id: 25, nome: "nome produto", preco:"400", descricao:"Descricao do produto", imagem:"produto.jpg"},
  
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


