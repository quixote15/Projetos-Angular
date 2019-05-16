import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import {
Conversao,
ConversaoResponse
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {
  private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=4214fa30755bf8c5c9ab6d367292d619";

  constructor(private httpClient: HttpClient) { }

  /**
   * Realiza requisição http á api de conversão
   * E faz a conversão de uma moeda.
   * @param conversao 
   * @return Observable<any> Resultado da conversão
   */
  converter(conversao: Conversao): Observable<any>{
    let params = `&base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;
    return this.httpClient
      .get(this.BASE_URL + params);
  }


  /**
   * Retorna a cotação de uma moeda destino
   * @param conversaoResponse 
   * @param conversao 
   * @return number Valor da cotação para a moeda destino
   */
  cotacaoPara(conversaoResponse:ConversaoResponse,
    conversao: Conversao):number{
    if(conversaoResponse === undefined){
      return 0;
    }
  
    return conversaoResponse.rates[conversao.moedaPara];
  }


  /**
   * Retorna o valor da cotação da moeda base com precisão de 4 casas decimais
   * @param conversaoResponse 
   * @param conversao 
   * @return number 
   */
  cotacaoDe(conversaoResponse: ConversaoResponse,
    conversao: Conversao):string{
    if(conversaoResponse === undefined){
      return '0';
    }

    return  (1 / conversaoResponse.rates[conversao.moedaPara])
          .toFixed(4);
  }

  /**
   * Retorna data que foi realizada a cotação da moeda
   * @param conversaoResponse 
   * @return string
   */
  dataCotacao(conversaoResponse: ConversaoResponse):string{
    if(conversaoResponse === undefined){
      return '';
    }

    return conversaoResponse.date;
  }
}
