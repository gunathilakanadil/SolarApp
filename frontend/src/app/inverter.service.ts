import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inverter } from './inverter';
import { Observable } from 'rxjs';
import { ProjectInverter } from './project-inverter';

@Injectable({
  providedIn: 'root'
})
export class InverterService {
  private baseURL = "http://localhost:8081/api/project-inverters";
  constructor(private httpClient:HttpClient) { }
   

  createinverter(inverter:ProjectInverter):Observable<Inverter>{
    return this.httpClient.post<Inverter>(`${this.baseURL}`,inverter);
  }


  getInvertersByProjectId(projectId: number): Observable<ProjectInverter[]> {
    return this.httpClient.get<[]>(`${this.baseURL}/project/${projectId}`);
  }

  getInverterByID(id: number): Observable<ProjectInverter> {
    return this.httpClient.get<ProjectInverter>(`${this.baseURL}/${id}`);  // Fixed mismatched quotes here
  }

  updateInverter(id:number,customer:ProjectInverter):Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`,customer);  
}

deleteInverter(id:number):Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`); 
}


}
