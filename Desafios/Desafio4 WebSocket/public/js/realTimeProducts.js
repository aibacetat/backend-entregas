const socket = io();

const form = document.querySelector( '.products-section' );

form.addEventListener( 'submit', async ( e ) => {

    e.preventDefault();

    try {
        const product = {
            title: form.title.value,
            category: form.category.value,
            code: form.code.value,
            shortDescription: form.shortDescription.value,
            description: form.description.value,
            thumbnails: form.thumbnails.value,
            demoUrl: form.demoUrl.value,
            techStack: form.techStack.value,
            stock: form.stock.value,
            price: form.pric.value,
        };

        // Emit a 'new-product'
        socket.emit( 'new-product', product );

    } catch ( error ) {
        console.error( error );

    } finally {
        // Reset your form here
        form.reset();
    }
} );

socket.on( "update-products", ( products ) => {
    const productList = document.querySelector( ".products-list" );
    productList.innerHTML = "";

    products.forEach( ( product ) => {
        productList.innerHTML += `
      <li class='product-item' data-id='${product.id}'>
        <img src='${product.thumbnails[ 0 ]}' alt='Image of ${product.title}' class='product-item__image' />
        <div class='product-item__body'>
          <p class='ff-secondary fs-2 ls-1'>${product.title}</p>
          <p>${product.category}</p>
          <p>${product.shortDescription}</p>
          <p>Price: ${product.price}</p>
        </div>
        <div class='product-item__buttons'>
          <button class='btn-edit ff-secondary fs-2'>Edit</button>
          <button class='btn-delete ff-secondary fs-2'>Delete</button>
        </div>
      </li>
      `;
    } );
} );