import { 
  Directive,
  HostListener,
  ElementRef
 } from '@angular/core';
import {
NG_VALUE_ACCESSOR,
ControlValueAccessor,
} from '@angular/forms';


@Directive({
  selector: '[numero]',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumeroDirective,
    multi: true
  }]
})
export class NumeroDirective implements ControlValueAccessor{

  onChange:any;
  onTouched: any;
  constructor(private el:ElementRef) { }


  /**
   * Implementa o evento keyup para o elemento da diretiva
   * @param $event 
   */
  @HostListener('keyup', ['$event'])
  onkeyup($event:any):void{
    let valor = $event.target.value;
    let posDecimais = valor.indexOf('.');

    valor = valor.replace(/[\D]/g, '');

    if(posDecimais > 0){
      valor = valor.substr(0,posDecimais) + '.' +
      valor.substr(posDecimais);
    }

    $event.target.value = valor;
    this.onChange(valor);
  }

  /**
   * Registra função a ser chamada para atualizar o valor do model
   * @param fn 
   */
  registerOnChange(fn:any):void{
    this.onChange = fn;

  }

  /**
   * Registra função a ser chamada para atualizar 
   * o valor do model no evento touched
   * @param fn 
   */
  registerOnTouched(fn: any):void{
    this.onTouched = fn;
  }

  /**
   * Obtem o valor contido no model
   * @param value 
   */
  writeValue(value:any):void{
    this.el.nativeElement.value = value;
  }



}
