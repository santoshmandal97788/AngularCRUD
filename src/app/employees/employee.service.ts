import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Employee } from 'src/models/employee.model';

import { catchError, delay } from 'rxjs/operators';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

@Injectable()
export class EmployeeService {
  constructor(private httpClient: HttpClient) {}
  private listEmployees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      dateOfBirth: new Date('10/25/1988'),
      department: '2',
      isActive: true,
      photoPath: 'assets/images/mark.png',
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1979'),
      department: '1',
      isActive: true,
      photoPath: 'assets/images/mary.png',
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 5432978640,
      dateOfBirth: new Date('3/25/1976'),
      department: '3',
      isActive: false,
      photoPath: 'assets/images/john.png',
    },
  ];
  baseUrl = 'http://localhost:3000/employees';

  getEmployees(): Observable<Employee[]> {
    return this.httpClient
      .get<Employee[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }
  getEmployee(id: number): Observable<Employee> {
    return this.httpClient
      .get<Employee>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('client side Error: ', errorResponse.error.message);
    } else {
      console.error('Server side Error: ', errorResponse);
    }
    return throwError(
      'There is a Problem with the service. We are notified and working on it. Please try again later.'
    );
  }
  addEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient
      .post<Employee>(this.baseUrl, employee, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .pipe(catchError(this.handleError));
  }

  updateEmployee(employee: Employee): Observable<void> {
    return this.httpClient
      .put<void>(`${this.baseUrl}/${employee.id}`, employee, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .pipe(catchError(this.handleError));
  }

  deleteEmployee(id: number): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }
}
