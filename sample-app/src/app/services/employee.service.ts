import { IEmployee } from '../models/employee.model';
import { employees } from '../data/employees.data';
// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// @Injectable({
//     providedIn: 'root'
// })
@Injectable()
export class EmployeeService {
    // constructor(private http: HttpClient) {

    // }
    public getEmployees(): IEmployee[] {
        // this.http.
        return employees;
    }
}
