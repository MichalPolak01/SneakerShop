class Product {
    constructor( id, name, category, image, price, description) {
      this.id = id;
      this.category = category;
      this.name = name;
      this.description = description;
      this.price = price;
      this.image = image;
    }
  }

const ProductsList = [
    new Product(1, "Air Jordan 1", "Buty męskie", require('../../../../assets/Images/Login/Icon.png'), 499.99, 'Air Jordan 1 - ikona nie tylko sportowej mody, lecz również kultury ulicznej. Te legendarnie stylowe buty, zaprojektowane przez Michaela Jordana i Petera Moore\'a w 1985 roku, podbiły serca fanów na całym świecie swoim charakterystycznym designem oraz doskonałym komfortem noszenia. Wykonane z wysokiej jakości materiałów, Air Jordan 1 to nie tylko obuwie, to symbol niepowtarzalnego stylu i nieustającej pasji do sportu. Dostępne w różnorodnych kolorach i edycjach, te buty są niezrównane pod względem jakości i prestiżu. Zainwestuj w legendę i dołącz do historii ulicznej mody z Air Jordan 1.'),
    new Product(2, "Air Jordan 2", "Buty męskie", require('../../../../assets/Images/Login/Icon.png'), 599.99, 'Air Jordan 1 - ikona nie tylko sportowej mody, lecz również kultury ulicznej. Te legendarnie stylowe buty, zaprojektowane przez Michaela Jordana i Petera Moore\'a w 1985 roku, podbiły serca fanów na całym świecie swoim charakterystycznym designem oraz doskonałym komfortem noszenia. Wykonane z wysokiej jakości materiałów, Air Jordan 1 to nie tylko obuwie, to symbol niepowtarzalnego stylu i nieustającej pasji do sportu. Dostępne w różnorodnych kolorach i edycjach, te buty są niezrównane pod względem jakości i prestiżu. Zainwestuj w legendę i dołącz do historii ulicznej mody z Air Jordan 1.'),
    new Product(3, "Air Jordan 3", "Buty męskie", require('../../../../assets/Images/Login/Icon.png'), 199.99, 'Air Jordan 1 - ikona nie tylko sportowej mody, lecz również kultury ulicznej. Te legendarnie stylowe buty, zaprojektowane przez Michaela Jordana i Petera Moore\'a w 1985 roku, podbiły serca fanów na całym świecie swoim charakterystycznym designem oraz doskonałym komfortem noszenia. Wykonane z wysokiej jakości materiałów, Air Jordan 1 to nie tylko obuwie, to symbol niepowtarzalnego stylu i nieustającej pasji do sportu. Dostępne w różnorodnych kolorach i edycjach, te buty są niezrównane pod względem jakości i prestiżu. Zainwestuj w legendę i dołącz do historii ulicznej mody z Air Jordan 1.'),
    new Product(4, "Air Jordan 4", "Buty męskie", require('../../../../assets/Images/Login/Icon.png'), 399.99, 'Air Jordan 1 - ikona nie tylko sportowej mody, lecz również kultury ulicznej. Te legendarnie stylowe buty, zaprojektowane przez Michaela Jordana i Petera Moore\'a w 1985 roku, podbiły serca fanów na całym świecie swoim charakterystycznym designem oraz doskonałym komfortem noszenia. Wykonane z wysokiej jakości materiałów, Air Jordan 1 to nie tylko obuwie, to symbol niepowtarzalnego stylu i nieustającej pasji do sportu. Dostępne w różnorodnych kolorach i edycjach, te buty są niezrównane pod względem jakości i prestiżu. Zainwestuj w legendę i dołącz do historii ulicznej mody z Air Jordan 1.'),
    new Product(5, "Air Jordan 5", "Buty męskie", require('../../../../assets/Images/Login/Icon.png'), 299.99, 'Air Jordan 1 - ikona nie tylko sportowej mody, lecz również kultury ulicznej. Te legendarnie stylowe buty, zaprojektowane przez Michaela Jordana i Petera Moore\'a w 1985 roku, podbiły serca fanów na całym świecie swoim charakterystycznym designem oraz doskonałym komfortem noszenia. Wykonane z wysokiej jakości materiałów, Air Jordan 1 to nie tylko obuwie, to symbol niepowtarzalnego stylu i nieustającej pasji do sportu. Dostępne w różnorodnych kolorach i edycjach, te buty są niezrównane pod względem jakości i prestiżu. Zainwestuj w legendę i dołącz do historii ulicznej mody z Air Jordan 1.'),
    new Product(6, "Air Jordan 6", "Buty męskie", require('../../../../assets/Images/Login/Icon.png'), 599.99, 'Air Jordan 1 - ikona nie tylko sportowej mody, lecz również kultury ulicznej. Te legendarnie stylowe buty, zaprojektowane przez Michaela Jordana i Petera Moore\'a w 1985 roku, podbiły serca fanów na całym świecie swoim charakterystycznym designem oraz doskonałym komfortem noszenia. Wykonane z wysokiej jakości materiałów, Air Jordan 1 to nie tylko obuwie, to symbol niepowtarzalnego stylu i nieustającej pasji do sportu. Dostępne w różnorodnych kolorach i edycjach, te buty są niezrównane pod względem jakości i prestiżu. Zainwestuj w legendę i dołącz do historii ulicznej mody z Air Jordan 1.'),
    new Product(7, "Air Jordan 7", "Buty męskie", require('../../../../assets/Images/Login/Icon.png'), 199.99, 'Air Jordan 1 - ikona nie tylko sportowej mody, lecz również kultury ulicznej. Te legendarnie stylowe buty, zaprojektowane przez Michaela Jordana i Petera Moore\'a w 1985 roku, podbiły serca fanów na całym świecie swoim charakterystycznym designem oraz doskonałym komfortem noszenia. Wykonane z wysokiej jakości materiałów, Air Jordan 1 to nie tylko obuwie, to symbol niepowtarzalnego stylu i nieustającej pasji do sportu. Dostępne w różnorodnych kolorach i edycjach, te buty są niezrównane pod względem jakości i prestiżu. Zainwestuj w legendę i dołącz do historii ulicznej mody z Air Jordan 1.'),
];

