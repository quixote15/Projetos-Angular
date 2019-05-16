import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../shared';
import {TarefaService} from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  private tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) {
 
  }

  ngOnInit() {
    this.tarefas = this.listarTodos();
  }

  listarTodos():Tarefa[]{
    return this.tarefaService.listarTodos();
  }

  alterarStatus(tarefa: Tarefa): void{
    this.tarefaService.alterarStatus(tarefa.id);
    this.tarefas = this.listarTodos();
  }

  remover($event: any, tarefa:Tarefa):void{
    $event.preventDefault();
    if(confirm(`Deseja remover a tarefa "${tarefa.nome}" ?`))
    this.tarefaService.remover(tarefa.id);
    this.tarefas = this.listarTodos();
  }

}
