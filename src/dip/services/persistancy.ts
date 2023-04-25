import { PersistancyProtocol } from '../classes/interface/persistancy-protocol';

export class Persistancy implements PersistancyProtocol {
  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }
}
