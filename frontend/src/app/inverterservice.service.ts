import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inverter } from './inverter';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InverterserviceService {
  private baseURL = "http://localhost:8081/api/inverters";
  constructor(private httpClient:HttpClient) { }

 
  getInverterList(): Observable<Inverter[]> {
      return this.httpClient.get<Inverter[]>(`${this.baseURL}`);
    }}