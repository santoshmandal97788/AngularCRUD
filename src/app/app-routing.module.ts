import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employees/create-employee-can-deactivate-guard.service';
import { CreateEmployeesComponent } from './employees/create-employees/create-employees.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';

const routes: Routes = [
  { path: 'list', component: ListEmployeesComponent },
  { path: 'create',
   component: CreateEmployeesComponent,
   canDeactivate: [CreateEmployeeCanDeactivateGuardService]
  },
  { path: 'employees/:id', component: EmployeeDetailsComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
