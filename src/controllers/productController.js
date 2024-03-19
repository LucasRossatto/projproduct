const productRepository = require("../services/productRepository");

// Função para obter todos os produtos
exports.getAllProducts = async (req, res) => {
  try {
    // Chama a função do repositório para obter todos os produtos
    const products = await productRepository.getAllProducts();
    // Se for bem-sucedida, retorna os produtos com status 200
    res.status(200).json(products);
  } catch (err) {
    // Se houver um erro, retorna um status 500 com a mensagem de erro
    res.status(500).json({ error: err.toString() });
  }
};

// Função para obter um produto por ID
exports.getProductById = async (req, res) => {
  try {
    // Chama a função do repositório para obter um produto por ID
    const product = await productRepository.getProductById(req.params.id);
    // Se o produto não for encontrado, retorna um status 404 com uma mensagem
    if (!product) {
      res.status(404).json({ error: "Produto não encontrado" });
    } else {
      // Caso contrário, retorna o produto encontrado com status 200
      res.status(200).json(product);
    }
  } catch (err) {
    // Se houver um erro, retorna um status 500 com a mensagem de erro
    res.status(500).json({ error: err.toString() });
  }
};

// Função para criar um novo produto
exports.createProduct = async (req, res) => {
  try {
    // Chama a função do repositório para criar um novo produto com os dados do corpo da requisição
    const product = await productRepository.createProduct(req.body);
    // Se for bem-sucedido, retorna o produto criado com status 201
    res.status(201).json(product);
  } catch (err) {
    // Se houver um erro, retorna um status 500 com uma mensagem indicando o erro
    res.status(500).json({ error: "Erro ao criar produto" });
  }
};

// Função para atualizar um produto existente
exports.updateProduct = async (req, res) => {
  try {
    // Chama a função do repositório para atualizar um produto com base no ID fornecido
    const product = await productRepository.update(req.params.id, req.body);
    // Se o produto não for encontrado, retorna um status 404 com uma mensagem
    if (!product) {
      res.status(404).json({ error: "Produto não encontrado" });
    } else {
      // Caso contrário, retorna o produto atualizado com status 200
      res.status(200).json(product);
    }
  } catch (err) {
    // Se houver um erro, retorna um status 500 com a mensagem de erro
    res.status(500).json({ error: err.toString() });
  }
};
