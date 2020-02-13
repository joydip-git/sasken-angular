import { Component } from '@angular/core';
import { IEmployee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
    selector: 'app-add-emp',
    templateUrl: './add-employee.component.html'
})
export class AddEmployeeComponent {

    constructor(private empSvc: EmployeeService) {

    }
    submitData(frmData) {
        // const emp: IEmployee = <IEmployee>frmData;
        // console.log(frmData);
        this.empSvc.addEmployee(frmData);
    }
}
