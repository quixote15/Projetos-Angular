import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import {JogoDaVelhaService} from './shared';
import {JogoDaVelhaRoutingModule} from './jogo-da-velha-routing.module';

@NgModule({
  declarations: [JogoDaVelhaComponent],
  imports: [
    CommonModule,
    JogoDaVelhaRoutingModule
  ],
  exports:[
    JogoDaVelhaComponent
  ],
  providers:[
    JogoDaVelhaService
  ]
})
export class JogoDaVelhaModule { }
