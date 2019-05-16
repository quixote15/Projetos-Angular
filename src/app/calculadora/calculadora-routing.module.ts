import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CalculadoraComponent} from './components';

export const routes:Routes = [
    {
        path: 'calculadora',
        component: CalculadoraComponent,
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule //return the singleton modified instance ?
    ]

})
export class CalculadoraRoutingModule{

}