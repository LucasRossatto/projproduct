const productRepository = require("../services/productRepository");

exports.getAllProducts = async (req, res) => {
  try {
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
      res.status(200).json(product);
    }
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
};


exports.createProduct = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
}