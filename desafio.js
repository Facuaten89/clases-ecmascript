

class ProductManager {
    static id = 0;
    constructor(title, description, price, thumbnail, stock) {
        this.products = []
        this.code = ProductManager.id++;
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.stock = stock
    }
    addProduct(product) {
        let codeUsed = this.products.some(item => item.code === product.code)

        if (product.title && product.description && product.price && product.thumbnail && product.code && product.stock && !codeUsed) {
            this.products.push({
                title: product.title,
                description: product.description,
                price: product.price,
                thumbnail: product.thumbnail,
                code: product.code,
                stock: product.stock,
            })
            console.log(`Producto ${product.title} agregado`)

        } else {
            console.error(`Error: Code repetido. El code ${product.code} ya esta en uso`)
        }
    }
    getProducts() {

        return this.products
    }
    getProductById(id) {

        let productFound = this.products.find(prod => prod.code === id)
        if (productFound) {
            return productFound
        } else {
            console.error(`no product found with id ${id}`)
        }
    }
}


const gestionProd = new ProductManager()


const tinto = new ProductManager('vino malbec', 'tinto', 140, 'https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2021/04/514753.jpg', 23)
const blanco = new ProductManager('vino blanco', 'muy dulce', 200, 'https://cdn.pariscityvision.com/library/image/5731.jpg', 30)
const champagne = new ProductManager('champagne', 'seco', 190, 'https://www.cronista.com/files/image/485/485116/635b0c7a1c00e.jpg', 19)



gestionProd.addProduct(tinto)
gestionProd.addProduct(blanco)
gestionProd.addProduct(champagne)

console.log(gestionProd.addProduct(tinto))


console.log(gestionProd.getProductById(1))
console.log(gestionProd.getProductById(100))

console.log(gestionProd.getProducts())