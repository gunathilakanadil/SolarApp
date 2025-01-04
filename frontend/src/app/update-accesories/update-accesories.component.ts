import { Component, OnInit } from '@angular/core';
import { Accesories } from '../accesories';
import { AccesoriesService } from '../accesories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-accesories',
  standalone: false,
  templateUrl: './update-accesories.component.html',
  styleUrls: ['./update-accesories.component.css'],
})
export class UpdateAccesoriesComponent   implements OnInit {
  accessory: Accesories = {
    id: 0,
    name: '',
    quantity: '',
    rating: 1,
    serialNumber: '',
    project: { id: 2 }
  };

  constructor(
    private accesoriesService: AccesoriesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.accessory);
    // Fetch the accessory by ID
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.accesoriesService.getAccByID(id).subscribe(
      (data: Accesories) => {
        this.accessory = data; // Populate the accessory object
      },
      (error) => {
        console.error('Error fetching accessory', error);
      }
    );
  }

  onSubmit(): void {
    if (!this.accessory.project) {
      this.accessory.project = { id: +this.route.snapshot.paramMap.get('id2') };
      this.accessory // Provide default project id if it is missing
  } else {
      this.accessory.project.id = +this.route.snapshot.paramMap.get('id2');  // Assign the project id as needed
  }
    console.log(this.accessory);
      // Optional: Handle if you need a dynamic project id
    this.accesoriesService.updateAcc(this.accessory.id, this.accessory).subscribe(
      () => {
        console.log('Accessory updated successfully!');
        this.router.navigate(['/accessories']); // Navigate to the accessories list or another desired page
      },
      (error) => {
        console.error('Error updating accessory', error);
      }
    );
  }
}