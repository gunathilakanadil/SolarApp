import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PanelService } from '../panel.service';
import { Panel } from '../panel';
import { ProjectPanel } from '../project-panel';
import { PanelserviceService } from '../panelservice.service';

@Component({
  selector: 'app-create-panel',
  standalone: false,
  templateUrl: './create-panel.component.html',
  styleUrls: ['./create-panel.component.css']
})
export class CreatePanelComponent {
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
      panel: { id: this.type },  // Ensure `id` is properly initialized
      serialnumber: '',   // Ensure `serialnumber` is properly initialized
    }));
    
  }

  onSubmit() {
    this.panels.forEach((panel) => {
      this.panelService.createpanel(panel).subscribe(
        (response) => {
          console.log('Panel created successfully:', response);
          this.router.navigate([`/customers`]);
      
        },
        (error) => {
          console.error('Error creating panel:', error);
        }
      );
    });
  }

  skip(){
    this.router.navigate([`/customers/`])
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
