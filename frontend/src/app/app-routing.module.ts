import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { CreateElectricityComponent } from './create-electricity/create-electricity.component';
import { Accesories } from './accesories';
import { AccesoriesComponent } from './accesories/accesories.component';
import { CreateBankComponent } from './create-bank/create-bank.component';
import { CreatePanelComponent } from './create-panel/create-panel.component';
import { CreateInverterComponent } from './create-inverter/create-inverter.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { UpdateBankComponent } from './update-bank/update-bank.component';
import { UpdateAccesoriesComponent } from './update-accesories/update-accesories.component';
import { UpdatepanelComponent } from './updatepanel/updatepanel.component';
import { UpdateinverterComponent } from './updateinverter/updateinverter.component';
import { UpdateelectricityComponent } from './updateelectricity/updateelectricity.component';
import { AddpanelComponent } from './addpanel/addpanel.component';
import { AddinverterComponent } from './addinverter/addinverter.component';

const routes: Routes = [

  
  { path: 'customers', component: CustomerComponent },
  { path: 'createcustomers', component: CreateCustomerComponent },
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'update-customer/:id', component: UpdateCustomerComponent },
  { path: 'customer-list/:id', component:CustomerListComponent },
  { path: 'create-project/:id', component:CreateProjectComponent },
  { path: 'create-electricity/:id', component:CreateElectricityComponent },
  { path: 'accesories/:id', component:AccesoriesComponent },
  { path: 'bankaccount/:id', component:CreateBankComponent },
  { path: 'projectpanel/:id', component:CreatePanelComponent },
  {path:'projectinverter/:id',component:CreateInverterComponent},
  {path:'projectdetails/:id',component:ProjectDetailsComponent},
  {path:'updatebank/:id/:id2',component:UpdateBankComponent},
  {path:'updateAcc/:id/:id2',component:UpdateAccesoriesComponent},
  {path:'updatepanel/:id/:id2',component:UpdatepanelComponent},
  {path:'updateinverter/:id/:id2',component:UpdateinverterComponent},
  {path:'updateelectricity/:id/:id2',component:UpdateelectricityComponent},
  {path:'updateAcc/:id/:id2',component:UpdateAccesoriesComponent},
  {path:'addpanel/:id',component:AddpanelComponent},
  {path:'addinverter/:id',component:AddinverterComponent},

 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
