/*
Interface Segregation Principle -
Os clientes não devem ser forçados a depender de types, interfaces ou membros abstratos que não utilizam
*/
import { ShoppingCart } from './classes/shopping-cart';
import { Order } from './classes/order';
import { Messaging } from './services/messaging';
import { Persistancy } from './services/persistancy';
import { Product } from './classes/product';
import { NoDiscount } from './classes/discount';
import { EnterpriseCustomer /*IndividualCustomer*/ } from './classes/customer';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistancy = new Persistancy();
// const individualCustomer = new IndividualCustomer(
//   'Luiz',
//   'Miranda',
//   '111.111.111-11',
// );
const enterpriseCustomer = new EnterpriseCustomer(
  'Empresa Gigante',
  '111.111.111-11',
);
const order = new Order(
  shoppingCart,
  messaging,
  persistancy,
  enterpriseCustomer,
);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
