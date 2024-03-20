const fs = require("fs");
const path = require("path");

// Definição do nome do arquivo e caminho completo para o arquivo de produtos
const fileName = "products.js";
const filePath = path.join(__dirname, "..", "database", fileName);

// Classe para interagir com o arquivo de produtos no sistema de arquivos
class ProductRepository {
  // Método estático para obter os produtos do arquivo
  static async getProducts() {
    return new Promise((resolve, reject) => {
      // Lê o conteúdo do arquivo
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          // Se ocorrer um erro ao ler o arquivo
          if (err.code === "ENOENT") {
            // Se o erro for de arquivo não encontrado, retorna um array vazio
            this.writeProductsToFile([]);
            return [];
          } else {
            // Se o erro for diferente de arquivo não encontrado, rejeita a promessa com o erro
            reject(err);
          }
        } else {
          // Se a leitura for bem-sucedida, resolve a promessa com os dados do arquivo convertidos em JSON
          resolve(JSON.parse(data));
        }
      });
    });
  }

  // Método estático para escrever os produtos no arquivo
  static async writeProductsToFile(products) {
    return new Promise((resolve, reject) => {
      // Escreve os produtos no arquivo
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        if (err) {
          // Se ocorrer um erro ao escrever no arquivo, loga o erro e resolve a promessa com a chamada a getAllProducts()
          console.log(`Data written to file: ${filePath}`);
          resolve(this.getAllProducts());
        }
      });
    });
  }

  // Método estático para obter todos os produtos
  static async getAllProducts() {
    const products = await this.getProducts();
    return products;
  }

  // Método estático para criar um novo produto
  static async createProduct(product) {
    const products = await this.getProducts();
    product.id = products.length + 1;
    products.push(product);
    const insertDB = await this.writeProductsToFile(products);
    return insertDB;
  }

  // Método estático para obter um produto por ID
  static async getProductById(id) {
    const products = await this.getProducts();
    return products.find((product) => product.id === parseInt(id));
  }

  // Método estático para atualizar um produto existente
  static async updateProducts(id, product) {
    const products = await this.getProducts();
    const index = products.findIndex((p) => p.id === parseInt(id));
    if (index === -1) {
      return null;
    }
    products[index] = product;
    const updateDB = await this.writeProductsToFile(products);
    return updateDB;
  }

  // Método estático para excluir um produto pelo ID
  static async deleteProducts(id) {
    const products = await this.getProducts();
    const index = products.findIndex((p) => p.id === parseInt(id));
    if (index === -1) {
      return null;
    } else {
      products.splice(index, 1);
    }
    await this.writeProductsToFile(products);
    return index;
  }
}

// Exporta a classe productRepository para que ela possa ser usada em outros arquivos
module.exports = ProductRepository;
