const requestURL = "../data.json";

async function fetchProductsJSON() 
{
    const response = await fetch(requestURL);
    const products = await response.json();
    return products;
}


fetchProductsJSON().then((products) => 
{
    const cardDetail = document.getElementById("cardDetail");
    let currentID = localStorage.getItem("id");
    const imageDiv = document.getElementById("productImage");
    for (let index = 0; index < products.listOfProducts.length; index++) 
    {
        
        let id = products.listOfProducts[index].id;
        if (id == currentID) 
        {
            
            let name = products.listOfProducts[index].nombre;
            let img = products.listOfProducts[index].imagen;
            let price = products.listOfProducts[index].precio;
            let contact = products.listOfProducts[index].link;
            let description = products.listOfProducts[index].descripcion;
            let seller = products.listOfProducts[index].vendedor;
            let link = products.listOfProducts[index].link;
            imageDiv.innerHTML = `<img src="./assets/img/${img}" alt="">`;
            cardDetail.innerHTML = `
                <h4 class="card-title">Detalles del producto</h4>
                <p class="card-text">Precio:</p>
                <p class="card-price">${price} €</p>
                <h2>${name}</h2>
                <p>${description}</p>
                <p>Vendedor: ${seller}</p>
                <a href="${link}" class="btn">Contactar</a> 
                </div>
            `;
        }
    }
});