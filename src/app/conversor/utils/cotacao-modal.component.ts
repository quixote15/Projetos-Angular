import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Conversao, ConversaoResponse } from '../models';
import { ConversorService } from '../services';

@Component({
  selector: 'cotacao-modal',
  templateUrl: './cotacao-modal.component.html',
  styleUrls: ['./cotacao-modal.component.css']
})
export class CotacaoModalComponent implements OnInit {

  @Input() id: string;
  @Input() conversao: Conversao;
  @Input() conversaoResponse:ConversaoResponse;
  @Output() onConfirm: EventEmitter<any> = new EventEmitter();

  constructor(private conversorService: ConversorService) { }

  ngOnInit() {

  }

  novaConsulta():void{
    this.onConfirm.emit(); //action up
  }

  get valorConvertido():string{

    if(this.conversaoResponse === undefined){
      return '0';
    }

    return (this.conversao.valor *
      this.conversaoResponse.rates[this.conversao.moedaPara])
      .toFixed(2);
  }

  get cotacaoPara():number{
    return (this.conversao.valor *
      this.conversaoResponse.rates[this.conversao.moedaPara]);
  }

  get cotacaoDe():number{
    return this.conversorService
    .cotacaoDe(this.conversaoResponse,this.conversao);
  }

  get dataCotacao():string{
    return this.conversorService
    .dataCotacao(this.conversaoResponse)
  }

}
