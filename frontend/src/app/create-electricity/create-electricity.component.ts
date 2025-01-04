import { Component } from '@angular/core';
import { ElectricityService } from '../electricity.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Electricity } from '../electricity';

@Component({
  selector: 'app-create-electricity',
  standalone: false,
  
  templateUrl: './create-electricity.component.html',
  styleUrl: './create-electricity.component.css'
})
export class CreateElectricityComponent {
  id!:number;
  constructor(private elecservice:ElectricityService,private route: ActivatedRoute,private router:Router){}

  onSubmit(form: NgForm): void {
    // Retrieve form values
    const connectDate = form.value.connectDate;
    const electricityAccountNumber = form.value.electricityAccountNumber;
    const schema = form.value.schema;
    const areaOffice = form.value.areaOffice;

    // Retrieve project ID from the route parameters
    const projectId = this.route.snapshot.params['id'];

    // Create new Electricity object
    const newElectricity = new Electricity(
      connectDate,
      electricityAccountNumber,
      schema,
      areaOffice,
      +projectId // Convert `projectId` to a number (in case it's a string)
    );

    console.log(newElectricity);

    // Call service to create a new Electricity record
    this.elecservice.createelectricity(newElectricity).subscribe({
      next: (response) => {
        console.log('Electricity created successfully:', response);
        // Handle success (e.g., navigate or show a success message)
        this.id=this.route.snapshot.params['id'];
        this.router.navigate([`/accesories/${this.id}`]);
      },
      error: (error) => {
        console.error('Error creating electricity:', error);
        // Handle error (e.g., show an error message)
      }
    });
  }

  skip(){
    this.router.navigate([`/accesories/${this.route.snapshot.params['id']}`])
  }
}
  