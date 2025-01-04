import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BankAccount } from './bank-account';
import { Observable } from 'rxjs';
import { Bank } from './bank';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {
  private baseURL = "http://localhost:8081/api/bank-accounts";

  constructor(private httpClient:HttpClient) { }

  createbankaccount(bank:Bank):Observable<Bank>{
    return this.httpClient.post<Bank>(`${this.baseURL}`,bank);
  }

  getBankAccountByProjectId(projectId: number): Observable<Bank[]> {
    return this.httpClient.get<[]>(`${this.baseURL}/customer/${projectId}`);
  }

  getBankAccountByID(id: number): Observable<Bank> {
    return this.httpClient.get<Bank>(`${this.baseURL}/${id}`);  // Fixed mismatched quotes here
  }

  updateBank(id:number,bank:Bank):Observable<any>{
  return this.httpClient.put(`${this.baseURL}/${id}`,bank);  
}

deleteBank(id:number):Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`); 
}
}
