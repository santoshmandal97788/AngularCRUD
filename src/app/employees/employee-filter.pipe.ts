import { PipeTransform, Pipe } from '@angular/core';
import { Employee } from 'src/models/employee.model';

@Pipe({
    name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {
    transform(employees:Employee[], searchTerm:string): Employee[]{
        if(!employees || !searchTerm){
            return  employees;
        }
        return employees.filter(employees=>
            employees.name.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase())!==-1);
    }
}
  