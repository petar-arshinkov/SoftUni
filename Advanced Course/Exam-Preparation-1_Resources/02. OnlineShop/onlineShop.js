class OnlineShop {
    products = [];
    sales = [];

    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace < spaceRequired) {
            throw new Error("Not enough space in the warehouse.")
        }
        this.products.push({
            product,
            quantity
        });

        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.` 
    }

    quantityCheck(product, minimalQuantity) {
        const data = this.products.find(p.product == product);
       
    }

    sellProduct(product) {

    }

    revision() {

    }

}




const myOnlineShop = new OnlineShop(500)

console.log(myOnlineShop.loadingStore('headphones', 10, 200));

console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.loadingStore('TV', 40, 500));