const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

//produtos
const produtos = [
  {id: 1, nome: "Chevrolet Onix 1.0 Ltz Turbo", preco:"R$82.950", descricao:"Carro com 51.027km Rodados, Ano 21/21, Flex, Manual, Motor 1.0, 4 Portas, Branco e Sedan", imagem:"imagem/carro1.avif"},
  {id: 2, nome: "Chevrolet Onix 1.0 Ltz Turbo 5p", preco:"R$77.900", descricao:"Carro com 42.000 km Rodados, Ano 20/20, Flex, Manual, Motor 1.0, 5 Portas, Preto e hatch", imagem:"imagem/carro2.avif"},
  {id: 3, nome: "Toyota Corolla 1.8", preco:"R$139.900", descricao:"Carro com 71.826Km Rodados, Ano 20/20, Flex, Automático, Motor 1.8, 4 Portas, Prata e Sedan", imagem:"imagem/carro3.jpg"},
  {id: 4, nome: "MINI Cooper 2.0", preco:"R$143.890", descricao:"Carro com  32.000Km Rodados, Ano 19/19, Gasolina, Automático, Motor 2.0, 4 Portas, Azul e Mini SUV", imagem:"imagem/carro4.jpg"},
  {id: 5, nome: "Volkswagen Polo 1.0", preco:"R$84.900", descricao:"Carro com 51.027km Rodados, Ano 21/21, Flex, Automático, Motor 1.0, 4 Portas, Prateado e Sedan", imagem:"imagem/carro5.jpg"},
  {id: 6, nome: "BMW Serie 3 2.0", preco:"R$251.900", descricao:"Carro com 51.027km Rodados, Ano 21/21, Flex, Manual, Motor 2.5, 2 Portas, Cinza e hatch", imagem:"imagem/carro6.webp"},
  {id: 7, nome: "Hyundai I30 2.0 Gls Aut. 5p", preco:"R$49.900", descricao:"Carro com 99.538 Km Rodados, Ano 11/11, Gasolina, Motor 2.0, 4 portas, Cinza hatch", imagem:"imagem/carro10.webp"},
  {id: 8, nome: "", preco:"", descricao:"", imagem:"imagem/carro8.jpg"},
  {id: 9, nome: "Audi TT RS 2.5 Tfsi", preco:"R$542.950", descricao:"Carro com 51.027km Rodados, Ano 21/21, Gasolina, Automático, Motor 1.0, 4 Portas, Branco e Sedan", imagem:"imagem/imagem9.jpg"},
  {id: 10, nome: "", preco:"", descricao:"", imagem:"imagem/carro8.jpg"},
  
];

//buscar produtos por ID
function buscarProdutoPorID (id){
  const produto = produtos.find(produto => produto.id == id);
  return produto || null
}


//rotas
app.get('/', (req, res) => {
  res.render('index', { produtos });
});

app.get('/produtos', (req, res) => {
  res.render('produtos', { message: 'Produto' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});6


