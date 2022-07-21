
        const requestURL = "../data.json";

        async function fetchProductsJSON() {
        const response = await fetch(requestURL);
        const products = await response.json();
        return products;
        }

        fetchProductsJSON().then((products) => {
            for (let index = 0; index < products.listOfProducts.length; index++) {
                const shop = document.getElementById("products");
            
                let name = products.listOfProducts[index].nombre;
                let img = products.listOfProducts[index].imagen;
                let price = products.listOfProducts[index].precio;
                let contact = products.listOfProducts[index].link;
                shop.innerHTML += `
                
                <div class="card" style="width: 100vw;">
            <img src="${img}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <div>
                <p class="product-price">${price}</p>
            </div>

            <a href="${contact}" class="btn btn-primary">Contactar <svg width="35" height="35" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.8 5.7C14.4 2 9.50002 0.9 5.70002 3.2C2.00002 5.5 0.800024 10.5 3.20002 14.2L3.40002 14.5L2.60002 17.5L5.60002 16.7L5.90002 16.9C7.20002 17.6 8.60002 18 10 18C11.5 18 13 17.6 14.3 16.8C18 14.4 19.1 9.5 16.8 5.7ZM14.7 13.4C14.3 14 13.8 14.4 13.1 14.5C12.7 14.5 12.2 14.7 10.2 13.9C8.50002 13.1 7.10002 11.8 6.10002 10.3C5.50002 9.6 5.20002 8.7 5.10002 7.8C5.10002 7 5.40002 6.3 5.90002 5.8C6.10002 5.6 6.30002 5.5 6.50002 5.5H7.00002C7.20002 5.5 7.40002 5.5 7.50002 5.9C7.70002 6.4 8.20002 7.6 8.20002 7.7C8.30002 7.8 8.30002 8 8.20002 8.1C8.30002 8.3 8.20002 8.5 8.10002 8.6C8.00002 8.7 7.90002 8.9 7.80002 9C7.60002 9.1 7.50002 9.3 7.60002 9.5C8.00002 10.1 8.50002 10.7 9.00002 11.2C9.60002 11.7 10.2 12.1 10.9 12.4C11.1 12.5 11.3 12.5 11.4 12.3C11.5 12.1 12 11.6 12.2 11.4C12.4 11.2 12.5 11.2 12.7 11.3L14.3 12.1C14.5 12.2 14.7 12.3 14.8 12.4C14.9 12.7 14.9 13.1 14.7 13.4Z" fill="white"/>
                </svg>
                </a>
            </div>
        </div>
        `;
            }
        }
        )

        


    
        /*sustituir json por el nombre de la lista de objetos*/
