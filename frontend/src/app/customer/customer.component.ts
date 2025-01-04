import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Route, RouteReuseStrategy } from '@angular/router';
import { Router } from '@angular/router'; // Correct import


@Component({
  selector: 'app-customer',
  standalone: false,
  
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
  
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = []; // Defined as a class property with initialization
  searchName: string = '';
   

  constructor(private customerService: CustomerService, private router: Router) {} // Corrected colon syntax

  ngOnInit(): void {
    this.getCustomers(); // Changed method name to plural for consistency
  }

  private getCustomers(): void { // Updated method name
    this.customerService.getCustomerList().subscribe(data => { // Corrected syntax
      this.customers = data;
    });
  }


  navigate(){
    this.router.navigate(['createcustomers'])  ;
  }
  updateCustomer(id:number): void { // Proper placement and naming for the UpdateCustomer method
   console.log("xx")
   this.router.navigate(['update-customer',id])  ;
  }

  Customer(): void { // Proper placement and naming for the UpdateCustomer method
    console.log("xx")
    this.router.navigate(['createcustomers'])  ;
   }


   deleteCustomer(id:number){
    this.customerService.deleteCustomer(id).subscribe(data=>{
      this.getCustomers()
    })

   }

   customerdetils(id:number){
    this.router.navigate(['customer-list',id])
   }

   searchCustomers() {
    if (this.searchName.trim()) {
      this.customerService.searchCustomersByName(this.searchName).subscribe(data => {
        this.customers = data;
      });
    } else {
      this.getCustomers()
    }
  }
}

