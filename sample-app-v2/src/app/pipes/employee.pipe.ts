import { Pipe, PipeTransform } from '@angular/core';
import { IEmployee } from '../models/employee.model';

@Pipe({
    name: 'filterPipe'
})
export class EmployeePipe implements PipeTransform {
    transform(empArray: IEmployee[], ...args: string[]): IEmployee[] {
        if (empArray && empArray !== null && args && args !== null && args[0] && args[0] !== null) {

            const filterText = args[0];
            const result: IEmployee[] = [];

            for (let i = 0; i < empArray.length; i++) {
                const e: IEmployee = empArray[i];
                const index = e.name.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase());
                if (index !== -1) {
                    result.push(e);
                }
            }
            return result;
        } else {
            return empArray;
        }
    }
}
