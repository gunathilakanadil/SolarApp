import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Accesories } from './accesories';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccesoriesService {

private baseURL = "http://localhost:8081/api/accessories";
constructor(private httpClient:HttpClient) { }

createaccesories(accesories:Accesories):Observable<Accesories>{
  return this.httpClient.post<Accesories>(`${this.baseURL}`, accesories);
}

getAccessoriesByProjectId(projectId: number): Observable<Accesories[]> {
  return this.httpClient.get<[]>(`${this.baseURL}/project/${projectId}`);
}

getAccByID(id: number): Observable<Accesories> {
  return this.httpClient.get<Accesories>(`${this.baseURL}/${id}`);  // Fixed mismatched quotes here
}

updateAcc(id: number, acc: Accesories): Observable<Accesories> {
  return this.httpClient.put<Accesories>(`${this.baseURL}/${id}`, acc);
}


deleteAcc(id:number):Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`); 
}
}
