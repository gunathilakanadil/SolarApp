import { Component, OnInit } from '@angular/core';
import { ProjectInverter } from '../project-inverter';
import { InverterService } from '../inverter.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Inverter } from '../inverter';

@Component({
  selector: 'app-updateinverter',
  standalone: false,
  
  templateUrl: './updateinverter.component.html',
  styleUrl: './updateinverter.component.css'
})
export class UpdateinverterComponent   implements OnInit {
  id: number = 0;
  projectInverter: ProjectInverter = new ProjectInverter("",1,1,);

  constructor(
    private inverterService: InverterService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.inverterService.getInverterByID(this.id).subscribe(
      (data) => {
        this.projectInverter = data as ProjectInverter;
      },
      (error) => {
        console.error('Error fetching inverter data:', error);
      }
    );
  }

  onSubmit(): void {
    if (!this.projectInverter.project) {
      this.projectInverter.project = { id: +this.route.snapshot.paramMap.get('id2') };
      this.projectInverter // Provide default project id if it is missing
  } else {
      this.projectInverter.project.id = +this.route.snapshot.paramMap.get('id2');  // Assign the project id as needed
  }console.log(this.projectInverter)
    this.inverterService.updateInverter(this.id, this.projectInverter).subscribe(
      (data) => {
        console.log('Inverter updated successfully:', data);
        this.router.navigate(['/inverter-list']); // Navigate to a desired route
      },
      (error) => {
        console.error('Error updating inverter:', error);
      }
    );
  }
}
