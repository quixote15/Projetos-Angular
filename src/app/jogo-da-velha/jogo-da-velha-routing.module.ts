import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {JogoDaVelhaComponent} from './jogo-da-velha.component';

export const JogoDaVelhaRoutes:Routes = [
    {
        path: 'jogo-da-velha',
        component: JogoDaVelhaComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(JogoDaVelhaRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class JogoDaVelhaRoutingModule{
    
}