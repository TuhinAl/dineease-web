import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComp } from './HomeComp';
import { SalesComp } from './SalesComp';
import { LayoutComp } from './layout/LayoutComp';
import { MealEntryComp } from './meal-entry/MealEntryComp';
import { PurchaseEntryComp } from './purchase-entry/PurchaseEntryComp';
import { PurchaseListComp } from './purchase-list/PurchaseListComp';


const routes: Routes = [ 
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '',
    component: LayoutComp,
    children: [
      {
        path: 'home',
        component: HomeComp
      },
      {
        path: 'sales',
        component: SalesComp
      },
      {
        path: 'meal-entry',
        component: MealEntryComp
      },
      {
        path: 'purchase-entry',
        component: PurchaseEntryComp
      },
      {
        path: 'purchase-list',
        component: PurchaseListComp
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
