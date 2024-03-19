const productRepository = require("../services/productRepository");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await productRepository.getAllProducts();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await productRepository.getProductById(req.params.id);
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