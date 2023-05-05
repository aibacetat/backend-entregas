//Constructor to create product object
function Product(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
  
  //Array to store products
  let products = [];
  
  //Function to add a product to the products array
  function addProduct(id, name, price) {
    let product = new Product(id, name, price);
    products.push(product);
  }
  
  //Function to get all products
  function getAllProducts() {
    return products;
  }
  
  //Function to get product by id
  function getProductById(id) {
    return products.find(product => product.id === id);
  }
  
  //Function to show all products
  function showAllProducts() {
    products.forEach(product => console.log(`ID: ${product.id} | Name: ${product.name} | Price: ${product.price}`));
  }
  
  //Function to validate product by id
  function validateProductById(id) {
    return products.some(product => product.id === id);
  }
  