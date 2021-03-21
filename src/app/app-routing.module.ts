import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employees/create-employee-can-deactivate-guard.service';
import { CreateEmployeesComponent } from './employees/create-employees/create-employees.component';
import { EmployeeDetailsGuardService } from './employees/employee-details/employee-details-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EmployeeListResolverService } from './employees/list-employees/employee-list-resolver.service';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListEmployeesComponent,
    resolve: { employeeList: EmployeeListResolverService }
  },
  {
    path: 'create',
    component: CreateEmployeesComponent,
    canDeactivate: [CreateEmployeeCanDeactivateGuardService]
  },
  {
    path: 'employees/:id',
    component: EmployeeDetailsComponent,
    canActivate: [EmployeeDetailsGuardService]
  },
  { path: 'notfound', component: PageNotFoundComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
