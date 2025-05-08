import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from '@ionic/angular';
import { RxFormBuilder, RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { AgGridModule } from 'ag-grid-angular';
import { ToastrModule, ToastrService } from "ngx-toastr";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeInterceptor } from "./auth-service/employee.interceptor";
import { FormService } from "./common/service/form-service";
import { DashboardCompService } from "./dashboard/DashboardCompService";
import { HomeComp } from './HomeComp';
import { HeaderComp } from './layout/HeaderComp';
import { LayoutComp } from './layout/LayoutComp';
import { MenuItemComp } from './layout/menu-item/MenuItemComp';
import { PageHeaderComp } from './layout/PageHeaderComp';
import { SalesComp } from './SalesComp';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComp,
    HeaderComp,
    MenuItemComp,
    PageHeaderComp,
    HomeComp,
    SalesComp
  ],
  imports: [
    ToastrModule.forRoot({
      positionClass: 'toast-top-right'
    }),
    IonicModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    AgGridModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatMenuModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EmployeeInterceptor,
      multi: true
      /* The multi: true option ensures that the interceptor is appended to the existing array of interceptors rather than replacing them. */
    },
    ToastrService,
    FormService,
    RxFormBuilder,
    DashboardCompService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
