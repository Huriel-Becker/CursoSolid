export interface CustomerOrder {
  getName(): string;
  getIDn(): string;
}

export interface IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustoomer {
  name: string;
  cnpj: string;
}
