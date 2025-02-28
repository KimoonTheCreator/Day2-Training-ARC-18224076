const products_section = document.querySelector("#Product-data");

products_section.innerHTML = '';

fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        
        const firstTenProducts = data.products.slice(0, 10);
        
        firstTenProducts.forEach((product) => {
            const container = document.createElement("div");
            container.className = "Product";
            
            const imageContainer = document.createElement("div");
            const image = document.createElement("img");
            const title = document.createElement("div");
            const description = document.createElement("div");
            const price = document.createElement("div");
            const rating = document.createElement("div");
            
            title.className = "product-title";
            description.className = "product-description";
            price.className = "product-price";
            rating.className = "product-rating";
            imageContainer.className = "product-image-container";
            
            image.src = product.thumbnail;
            image.alt = product.title;
            title.textContent = product.title;
            description.textContent = product.description;
            price.textContent = `$${product.price}`;
            rating.textContent = `Rating: ${product.rating}/5`;
            
            
            imageContainer.appendChild(image);
            container.appendChild(imageContainer);
            container.appendChild(title);
            container.appendChild(description);
            container.appendChild(price);
            container.appendChild(rating);
            
            
            products_section.appendChild(container);
        });
    })
    .catch(error => {
        console.error("Error fetching products:", error);
    });