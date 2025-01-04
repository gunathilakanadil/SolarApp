import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Panel } from './panel';
import { Observable } from 'rxjs';
import { ProjectPanel } from './project-panel';

@Injectable({
  providedIn: 'root'
})
export class PanelService {
  private baseURL = "http://localhost:8081/api/project-panels";
  
  constructor(private httpClient:HttpClient) { }

  createpanel(panel:ProjectPanel): Observable<Panel>{
    return this.httpClient.post<Panel>(`${this.baseURL}`, panel);
  }

  getPanelsByProjectId(projectId: number): Observable<ProjectPanel[]> {
    return this.httpClient.get<[]>(`${this.baseURL}/project/${projectId}`);
  }

  getPanelID(id: number): Observable<ProjectPanel> {
    return this.httpClient.get<ProjectPanel>(`${this.baseURL}/${id}`);  // Fixed mismatched quotes here
  }

  updatePanel(id:number,panel:ProjectPanel):Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`,panel);  
}

deletePanel(id:number):Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`); 
}
}
