class Product {
    constructor( id, name, category, image, price) {
      this.id = id;
      this.name = name;
      this.category = category;
      this.image = image;
      this.price = price;
    }
  }

const ProductsList = [
    new Product(1, "Air Jordan 1", "Buty męskie", require('../../../../assets/Images/Login/Icon.png'), 499.99),
    new Product(2, "Air Jordan 2", "Buty męskie", require('../../../../assets/Images/Login/Icon.png'), 522.99),
    new Product(3, "Air Jordan 3", "Buty męskie", require('../../../../assets/Images/Login/Icon.png'), 421.99),
    new Product(3, "Air Jordan 3", "Buty męskie", require('../../../../assets/Images/Login/Icon.png'), 421.99),
    new Product(3, "Air Jordan 3", "Buty męskie", require('../../../../assets/Images/Login/Icon.png'), 421.99),
    new Product(3, "Air Jordan 3", "Buty męskie", require('../../../../assets/Images/Login/Icon.png'), 421.99),
    new Product(3, "Air Jordan 3", "Buty męskie", require('../../../../assets/Images/Login/Icon.png'), 421.99)
];

export { Product, ProductsList };