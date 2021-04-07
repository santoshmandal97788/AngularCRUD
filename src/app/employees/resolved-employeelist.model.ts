import { Employee } from "src/models/employee.model";

export class ResolvedEmployeeList {
    constructor(public employeeList: Employee[], public error: any = null) { }
}
