import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/models/employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];
  filteredEmployees: Employee[];
  private arrayIndex = 1;
  employeeToDisplay: any;
  dataFromChild: Employee;
  private _searchTerm: string;
  get searchTerm(){
    return this._searchTerm;
  }
  set searchTerm(value: string){
    this._searchTerm= value;
    this.filteredEmployees= this.filterEmployees(value);

  }
  constructor(private _employeeService: EmployeeService, private _router: Router) { }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
    this.employeeToDisplay = this.employees[0];
    this.filteredEmployees= this.employees;
  }

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
  OnCLick(employeeId: number) {
    this._router.navigate(['/employees', employeeId]);
  }

  changeEmployeeName() {
    this.employees[0].name='Jordan';
    this.filteredEmployees= this.filterEmployees(this.searchTerm);

    // const newEmployeeArray: Employee[] = Object.assign([], this.employees);
    // newEmployeeArray[0].name = 'Jordan';
    // this.employees = newEmployeeArray;
  }
  onMouseMove(){

  }
  filterEmployees(searchString: string){
    return this.employees.filter(employees=>
      employees.name.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase())!==-1);
  }

}
