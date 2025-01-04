import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { BankAccountService } from '../bank-account.service';
import { BankAccount } from '../bank-account';
import { Bank } from '../bank';

@Component({
  selector: 'app-customer-list',
  standalone: false,
  
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit {
  customer: any;
  
  error: string | null = null;
  projects: any[] = [];
  errorMessage: string = '';
  bank:Bank[]=[]

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private projectService:ProjectService,
    private router:Router,
    private Bankservice:BankAccountService,
    
  ) {}
  projectdetails(id:number){
    this.router.navigate(['projectdetails',id]) 
  }

  addanotherproject(id:number){
    this.router.navigate(['create-project',id]) 
  }
  ngOnInit(): void {
    const customerId = this.route.snapshot.paramMap.get('id');
    if (customerId) {
      this.fetchCustomerDetails(+customerId);
      this.fetchBank(+customerId);
    }
    this.getProjects(this.route.snapshot.params['id']);
  }
  getProjects(customerId: number): void {
    this.projectService.getProjectsByCustomerId(customerId).subscribe({
      next: (data) => this.projects = data,
      error: (error) => this.errorMessage = error
    });
  }
  fetchCustomerDetails(id: number): void {
    this.customerService.getCustomerByID(id).subscribe(
      (data) => {
        this.customer = data;
        console.log(this.customer)
        this.error = null;
      },
      (err) => {
        this.error = 'Failed to fetch customer details';
        console.error(err);
      }
    );
  }

  fetchBank(cusid: number): void {
    this.Bankservice.getBankAccountByProjectId(cusid).subscribe(
      (data) => {
        this.bank = data;
        console.log(this.bank)
        
        this.error = null;
      },
      (err) => {
        this.error = 'Failed to fetch customer details';
        console.error(err);
      }
    );
  }

  
  into(id:number){
    this.router.navigate(['updatebank',id,this.route.snapshot.params['id']]) 
  }
}