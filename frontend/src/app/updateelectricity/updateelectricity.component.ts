import { Component, OnInit } from '@angular/core';
import { ElectricityService } from '../electricity.service';
import { Electricity } from '../electricity';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateelectricity',
  standalone: false,
  
  templateUrl: './updateelectricity.component.html',
  styleUrl: './updateelectricity.component.css'
})
export class UpdateelectricityComponent implements OnInit {
  id: number = 0;
  electricity: Electricity = new Electricity('', '', '', '', 0);

  constructor(
    private electricityService: ElectricityService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.electricity.id=this.id
    this.electricityService.getElectricityByID(this.id).subscribe(
      (data) => {
        this.electricity = data as Electricity;
      },
      (error) => {
        console.error('Error fetching electricity data:', error);
      }
    );
  }

  onSubmit(): void {
    this.electricityService.updateElectricity(this.id, this.electricity).subscribe(
      (data) => {
        console.log('Electricity updated successfully:', data);
        this.router.navigate(['/electricity-list']); // Navigate to a desired route
      },
      (error) => {
        console.error('Error updating electricity:', error);
      }
    );
  }
}
