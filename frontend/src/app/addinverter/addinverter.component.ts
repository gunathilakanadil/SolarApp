import { Component, OnInit } from '@angular/core';
import { ProjectInverter } from '../project-inverter';
import { InverterService } from '../inverter.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Inverter } from '../inverter';
import { InverterserviceService } from '../inverterservice.service';

@Component({
  selector: 'app-addinverter',
  standalone: false,
  
  templateUrl: './addinverter.component.html',
  styleUrl: './addinverter.component.css'
})
export class AddinverterComponent implements OnInit{
  numberofinveters:number=0
  inverters:ProjectInverter[]=[];
  inverter:Inverter[]=[];
  constructor(private inverterservices:InverterserviceService,private inverterservice: InverterService,private Router:ActivatedRoute,private routers:Router,private route:Router){}
  
  generateFields() {
    console.log("Genarated")
    this.inverters = Array.from({ length: this.numberofinveters }, () => ({
      serialNumber: '',
      
      project: { id: this.Router.snapshot.params['id'] },
      inverter:{id:1}
    }));
  }
  
  onSubmit( ){
      this.inverters.forEach((inverter)=>{
        console.log(inverter)
        this.inverterservice.createinverter(inverter).subscribe(
          
            (response) => {
              console.log('Panel created successfully:', response);
              this.route.navigate([`/projectdetails/${this.Router.snapshot.params['id']}`]);
            },
            (error) => {
              console.error('Error creating panel:', error);
            }
          );
        });
      }

      ngOnInit(): void {
        this.getinverters();
      }
    
      private getinverters(): void {
        this.inverterservices.getInverterList().subscribe((data: Inverter[]) => {
          this.inverter = data;
        });
      }
       
    }
    



