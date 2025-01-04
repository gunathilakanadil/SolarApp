import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Electricity } from './electricity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElectricityService {
  private baseURL = "http://localhost:8081/api/electricity-profiles";
  constructor(private httpClient:HttpClient) { }

  createelectricity(electricity: Electricity): Observable<Electricity> {
    return this.httpClient.post<Electricity>(`${this.baseURL}`, electricity);
  }

  getElectricityByProjectId(projectId: number): Observable<Electricity[]> {
    return this.httpClient.get<[]>(`${this.baseURL}/project/${projectId}`);
  }

  getElectricityByID(id: number): Observable<Electricity> {
    return this.httpClient.get<Electricity>(`${this.baseURL}/${id}`);  // Fixed mismatched quotes here
  }

  updateElectricity(id:number,customer:Electricity):Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`,customer);  
}

deleteElectricity(id:number):Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`); 
}
  
}
