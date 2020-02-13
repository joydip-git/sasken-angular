import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IEmployee } from './models/employee.model';
import { employees } from './data/employees.data';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // providers:[EmployeeService]
})
export class AppComponent {
  employeeRecords: IEmployee[];
  applyStyle = false;

  message = '';
  filterText = '';
  constructor(private empSvc: EmployeeService) {
    this.employeeRecords = this.empSvc.getEmployees();
  }

  // changeText(changedData) {
  //   console.log(changedData);
  //   //this.message = changedData;
  // }
}
