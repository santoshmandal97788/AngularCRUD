import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ResolvedEmployeeList } from '../resolved-employeelist.model';
import { EmployeeService } from '../employee.service';

@Injectable()
// Method 1 to handle resolver error using separate model file
export class EmployeeListResolverService
    implements Resolve<ResolvedEmployeeList> {
    constructor(private _employeeService: EmployeeService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<ResolvedEmployeeList> {
        return this._employeeService.getEmployees().pipe(
            map((employeeList) => new ResolvedEmployeeList(employeeList)),
            catchError((err: any) => of(new ResolvedEmployeeList(null, err)))
        );
    }
    // Method 2 to handle resolver error using same file
    // export class EmployeeListResolverService implements Resolve<Employee[] | string>{
    //     constructor(private _employeeService: EmployeeService) { }

    //     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[] | string> {
    //         return this._employeeService.getEmployees()
    //             .pipe(
    //                 catchError((err: string) => of ( err))
    //             );
    //     }

    // }
}
