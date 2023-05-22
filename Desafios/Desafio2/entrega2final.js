const fs = require('fs');




class ProductManager {

constructor(path) {

console.log("Inicio..");

console.log(this.path);

this.path = path;

}




addProduct(product) {

const products = this.loadProducts();

product.id = products.length + 1;

products.push(product);

console.log("grabando..");

this.saveProducts(products);

console.log("grabo.");

}




getProduct(productId) {

const products = this.loadProducts();

return products.find((product) => product.id === productId);

}




updateProduct(productId, updatedProduct) {

const products = this.loadProducts();

const productIndex = products.findIndex((product) => product.id === productId);

if (productIndex !== -1) {

updatedProduct.id = productId;

products[productIndex] = updatedProduct;

this.saveProducts(products);

return true;

}

return false;

}




deleteProduct(productId) {

const products = this.loadProducts();

const productIndex = products.findIndex((product) => product.id === productId);

if (productIndex !== -1) {

products.splice(productIndex, 1);

this.saveProducts(products);

return true;

}

return false;

}




loadProducts() {

try {

const data = fs.readFileSync(this.path, 'utf8');

return JSON.parse(data);

} catch (error) {

return [];
}
}




saveProducts(products) {

fs.writeFileSync(this.path, JSON.stringify(products, null, 4), 'utf8');

}

}




// Ejemplo de uso:

const productManager = new ProductManager('products.json');




// Agregar un producto

const newProduct = {

title: 'Producto 1',

descripcion: 'Descripción del producto 1',

price: 10.99,

thumbnail: 'ruta/imagen1.jpg',

code: 'ABC123',

stock: 50,

};

productManager.addProduct(newProduct);




// Consultar un producto por ID

const product = productManager.getProduct(1);

console.log(product);




// Modificar un producto

const updatedProduct = {

title: 'Producto 1 (modificado)',

descripcion: 'Descripción del producto 1 (modificado)',

price: 12.99,

thumbnail: 'ruta/imagen1_modificada.jpg',

code: 'ABC123',

stock: 60,

};

productManager.updateProduct(1, updatedProduct);




// Eliminar un producto

//productManager.deleteProduct(1);