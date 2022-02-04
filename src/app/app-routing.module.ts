import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PorPaisComponent } from './country/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './country/pages/por-region/por-region.component';
import { PorCapitalComponent } from './country/pages/por-capital/por-capital.component';
import { VerRegionComponent } from './country/pages/ver-pais/ver-region.component';

const routes: Routes = [
    {
        path: "",
        component:PorPaisComponent,
        pathMatch:'full'
    },
    {
        path:"region",
        component:PorRegionComponent
    },
    {
        path:"capital",
        component:PorCapitalComponent
    },
    {
        path:"pais/:id",
        component:VerRegionComponent

    },
    {
        path:'**',
        redirectTo:''
        //tambien se puede crear un componente que muestre un error
    }
]

@NgModule({
imports:[
    RouterModule.forRoot(routes)
],
exports:[
RouterModule
]
})
export class AppRoutingModule{}

