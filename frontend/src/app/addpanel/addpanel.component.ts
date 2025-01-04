import { Component } from '@angular/core';
import { ProjectPanel } from '../project-panel';
import { PanelService } from '../panel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Panel } from '../panel';
import { PanelserviceService } from '../panelservice.service';

@Component({
  selector: 'app-addpanel',
  standalone: false,
  
  templateUrl: './addpanel.component.html',
  styleUrl: './addpanel.component.css'
})
export class AddpanelComponent {
  numberofpanels: number = 0;
  panels: ProjectPanel[] = [];
  direction:string='';
  type:number=0;
    panelss: Panel[] = [];
   
  

  constructor(
    private panelService: PanelService,
    private route: ActivatedRoute,
    private router: Router,
    private panelServices: PanelserviceService
  ) {}

  generateFields() {
    console.log("Genarated")
    this.panels = Array.from({ length: this.numberofpanels }, () => ({
      direction: this.direction,
      project: { id: this.route.snapshot.params['id'] },
      panel: { id: 1 },  // Ensure `id` is properly initialized
      serialnumber: '',   // Ensure `serialnumber` is properly initialized
    }));
    
  }

  onSubmit() {
    this.panels.forEach((panel) => {
      this.panelService.createpanel(panel).subscribe(
        (response) => {
          console.log('Panel created successfully:', response);
          this.router.navigate([`/projectdetails/${this.route.snapshot.params['id']}`])
      
        },
        (error) => {
          console.error('Error creating panel:', error);
        }
      );
    });
  }

   ngOnInit(): void {
      this.getPanels();
    }
  
    private getPanels(): void {
      this.panelServices.getCustomerList().subscribe((data: Panel[]) => {
        this.panelss = data;
      });
    }
}
