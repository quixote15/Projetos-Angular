import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { ConversorComponent } from './components';
import {MoedaService, ConversorService} from './services';
import { NumeroDirective } from './directives';
import { CotacaoModalComponent } from './utils';
import { DataBrPipe } from './pipes';
import {ConversorRoutingModule} from './conversor-routing.module';

@NgModule({
  declarations: [ConversorComponent, NumeroDirective, CotacaoModalComponent, DataBrPipe],
  imports: [
    CommonModule,
    FormsModule,
    ConversorRoutingModule
  ],
  exports:[
    ConversorComponent //para ser utilizado pelo APP durante roteamento
  ],

  providers:[
    MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
