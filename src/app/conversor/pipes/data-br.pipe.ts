import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataBr'
})
export class DataBrPipe implements PipeTransform {
  /**
   * Converte o formato de uma data para o padrão brasileiro.
   * @param dataEn 
   * @return string Data no padrão brasileiro.
   */
  transform(dataEn: any): string {
    console.log('chamou', dataEn);
    if(!dataEn){
      return ''
    }

    const dataArr = dataEn.split('-');

    if(dataArr.length !== 3){
      return dataEn;
    }
    return dataArr[2] + '/' + dataArr[1] + '/' + dataArr[0];
  }

}
