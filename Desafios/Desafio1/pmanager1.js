//Constructor to create product object
function Product(id, title,description,price,url,code,stock) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.url = url;
    this.code = code;
    this.stock = stock;
  }
  
  //Array to store products
  let products = [];
  
  //Function to add a product to the products array
  function addProduct(title,description,price,url,code,stock) {
    if (title && description && price && url && code && stock) {
      if (validateProductById(code)) {
        console.log("El Codigo del producto ya existe.");
        return;
       } 
       let _id = 1; 
       if(products.length > 0) {
        const item = products.reduce( (prev, current) => {
          return prev.id > current.id ? prev : current;
         });
         _id = item .id + 1;
       }
       
        let product = new Product(_id,title,description,price,url,code,stock);
        products.push(product)
    } else {
      console.log("Todos los campos deben estar llenos.");
    }
  }
  
  //Function to get all products
 function getAllProducts() {
    return products;
  }
  
  //Function to get product by id
   function getProductById(id) {
    const response = products.find(product => product.id === id);
    if( response ) {
return response;
    } else {
      console.log("Not Found.")
    }
  }
  
  //Function to show all products
  function showAllProducts() {
    products.forEach(product => console.log(`ID: ${product.id} | Name: ${product.description} | Price: ${product.price} | Url: ${product.url} | Code: ${product.code} | Stock: ${product.stock}`));
  }
  
  //Function to validate product by id
   function validateProductById(code) {
    return products.some(product => product.code === code);
  }
  
  addProduct("Manzanas", "Fruta"   , 1600 , "url1", "001", 90);
  addProduct("Peras"   , "Frutas"  , 1200 , "url2", "002", 80);
  addProduct("Papas"   , "Verdura" , 1500 , "url3", "003", 120);
  addProduct("Lechugas", "Verduras", 1100 , "url4", "004", 50);
  addProduct("Lomo"    , "Carnes"  , 9000 , "url5", "005", 70);
  addProduct("Salmon", "Pescados"  , 22000, "url6", "006", 150);
  

const item = getProductById(7);
console.log(item);
  showAllProducts();
