import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BankAccountService } from '../bank-account.service';
import { Bank } from '../bank';

@Component({
  selector: 'app-update-bank',
  standalone: false,
  
  templateUrl: './update-bank.component.html',
  styleUrl: './update-bank.component.css'
})
export class UpdateBankComponent implements OnInit{
  
  id: number=0;
  id2: number=0;  // Default value (or null if applicable)
  bank: Bank = new Bank();  

  constructor( private BankService: BankAccountService, private route: ActivatedRoute,private routes:Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.id2 = this.route.snapshot.params['id2'];  // Now the `id` gets assigned here
   console.log(this.bank)
    this.BankService.getBankAccountByID(this.id).subscribe(data => {
      this.bank = data as Bank;
        
      
    }, error => {
      console.log(error);
    });

     
  }



  
  onSubmit(){
    console.log("xx")
    console.log(this.bank)
    this.BankService.updateBank(this.id, this.bank).subscribe(data=>{
      console.log(this.bank) 
      console.log("Updated")
       
      this.goTocustomerdetails();
    })
 
}


goTocustomerdetails(){
   this.routes.navigate(['customer-list',this.id2]);
  }
}



