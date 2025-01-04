import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Customer } from '../customer';
import { error } from 'console';

@Component({
  selector: 'app-update-customer',
  standalone: false,
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']  // Fixed 'styleUrls' to be plural
})
export class UpdateCustomerComponent implements OnInit {
  id: number=0;  // Default value (or null if applicable)
  customer: Customer = new Customer();  

  constructor( private customerService: CustomerService, private route: ActivatedRoute,private routes:Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];  // Now the `id` gets assigned here
    this.customerService.getCustomerByID(this.id).subscribe(data => {
      this.customer = data as Customer;
    }, error => {
      console.log(error);
    });

     
  }


  onSubmit(){
    console.log("xx")
    this.customerService.updateCustomer(this.id, this.customer).subscribe(data=>{
      //this.goTocustomerlist();
      console.log("yy")
      this.goTocustomerlist();
    })
 
}


  goTocustomerlist(){
   this.routes.navigate(['customers']);
  }
}
