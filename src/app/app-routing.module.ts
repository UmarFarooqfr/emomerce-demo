import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { CardsComponent } from './cards/cards.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard' ,pathMatch:'full'},
{
  path:'dashboard',
  component:DashboardComponent
},
{
  path:'detailpage',
  component:DetailpageComponent
},
{
  path:'cart',
  component:CartComponent
},
{ path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
