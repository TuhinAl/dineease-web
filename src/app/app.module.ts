import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DatePipe, NgIf } from '@angular/common';
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
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from '@ionic/angular';
import { RxFormBuilder, RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { AgGridModule } from 'ag-grid-angular';
import { ToastrModule, ToastrService } from "ngx-toastr";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeInterceptor } from "./auth-service/employee.interceptor";
import { EmployeeApiService } from './common/service/EmployeeApiService';
import { FormService } from "./common/service/form-service";
import { DashboardCompService } from "./dashboard/DashboardCompService";
import { HomeComp } from './HomeComp';
import { HeaderComp } from './layout/HeaderComp';
import { LayoutComp } from './layout/LayoutComp';
import { MenuItemComp } from './layout/menu-item/MenuItemComp';
import { PageHeaderComp } from './layout/PageHeaderComp';
import { LoginComp } from './login/LoginComp';
import { LoginCompService } from './login/LoginCompService';
import { MealEntryModule } from './meal-entry/meal-entry.module';
import { OTPComp } from './OTP/OTPComp';
import { OTPCompService } from './OTP/OTPCompService';
import { PurchaseEntryCompModule } from './purchase-entry/PurchaseEntryCompModule';
import { PurchaseListCompModule } from './purchase-list/PurchaseListCompModule';
import { SalesComp } from './SalesComp';
import { MemberListComp } from './user-list/MemberListComp';
import { MemberRegistrationCompService } from './member-registration/MemberRegistrationCompService';
import { MemberRegistrationModule } from './member-registration/member-registration.module';
import { MemberRegistrationComp } from './member-registration/MemberRegistrationComp';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComp,
    HeaderComp,
    MenuItemComp,
    PageHeaderComp,
    HomeComp,
    SalesComp,
    MemberListComp,
    LoginComp,
    OTPComp
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
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    NgIf,
    DatePipe,
    MealEntryModule,
    PurchaseEntryCompModule,
    PurchaseListCompModule,
    MemberRegistrationModule
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
    DashboardCompService,
    LoginCompService,
    EmployeeApiService,
    OTPCompService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
