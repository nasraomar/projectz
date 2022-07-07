import { Component, NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { FormcuComponent } from './component/formcu/formcu.component';
import { FormmuComponent } from './component/formmu/formmu.component';
import { TablecusComponent } from './component/tablecus/tablecus.component';
import { TableusComponent } from './component/tableus/tableus.component';
const routes: Routes = [
{path:'',component:DashbordComponent,children:[
  {path:'formmu',component:FormmuComponent},
  {path:'formcu',component:FormcuComponent},
  {path:'tableus',component:TableusComponent},
  {path:'tablecus',component:TablecusComponent}
]
}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],


  exports: [RouterModule]
})
export class AppRoutingModule { }
