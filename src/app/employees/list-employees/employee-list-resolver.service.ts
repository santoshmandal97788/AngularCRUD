import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Employee } from "src/models/employee.model";
import { EmployeeService } from "../employee.service";


@Injectable()
// Implement the Resolve interface, as we are implementing a route resolve guard
// Resolve interface supports generics, so specify the type of data that this
// resolver returns using the generic parameter
export class EmployeeListResolverService implements Resolve<Employee[]> {
    // Inject the employeee service as we need it to retrieve employee data
    constructor(private _employeeService: EmployeeService) {
    }
    // Resolve interface contains the following one method for which we need to
    // provide implementation. This method calls EmployeeService & returns employee data
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[]> {
        return this._employeeService.getEmployees();
    }
}