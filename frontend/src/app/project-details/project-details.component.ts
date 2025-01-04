import { Component } from '@angular/core';
import { Accesories } from '../accesories';
import { ActivatedRoute, Router } from '@angular/router';
import { AccesoriesService } from '../accesories.service';
import { InverterService } from '../inverter.service';
import { PanelService } from '../panel.service';
import { Electricity } from '../electricity';
import { Panel } from '../panel';
import { Inverter } from '../inverter';
import { ElectricityService } from '../electricity.service';
import { ProjectPanel } from '../project-panel';
import { ProjectInverter } from '../project-inverter';

@Component({
  selector: 'app-project-details',
  standalone: false,
  
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent {
  projectId: number | null = null;
  accessories: Accesories[] = [];
  electricity:Electricity[]=[];
  panel:ProjectPanel[]=[];
  inverter:ProjectInverter[]=[];
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private accessoriesService: AccesoriesService,
    private inverterservice:InverterService,
    private panelservice:PanelService,
    private electricityservice:ElectricityService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.projectId = +this.route.snapshot.params['id']; // Retrieve 'id' from the route
    if (this.projectId) {
      this.fetchAccessories();
      this.fetchPanels();
      this.fetchInverters();
      this.fetchElectricityprofile() // Fetch accessories immediately
    } else {
      this.errorMessage = 'Project ID is missing or invalid.';
    }
  }

  fetchAccessories(): void {
    this.accessoriesService.getAccessoriesByProjectId(this.projectId!).subscribe({
      next: (data) => {
        this.accessories = data;
        this.errorMessage = null;
      },
     
      error: (err) => {
        this.errorMessage = 'Failed to fetch accessories. Please try again.';
      },
    });
  }

  fetchPanels():void{
    this.panelservice.getPanelsByProjectId(this.projectId!).subscribe({
      next: (data) => {
        this.panel = data;
        this.errorMessage = null;
        console.log(this.panel)
      },
     
      error: (err) => {
        this.errorMessage = 'Failed to fetch accessories. Please try again.';
      },
    });
  }

  fetchInverters():void{
    this.inverterservice.getInvertersByProjectId(this.projectId!).subscribe({
      next: (data) => {
        this.inverter = data;
        this.errorMessage = null;
      },
     
      error: (err) => {
        this.errorMessage = 'Failed to fetch accessories. Please try again.';
      },
    });
  }

  fetchElectricityprofile():void{
    this.electricityservice.getElectricityByProjectId(this.projectId!).subscribe({
      next: (data) => {
        this.electricity = data;
        this.errorMessage = null;
      },
     
      error: (err) => {
        this.errorMessage = 'Failed to fetch accessories. Please try again.';
      },
    });
  }

  into(id:number){
    this.router.navigate(['updateAcc',id,this.route.snapshot.params['id']]) 
  }

  updatepanel(id:number){
    console.log("x")
    this.router.navigate(['updatepanel',id,this.route.snapshot.params['id']]) 
    console.log(id)
  }

  updateInverter(id:number){
    this.router.navigate(['updateinverter',id,this.route.snapshot.params['id']]) 
  }

  updateelectricity(id:number){
    this.router.navigate(['updateelectricity',id,this.route.snapshot.params['id']]) 
  }

  deleteAcc(id:number){
    this.accessoriesService.deleteAcc(id).subscribe(data=>{
       
      window.location.reload();
    })
   

   }

   deletepanel(id:number){
    this.panelservice.deletePanel(id).subscribe(data=>{
      window.location.reload();
    })
    }

    deleteinverter(id:number){
      this.inverterservice.deleteInverter(id).subscribe(data=>{
        window.location.reload();
      })
    }

    addpanel(){
      this.router.navigate(['addpanel',this.projectId]) 
    }

    addinverter(){
      this.router.navigate(['addinverter',this.projectId]) 
    }
  }
  



