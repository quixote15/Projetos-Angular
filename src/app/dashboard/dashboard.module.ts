import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import {DadosService} from './dados.service';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardRoutingComponent} from './dashboard.routing.component';

@NgModule({
  declarations: [DashboardComponent,DashboardRoutingComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports:[
    DashboardComponent
    
  ],

  providers:[
    DadosService
  ]
})
export class DashboardModule { }
