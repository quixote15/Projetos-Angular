import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {TarefaRoutes} from './tarefas.routing';

@NgModule({
    imports:[
        RouterModule.forChild(TarefaRoutes)
    ],

    exports:[
        RouterModule
    ]
})

export class TarefasRoutingModule{

}