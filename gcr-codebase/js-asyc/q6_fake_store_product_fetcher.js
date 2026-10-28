// Q6: E-Commerce Dashboard — Product Card Fetcher
// Run in a browser console or a browser page; fetch requires network access.
async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const products = await response.json();
        products.forEach(product => {
            console.log(`Product: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Image: ${product.image}`);
            console.log("-----------------------------");

            // Optional HTML card, if the page contains an element with id="products".
            const productContainer = document.querySelector("#products");
            if (productContainer) {
                const card = document.createElement("article");
                const title = document.createElement("h3");
                const price = document.createElement("p");
                const image = document.createElement("img");

                title.textContent = product.title;
                price.textContent = `$${product.price}`;
                image.src = product.image;
                image.alt = product.title;
                image.width = 120;

                card.append(title, price, image);
                productContainer.appendChild(card);
            }
        });
    } catch (error) {
        console.error("Failed to load products. Please try again.", error);
    }
}

fetchProducts();