const CartList = [
  new Product(1, "Air Jordan 1", "Buty męskie", require('../../../../assets/Images/Login/Icon.png'), 499.99, 'Air Jordan 1 - ikona nie tylko sportowej mody, lecz również kultury ulicznej. Te legendarnie stylowe buty, zaprojektowane przez Michaela Jordana i Petera Moore\'a w 1985 roku, podbiły serca fanów na całym świecie swoim charakterystycznym designem oraz doskonałym komfortem noszenia. Wykonane z wysokiej jakości materiałów, Air Jordan 1 to nie tylko obuwie, to symbol niepowtarzalnego stylu i nieustającej pasji do sportu. Dostępne w różnorodnych kolorach i edycjach, te buty są niezrównane pod względem jakości i prestiżu. Zainwestuj w legendę i dołącz do historii ulicznej mody z Air Jordan 1.'),
  new Product(2, "Air Jordan 2", "Buty męskie", require('../../../../assets/Images/Login/Icon.png'), 599.99, 'Air Jordan 1 - ikona nie tylko sportowej mody, lecz również kultury ulicznej. Te legendarnie stylowe buty, zaprojektowane przez Michaela Jordana i Petera Moore\'a w 1985 roku, podbiły serca fanów na całym świecie swoim charakterystycznym designem oraz doskonałym komfortem noszenia. Wykonane z wysokiej jakości materiałów, Air Jordan 1 to nie tylko obuwie, to symbol niepowtarzalnego stylu i nieustającej pasji do sportu. Dostępne w różnorodnych kolorach i edycjach, te buty są niezrównane pod względem jakości i prestiżu. Zainwestuj w legendę i dołącz do historii ulicznej mody z Air Jordan 1.'),
  new Product(3, "Air Jordan 3", "Buty męskie", require('../../../../assets/Images/Login/Icon.png'), 199.99, 'Air Jordan 1 - ikona nie tylko sportowej mody, lecz również kultury ulicznej. Te legendarnie stylowe buty, zaprojektowane przez Michaela Jordana i Petera Moore\'a w 1985 roku, podbiły serca fanów na całym świecie swoim charakterystycznym designem oraz doskonałym komfortem noszenia. Wykonane z wysokiej jakości materiałów, Air Jordan 1 to nie tylko obuwie, to symbol niepowtarzalnego stylu i nieustającej pasji do sportu. Dostępne w różnorodnych kolorach i edycjach, te buty są niezrównane pod względem jakości i prestiżu. Zainwestuj w legendę i dołącz do historii ulicznej mody z Air Jordan 1.'),
  new Product(4, "Air Jordan 4", "Buty męskie", require('../../../../assets/Images/Login/Icon.png'), 299.99, 'Air Jordan 1 - ikona nie tylko sportowej mody, lecz również kultury ulicznej. Te legendarnie stylowe buty, zaprojektowane przez Michaela Jordana i Petera Moore\'a w 1985 roku, podbiły serca fanów na całym świecie swoim charakterystycznym designem oraz doskonałym komfortem noszenia. Wykonane z wysokiej jakości materiałów, Air Jordan 1 to nie tylko obuwie, to symbol niepowtarzalnego stylu i nieustającej pasji do sportu. Dostępne w różnorodnych kolorach i edycjach, te buty są niezrównane pod względem jakości i prestiżu. Zainwestuj w legendę i dołącz do historii ulicznej mody z Air Jordan 1.'),
];

const ShopList = [
  { 
      id: 1,
      products: [
          new Product(1, "Air Jordan 1", "Buty męskie", require('../../../../assets/Images/Login/Icon.png'), 499.99, 'Air Jordan 1 opis'),
          new Product(2, "Inny produkt", "Kategoria", require('../../../../assets/Images/Login/Icon.png'), 99.99, 'Inny produkt opis'),
          new Product(2, "Inny produkt", "Kategoria", require('../../../../assets/Images/Login/Icon.png'), 99.99, 'Inny produkt opis')  
      ]
  },
  { 
      id: 2,
      products: [
          new Product(1, "Air Jordan 1", "Buty męskie", require('../../../../assets/Images/Login/Icon.png'), 499.99, 'Air Jordan 1 opis'),
          new Product(2, "Inny produkt", "Kategoria", require('../../../../assets/Images/Login/Icon.png'), 99.99, 'Inny produkt opis'),
          new Product(2, "Inny produkt", "Kategoria", require('../../../../assets/Images/Login/Icon.png'), 99.99, 'Inny produkt opis')  
      ]
  },
];

export { Product, ProductsList, CartList, ShopList };