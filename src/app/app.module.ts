import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { CreateEmployeesComponent } from './employees/create-employees/create-employees.component';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { EmployeeService } from './employees/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee/display-employee.component';
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employees/create-employee-can-deactivate-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EmployeeFilterPipe } from './employees/employee-filter.pipe';
import { EmployeeListResolverService } from './employees/list-employees/employee-list-resolver.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeDetailsGuardService } from './employees/employee-details/employee-details-guard.service';
import { AccordionComponent } from './shared/accordion/accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeesComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe,
    PageNotFoundComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [EmployeeService, CreateEmployeeCanDeactivateGuardService, EmployeeListResolverService, EmployeeDetailsGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
