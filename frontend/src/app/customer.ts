import { Project } from './project';
import { BankAccount } from './bank-account';
export class Customer {
    id: number;
    name: string;
    address: string;
    number: string;
    email: string;
    nic: string;
    projects: Project[]; // Assuming you have a 'Project' class in Angular
    bankAccounts: BankAccount[]; // Assuming you have a 'BankAccount' class in Angular
  
    constructor(
      id: number = 0,
      name: string = '',
      address: string = '',
      number: string = '',
      email: string = '',
      nic: string = '',
      projects: Project[] = [],
      bankAccounts: BankAccount[] = []
    ) {
      this.id = id;
      this.name = name;
      this.address = address;
      this.number = number;
      this.email = email;
      this.nic = nic;
      this.projects = projects;
      this.bankAccounts = bankAccounts;
    }
  }
  