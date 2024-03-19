const productRepository = require("../services/productRepository");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await productRepository.getAllProducts();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
};
