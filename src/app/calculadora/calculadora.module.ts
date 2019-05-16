import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculadoraComponent } from './components';
import { CalculadoraService } from './services';
import {CalculadoraRoutingModule} from './calculadora-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CalculadoraRoutingModule
  ],
  declarations: [
    CalculadoraComponent
  ],
  exports: [
  	CalculadoraComponent
  ],
  providers: [
  	CalculadoraService
  ]
})
export class CalculadoraModule { }
