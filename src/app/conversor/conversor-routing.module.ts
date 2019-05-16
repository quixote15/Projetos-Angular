import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConversorComponent} from './components';

export const routes:Routes = [
    {
        path:'conversor',
        component: ConversorComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ]
})

export class ConversorRoutingModule{

}