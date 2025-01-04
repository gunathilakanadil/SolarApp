import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import { ActivatedRoute, Router } from '@angular/router';
 
  
 
@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
  standalone: false,
})
export class CreateProjectComponent {
  id: number=0;
  constructor(private projectService: ProjectService,private route: ActivatedRoute,private router: Router) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      // Extract values from the form
      const startDate = form.value.startDate;
      const customerId = this.route.snapshot.params['id'];;

      // Create a new Project object
      const newProject = new Project(startDate, customerId);
      console.log(newProject)
      // Call the service to save the project
      this.projectService.createProject(newProject).subscribe({
        next: (response) => {
          console.log('Project created successfully:', response);
          alert('Project created successfully!');
          this.router.navigate([`/create-electricity/${response.id}`]);
        },
        error: (error) => {
          console.error('Error creating project:', error);
          alert('Failed to create project. Please try again.');
        }
      });
    }
  }
}