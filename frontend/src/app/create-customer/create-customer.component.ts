import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  standalone: false,
  
  templateUrl: './create-customer.component.html',
  styleUrl: './create-customer.component.css'
})
export class CreateCustomerComponent implements OnInit {
  customer: Customer = new Customer();

  constructor(private customerService: CustomerService, private router: Router,) { }

  ngOnInit(): void {
    // Any initialization logic can go here.
  }

  saveCustomer(): void {
    this.customerService.createCustomer(this.customer).subscribe((response: Customer) => {
        // Assuming the server returns the customer with an `id`.
        this.customer = response;
        console.log("ID IS:", response.id);
        this.router.navigate([`/bankaccount/${response.id}`]);
    }, error => {
        console.error('Error creating customer:', error);
    });
}


  goToCustomerList(id: number): void {
    this.router.navigate([`/create-project/${id}`]);
}


  onSubmit(): void {
    console.log(this.customer);
    this.saveCustomer(); // Save the customer
  }
}