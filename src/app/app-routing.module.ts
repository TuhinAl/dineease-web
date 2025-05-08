import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeLoginComp} from "./login/EmployeeLoginComp";
import {DashboardComp} from "./dashboard/DashboardComp";
import { LayoutComp } from './layout/LayoutComp';
import { HomeComp } from './HomeComp';
import { SalesComp } from './SalesComp';


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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
