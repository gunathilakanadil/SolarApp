import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseURL = "http://localhost:8081/api/customers";

  constructor(private httpClient: HttpClient) { }

  getCustomerList(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${this.baseURL}`);
  }

  createCustomer(customer: Customer): Observable<any> {
    return this.httpClient.post(`${this.baseURL}`, customer);
  }

  getCustomerByID(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.baseURL}/${id}`);  // Fixed mismatched quotes here
  }

  updateCustomer(id:number,customer:Customer):Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`,customer);  
}

deleteCustomer(id:number):Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`); 
}

searchCustomersByName(name: string): Observable<Customer[]> {
  return this.httpClient.get<Customer[]>(`${this.baseURL}/search?name=${name}`);
}
 
}
