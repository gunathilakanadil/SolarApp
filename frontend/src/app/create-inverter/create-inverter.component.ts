import { Component, OnInit } from '@angular/core';
import { InverterService } from '../inverter.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';
import { ProjectInverter } from '../project-inverter';
import { Inverter } from '../inverter';
import { InverterserviceService } from '../inverterservice.service';

@Component({
  selector: 'app-create-inverter',
  standalone: false,
  
  templateUrl: './create-inverter.component.html',
  styleUrl: './create-inverter.component.css'
})
export class CreateInverterComponent implements OnInit {
  numberofinveters:number=0
  inverters:ProjectInverter[]=[];
  inverter:Inverter[]=[];
  constructor(private inverterservice: InverterService,private Router:ActivatedRoute,private routers:Router,private route:Router,private inverterservices:InverterserviceService){}
  
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
              this.route.navigate([`/projectpanel/${this.Router.snapshot.params['id']}`]);
            },
            (error) => {
              console.error('Error creating panel:', error);
            }
          );
        });
      }


      skip(){
        this.routers.navigate([`/projectpanel/${this.Router.snapshot.params['id']}`])
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

    



