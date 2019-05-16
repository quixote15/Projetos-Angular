import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit() {
    this.jogoDaVelhaService.inicializar();
  }

  iniciarJogo($event:any):void{
    $event.preventDefault();
    this.jogoDaVelhaService.iniciarJogo();
  }

  get exibirInicio():boolean{
    return this.jogoDaVelhaService.showInicio;
  }

  get exibirTabuleiro(): boolean{
    return this.jogoDaVelhaService.showTabuleiro;
  }

  get exibirFinal(): boolean{
    return this.jogoDaVelhaService.showFinal;
  }

  exibirX(posX:number, posY:number):boolean{
    return this.jogoDaVelhaService.exibirX(posX,posY);
  }
  exibirO(posX:number, posY:number):boolean{
    return this.jogoDaVelhaService.exibirO(posX,posY);
  }

  exibirVitoria(posX:number, posY:number):boolean{
    return this.jogoDaVelhaService.exibirVitoria(posX,posY);
  }

  jogar(posX:number, posY:number):void{
    this.jogoDaVelhaService.jogar(posX,posY);
  }

  get jogador():number{
    return this.jogoDaVelhaService.jogador;
  }


  novoJogo($event:any):void{
    $event.preventDefault();
    this.jogoDaVelhaService.novoJogo();
  }

}
