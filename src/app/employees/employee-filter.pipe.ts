import { PipeTransform, Pipe } from '@angular/core';
import { Employee } from 'src/models/employee.model';

@Pipe({
    name: 'employeeFilter',
    pure: false
})
export class EmployeeFilterPipe implements PipeTransform {
    private counter=0;
    transform(employees:Employee[], searchTerm:string): Employee[]{
        this.counter++;
        console.log("Filter Pipe Execueted count " + this.counter)
        if(!employees || !searchTerm){
            return  employees;
        }
        return employees.filter(employees=>
            employees.name.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase())!==-1);
    }
}
  