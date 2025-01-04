import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Panel } from './panel';

@Injectable({
  providedIn: 'root'
})
export class PanelserviceService {
  private baseURL = "http://localhost:8081/api/panels";
  constructor(private httpClient:HttpClient) { }

 
  getCustomerList(): Observable<Panel[]> {
      return this.httpClient.get<Panel[]>(`${this.baseURL}`);
    }

}
