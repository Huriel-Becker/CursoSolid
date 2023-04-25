import { OrderStatus } from './interface/order-status';
import { CustomerOrder } from './interface/customer-protocol';
import { ShoppingCartProtocol } from './interface/shopping-cart-protocol';
import { MessagingProtocol } from './interface/messaging-protocol';
import { PersistancyProtocol } from './interface/persistancy-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistancy: PersistancyProtocol,
    private readonly customer: CustomerOrder,
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
      `Seu pedido com total de ${this.cart.totalWithDiscount()} foi recebido`,
    );
    this.persistancy.saveOrder();
    this.cart.clear();

    console.log(
      'O cliente é:',
      this.customer.getName(),
      this.customer.getIDn(),
    );
  }
}
