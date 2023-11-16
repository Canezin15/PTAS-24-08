const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

//produtos
const produtos = [
  {id: 1, nome: "Chevrolet Onix 1.0 Ltz Turbo", preco:"82.950", descricao:"Carro com 51.027km Rodados, Ano 21/21, Flex, Manual, Motor 1.0, 4 Portas, Branco e Sedan", imagem:"carro1.avif"},
  {id: 2, nome: "Chevrolet Onix 1.0 Ltz Turbo 5p", preco:"77.900", descricao:"Carro com 42.000 km Rodados, Ano 20/20, Flex, Manual, Motor 1.0, 5 Portas, Preto e hatch", imagem:"carro2.avif"},
  {id: 3, nome: "Toyota Corolla 1.8 Altis Hybrid Flex Aut. 4p Hibrido Flex", preco:"139.900", descricao:"Carro com 71.826Km Rodados, Ano 20/20, Flex, Automático, Motor 1.8, 4 Portas, Prata e Sedan", imagem:"carro3.jpg"},
  {id: 4, nome: "MINI Cooper 2.0 16V TWINPOWER S", preco:"143.890", descricao:"Carro com  32.000Km Rodados, Ano 19/19, Gasolina, Automático, Motor 2.0, 4 Portas, Azul e Mini SUV", imagem:"carro4.jpg"},
  {id: 5, nome: "Volkswagen Polo 1.0 200 TSI COMFORTLINE", preco:"84.900", descricao:"Carro com 51.027km Rodados, Ano 21/21, Flex, Automático, Motor 1.0, 4 Portas, Prateado e Sedan", imagem:"carro5.jpg"},
  {id: 6, nome: "BMW Serie 3 2.0 M Sport Aut. 4p 184 hp 8 marchas", preco:"251.900", descricao:"Carro com 51.027km Rodados, Ano 21/21, Flex, Manual, Motor 1.0, 4 Portas, Branco e Sedan", imagem:"carro6.webp"},
  {id: 7, nome: "Onix 1.0 Sedan", preco:"82.950", descricao:"Carro com 51.027km Rodados, Ano 21/21, Flex, Manual, Motor 1.0, 4 Portas, Branco e Sedan", imagem:"carro7.jpg"},
  {id: 8, nome: "Onix 1.0 Sedan", preco:"82.950", descricao:"Carro com 51.027km Rodados, Ano 21/21, Flex, Manual, Motor 1.0, 4 Portas, Branco e Sedan", imagem:"carro8.jpg"},
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


