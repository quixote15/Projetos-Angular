import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TarefaService,
  TarefaConcluidaDirective} from './shared';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import {RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';
import {TarefasRoutingModule} from './tarefas-routing.module';

@NgModule({
  declarations: [ListarTarefaComponent, CadastrarTarefaComponent, EditarTarefaComponent, TarefaConcluidaDirective],
  imports: [
    CommonModule,
    TarefasRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers:[
    TarefaService
  ]
})
export class TarefasModule { }
