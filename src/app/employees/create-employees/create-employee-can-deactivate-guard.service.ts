import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { CreateEmployeesComponent } from "./create-employees.component";

@Injectable()
export class CreateEmployeeCanDeactivateGuardService implements CanDeactivate<CreateEmployeesComponent> {

    constructor() { }

    canDeactivate(component: CreateEmployeesComponent):   boolean{
        if(component.createEmployeeForm?.dirty){
            return confirm('Are you sure you want to discard your changes?');
        }
        else{
            return true;
        }
    }

}