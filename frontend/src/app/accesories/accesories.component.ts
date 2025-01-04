import { Component } from '@angular/core'; 
import { AccesoriesService } from '../accesories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Accesories } from '../accesories';

@Component({
  selector: 'app-accesories',
  standalone: false,
  templateUrl: './accesories.component.html',
  styleUrls: ['./accesories.component.css']
})
export class AccesoriesComponent {
  constructor(private accesservice: AccesoriesService, private route: ActivatedRoute,private router:Router) {}

  onSubmit(form: NgForm) {
    // Retrieve project ID from the route parameters
    const projectId = this.route.snapshot.params['id'];

    // Extract data for each accessory from the form
    const accessoriesData = [
      { name: 'DC SPD', qty: form.value.dc_spd_qty, rating: form.value.dc_spd_rating, serial_No: form.value.dc_spd_serial },
      { name: 'DC MCB', qty: form.value.dc_mcb_qty, rating: form.value.dc_mcb_rating, serial_No: form.value.dc_mcb_serial },
      { name: 'AC SPD', qty: form.value.ac_spd_qty, rating: form.value.ac_spd_rating, serial_No: form.value.ac_spd_serial },
      { name: 'AC Isolator', qty: form.value.ac_isolator_qty, rating: form.value.ac_isolator_rating, serial_No: form.value.ac_isolator_serial },
      { name: 'AC MCB', qty: form.value.ac_mcb_qty, rating: form.value.ac_mcb_rating, serial_No: form.value.ac_mcb_serial }
    ];

    // Loop through the data to create accessory objects and send them to the service
    accessoriesData.forEach(accessory => {
      const newAccessory = new Accesories(accessory.name, accessory.qty, accessory.rating, accessory.serial_No, projectId);
      console.log("acc"+accessory)

      this.accesservice.createaccesories(newAccessory).subscribe({
        
        
        next: response =>      this.router.navigate([`/projectinverter/${this.route.snapshot.params['id']}`]),
         

        error: error => console.error('Error creating accessory:', error)
      });

    });
  }

  skip(){
    this.router.navigate([`/projectinverter/${this.route.snapshot.params['id']}`])
  }
}
