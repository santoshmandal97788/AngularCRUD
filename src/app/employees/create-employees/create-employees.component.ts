import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Department } from 'src/models/department.model';
import { Employee } from 'src/models/employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css'],
})
export class CreateEmployeesComponent implements OnInit {
  // @ViewChild('employeeForm') public createEmployeeForm: NgForm;
  @ViewChild('employeeForm', { static: true })
  public createEmployeeForm: NgForm;

  // fullName:string="";
  // email:string="";
  // fullName:string="";
  // email:string="";
  // isActive=true;
  // department='3';
  //employee: Employee = new Employee();
  previewPhoto = false;
  password: any;
  confirmPassword: any;
  datePickerConfig: Partial<BsDatepickerConfig>;

  employee: Employee;
  panelTitle: string;

  departments: Department[] = [
    { id: 1, name: 'IT' },
    { id: 2, name: 'Payroll' },
    { id: 3, name: 'HelpDesk' },
    { id: 4, name: 'HR' },
  ];
  constructor(
    private _employeeService: EmployeeService,
    private _router: Router,
    private _route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {
    this.datePickerConfig = Object.assign(
      {},
      { containerClass: 'theme-dark-blue' }
    );
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe((paramterMap) => {
      const id = +paramterMap.get('id');
      this.getEmployee(id);
    });
  }

  private getEmployee(id: number) {
    if (id === 0) {
      this.employee = {
        id: null,
        name: null,
        gender: null,
        contactPreference: null,
        phoneNumber: null,
        email: null,
        dateOfBirth: null,
        department: 'select',
        isActive: null,
        photoPath: null,
      };
      this.panelTitle = 'Create Employee';
      this.createEmployeeForm.reset();
    } else {
      this.panelTitle = 'Edit Employee';
      this._employeeService.getEmployee(id).subscribe(
        (employee) => (this.employee = employee),
        (err: any) => console.log(err)
      );
    }
  }

  saveEmployee(): void {
    if (this.employee.id == null) {
      this._employeeService.addEmployee(this.employee).subscribe(
        (data: Employee) => {
          console.log(data);
          this.createEmployeeForm.reset();
          this._router.navigate(['list']);
        },
        (error: any) => {
          console.log(error);
        },
      );
    } else {
      this._employeeService.updateEmployee(this.employee).subscribe(
        () => {
          this.createEmployeeForm.reset();
          this._router.navigate(['list']);
        },
        (error: any) => {
          console.log(error);
        },
      );
    }
  }
  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  ngAfterViewChecked(): void {
    // your code to update the model
    this.cdr.detectChanges();
  }
}
