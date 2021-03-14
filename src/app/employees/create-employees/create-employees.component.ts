import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Department } from 'src/models/department.model';
import { Employee } from 'src/models/employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent implements OnInit {

  @ViewChild('employeeForm') public createEmployeeForm: NgForm | undefined;
  // fullName:string="";
  // email:string="";
  // fullName:string="";
  // email:string="";
  // isActive=true;
  // department='3';
  //employee: Employee = new Employee();
  previewPhoto = false;
  password:any;
  confirmPassword:any;
  datePickerConfig: Partial<BsDatepickerConfig>;

  employee: Employee = {
    id: 1,
    name: '',
    gender: '',
    contactPreference: '',
    phoneNumber: 6736536,
    email: '',
    dateOfBirth: new Date,
    department: 'select',
    isActive: false,
    photoPath: '',
  };

  departments: Department[]=[
    {id:1, name:'IT'},
    {id:2,name:'Payroll' },
    {id:3, name:'HelpDesk'},
    {id:4,name:'HR' },

  ];
  constructor(private _employeeService: EmployeeService, private _router:Router) { 
    this.datePickerConfig = Object.assign({}, { containerClass: 'theme-dark-blue' });
   
  }

  ngOnInit(): void {
    
  }
  saveEmployee(): void {
    //console.log(newEmployee);
    this._employeeService.save(this.employee);
    this._router.navigate(['list'])
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

}
