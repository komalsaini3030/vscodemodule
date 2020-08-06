import { Component, OnInit } from '@angular/core';
import { Employee} from "../employee";

@Component({
  selector: 'app-display-employee',
  template: `
    <table>
    <tr>
    <th>Employee Id </th>
    <th> Employee Name</th>
    <th> Employee Age</th>
    <th> Employee Designation</th>
    </tr>

    <tr *ngFor='let e of emp'>
    <td> {{e.employeeId}}</td>
    <td>{{e. employeeName}}</td>
    <td>{{e.employeeAge}}</td>
    <td>{{e.employeeDesignation}}</td>
    </tr>
    </table>
  `,
  styles: [
  ]
})
export class DisplayEmployeeComponent implements OnInit {
  emp1=new Employee(100,'Komal',22,'Trainee');
  emp2=new Employee(101,'john',34,'HR');
  emp3=new Employee(102,'Maria',27,'Trainer');
  emp:Employee[]=[this.emp1,this.emp2,this.emp3];

  constructor() { }

  ngOnInit(): void {
  }

}
