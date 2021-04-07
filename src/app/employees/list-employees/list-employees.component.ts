import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/models/employee.model';
import { EmployeeService } from '../employee.service';
import { ResolvedEmployeeList } from '../resolved-employeelist.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css'],
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  filteredEmployees: Employee[];
  private arrayIndex = 1;
  employeeToDisplay: any;
  dataFromChild: Employee;
  private _searchTerm: string;
  error: string;
  get searchTerm() {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value);
  }
  constructor(
    private _employeeService: EmployeeService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    // this.employees = this._route.snapshot.data['employeeList'];
    //  Method 1 to handle resolver error using separate model file

    const resolvedEmployeeList: ResolvedEmployeeList = this._route.snapshot.data.employeeList;
    if (resolvedEmployeeList.error == null) {
      this.employees = resolvedEmployeeList.employeeList;
    } else {
      this.error = resolvedEmployeeList.error;
    }

     // Method 2 to handle resolver error using same file or easier way
    //  const resolvedData: Employee[] |string = this._route.snapshot.data.employeeList;
    //  if (Array.isArray(resolvedData)) {
    //    this.employees = resolvedData;
    //  } else {
    //    this.error = resolvedData;
    //  }

    this._route.queryParamMap.subscribe((queryParams) => {
      if (queryParams.has('searchTerm')) {
        this.searchTerm = queryParams.get('searchTerm');
      } else {
        this.filteredEmployees = this.employees;
      }
    });
  }

  ngOnInit(): void {}

  nextEmployee(): void {
    if (this.employeeToDisplay.id <= 2) {
      this.employeeToDisplay = this.employees[this.arrayIndex];
      this.arrayIndex++;
    } else {
      this.employeeToDisplay = this.employees[0];
      this.arrayIndex = 1;
    }
  }
  handleNotify(eventData: Employee) {
    this.dataFromChild = eventData;
  }
  

  filterEmployees(searchString: string) {
    return this.employees.filter(
      (employees) =>
        employees.name
          .toLocaleLowerCase()
          .indexOf(searchString.toLocaleLowerCase()) !== -1
    );
  }

  onDeleteNotification(id:number){
    const i = this.filteredEmployees.findIndex((e) => e.id === id);
    if (i !== -1) {
      this.filteredEmployees.splice(i, 1);
    }
  }
}
