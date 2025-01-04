import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { BankAccountService } from '../bank-account.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Bank } from '../bank';

@Component({
  selector: 'app-create-bank',
  standalone: false,
  
  templateUrl: './create-bank.component.html',
  styleUrl: './create-bank.component.css'
})
export class CreateBankComponent {
  constructor(private bankService:BankAccountService,private route: ActivatedRoute,private routers: Router) {}

  onSubmit(form:NgForm){
    const bank=form.value.Bank;
    const branch=form.value.Branch;
    const acc=form.value.Acc;
    const cid=this.route.snapshot.params['id'];

    const bankaccount=new Bank(branch,acc,cid,bank);
    console.log(bankaccount);
    this.bankService.createbankaccount(bankaccount).subscribe({
      next: (response) => {
        console.log('Project created successfully:', response);
        alert('Project created successfully!');
        this.routers.navigate([`/create-project/${cid}`])
        
      },
      error: (error) => {
        console.error('Error creating project:', error);
        alert('Failed to create project. Please try again.');
      }
    });
  }

  skip(){
    this.routers.navigate([`/create-project/${this.route.snapshot.params['id']}`])
  }


}
