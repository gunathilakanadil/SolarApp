import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateElectricityComponent } from './create-electricity/create-electricity.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { AccesoriesComponent } from './accesories/accesories.component';
 
import { CreateBankComponent } from './create-bank/create-bank.component';
import { CreatePanelComponent } from './create-panel/create-panel.component';
import { CreateInverterComponent } from './create-inverter/create-inverter.component';
import { AllinoneComponent } from './allinone/allinone.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { UpdateBankComponent } from './update-bank/update-bank.component';
import { UpdateAccesoriesComponent } from './update-accesories/update-accesories.component';
import { UpdatepanelComponent } from './updatepanel/updatepanel.component';
import { UpdateinverterComponent } from './updateinverter/updateinverter.component';
import { UpdateelectricityComponent } from './updateelectricity/updateelectricity.component';
import { AddinverterComponent } from './addinverter/addinverter.component';
import { AddpanelComponent } from './addpanel/addpanel.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    CreateElectricityComponent,
    CreateProjectComponent,
    CustomerComponent,
    CustomerListComponent,
    UpdateCustomerComponent,
    AccesoriesComponent,
    
    CreateBankComponent,
    CreatePanelComponent,
    CreateInverterComponent,
    AllinoneComponent,
    ProjectDetailsComponent,
    UpdateBankComponent,
    UpdateAccesoriesComponent,
    UpdatepanelComponent,
    UpdateinverterComponent,
    UpdateelectricityComponent,
    AddinverterComponent,
    AddpanelComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
