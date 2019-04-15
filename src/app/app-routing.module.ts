import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckOrderComponent } from './check-order/check-order.component';


const routes: Routes = [
  { path: 'check', component: CheckOrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
