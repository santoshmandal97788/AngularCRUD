import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/models/employee.model';

@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent implements OnInit {
  // fullName:string="";
  // email:string="";
  // fullName:string="";
  // email:string="";
  isActive=true;
  employee: Employee = new Employee;
  constructor() { }

  ngOnInit(): void {
  }
  saveEmployee(employeeForm: NgForm): void {
    console.log(employeeForm.value);
  }

}
