import {
  CustomerOrder,
  EnterpriseCustoomer,
  IndividualCustomerProtocol,
} from './interface/customer-protocol';

export class IndividualCustomer
  implements IndividualCustomerProtocol, CustomerOrder
{
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }

  getIDn(): string {
    return this.cpf;
  }

  getName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}

export class EnterpriseCustomer implements EnterpriseCustoomer, CustomerOrder {
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
  getName(): string {
    return this.name;
  }
  getIDn(): string {
    return this.cnpj;
  }
}
