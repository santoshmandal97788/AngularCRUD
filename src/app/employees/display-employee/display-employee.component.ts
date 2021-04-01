import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit{ //, OnChanges {
  // private _employeeId!: number;
  // @Input()
  // set employeeId(val:number){
  //   console.log('employeeId Chnaged from '+ JSON.stringify(this._employeeId) + ' to '+JSON.stringify(val));
  //   this._employeeId=val;
  // }
  // get employeeId(): number{
  //   return this._employeeId;
  // }

 // private _employee: Employee = new Employee;
  // @Input() //employee: Employee = new Employee;
  // set employee(val: Employee) {
  //   console.log('employee Chnaged from '+ JSON.stringify(this._employee) + ' to '+JSON.stringify(val));

  //   // console.log('Previous : ' + (this._employee ? this._employee.name : 'Null'));
  //   // console.log('Current : ' + val.name);
  //   this._employee = val;
  // }
  // get employee(): Employee {
  //   return this._employee;
  // }

  @Input() employee:Employee=new Employee;
  @Input() searchTerm:string;
   selectedEmployeeId: number;
   

  //@Output() notify:EventEmitter<Employee>= new EventEmitter<Employee>();

  constructor(private _route:ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.selectedEmployeeId= +this._route.snapshot.paramMap.get('id');
  }

  //to view @Input property change using ngOnChnages
  // ngOnChanges(changes: SimpleChanges){
  //   // const prevEmp= <Employee>changes.employee.previousValue;
  //   // const currentEmp= <Employee>changes.employee.currentValue;
  //   // console.log('Previous : ' + (prevEmp ? prevEmp.name : 'NULL') );
  //   // console.log('Current : ' + currentEmp.name);


  //   //traking all the input properties chnages using ngOnChnages hook
  //   // for(const propName of Object.keys(changes)){
  //   //   const change= changes[propName];
  //   //   const from= JSON.stringify(change.previousValue);
  //   //   const to= JSON.stringify(change.currentValue);
  //   //   console.log(propName + 'chnaged from' +from+ 'to' + to);
  //   // }

  // }

  // Used for passing data from child componennt to parent component
  // handleClick(){
  //   this.notify.emit(this.employee);
  // }

  getNameAndGender(): string {
    return this.employee.name + ' ' + this.employee.gender;
  }
  viewEmployee(){
    this._router.navigate(['/employees', this.employee.id], {
      queryParams: { searchTerm: this.searchTerm }
    });
  }

}
