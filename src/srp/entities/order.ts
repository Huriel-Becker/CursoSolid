import { OrderStatus } from './interface/order-status';
import { Messaging } from '../services/messaging';
import { Persistancy } from '../services/persistancy';
import { ShoppingCart } from './shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistancy: Persistancy,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpety()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Seu pedido com total de ${this.cart.total()} foi recebido`,
    );
    this.persistancy.saveOrder();
    this.cart.clear();
  }
}
