const productsArray =[
    {
        id: "price_1MLbyCAHCREnOELIX9waUdGR",
        title: 'Coffee',
        Price: 4.99
    },
    {
        id: "price_1MLbyeAHCREnOELIhR55tSTH",
        title: 'Sunglass',
        Price: 9.99
    },
    {
        id: "price_1MLbyzAHCREnOELI4QpPHFks",
        title: 'Camera',
        Price: 39.99
    }
];


function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)
   
    if(productData == undefined) {
        console.log("Product data not exist for Id: " + id);
        return undefined;
    }
    return productData;
}

export {productsArray, getProductData}