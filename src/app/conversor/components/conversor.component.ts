import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Conversao, ConversaoResponse, Moeda } from '../models';
import { ConversorService, MoedaService } from '../services';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {


  @ViewChild('conversaoForm') conversaoForm: NgForm;
  conversao: Conversao;
  conversaoResponse: ConversaoResponse;
  moedas: Moeda[];
  possuiErro: boolean;


  constructor(
    private conversorService: ConversorService,
    private moedaService: MoedaService) { }

  ngOnInit() {
    this.inicializar();
  }

  inicializar():void{
    this.conversao = new Conversao('EUR', 'USD', null);
    this.moedas = this.moedaService.listarTodas();
  }

  converter(){
    if(this.conversaoForm.form.valid){
     this.conversorService
     .converter(this.conversao)
     .subscribe(
       response => this.conversaoResponse = response,
       error => this.possuiErro = true
     );

    }
  }
}
