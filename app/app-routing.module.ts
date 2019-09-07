import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Bank1Component } from './bank1/bank1.component';


const routes: Routes = [
  {path:'',component:Bank1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
