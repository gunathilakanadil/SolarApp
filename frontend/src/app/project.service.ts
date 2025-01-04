import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from './project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseURL = "http://localhost:8081/api/projects";

  constructor(private httpClient: HttpClient) { }

   
  createProject(project: Project): Observable<Project> {
    return this.httpClient.post<Project>(`${this.baseURL}`, project);
  }

  getProjectsByCustomerId(cusId: number): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`${this.baseURL}/customer/${cusId}`);
  }
   
  getProjectByID(id: number): Observable<Project> {
    return this.httpClient.get<Project>(`${this.baseURL}/${id}`);  // Fixed mismatched quotes here
  }

  updateProject(id:number,customer:Project):Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`,customer);  
}

deleteProject(id:number):Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`); 
}
}
