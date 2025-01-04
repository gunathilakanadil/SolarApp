import { Component, OnInit } from '@angular/core';
import { ProjectPanel } from '../project-panel';
import { PanelService } from '../panel.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-updatepanel',
  standalone: false,
  
  templateUrl: './updatepanel.component.html',
  styleUrl: './updatepanel.component.css'
})
export class UpdatepanelComponent  implements OnInit {
  panel: ProjectPanel = new ProjectPanel('', 1, 1, '');
  panelId: number;

  constructor(
    private panelService: PanelService,    // Inject PanelService
    private route: ActivatedRoute,         // For getting route parameters (panel ID)
    private router: Router                 // For navigation
  ) { }

  ngOnInit(): void {
    this.panelId = Number(this.route.snapshot.paramMap.get('id'));  // Get ID from route params
    if (this.panelId) {
      this.loadPanelData();  // If panelId exists, load data for the given panel ID
    }
  }
   
  loadPanelData(): void {
    this.panelService.getPanelID(this.panelId).subscribe({
      next: (response) => {
        this.panel = response;  
         // Assign the panel data to the component's panel
      },
      error: (err) => {
        console.error('Error loading panel data', err);
      }
    });
  }

  updatePanel(): void {
    this.panelService.updatePanel(this.panelId, this.panel).subscribe({
      next: (response) => {
        alert('Panel updated successfully!');
        this.router.navigate(['/panels']);  // Redirect to the panels list after update
      },
      error: (err) => {
        console.error('Error updating panel', err);
        alert('Failed to update panel.');
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/panels']);  // Redirect to the panels list without changes
  }
}