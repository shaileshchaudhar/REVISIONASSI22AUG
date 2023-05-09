import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Service/employee.service';

@Component({
  selector: 'app-employeedata',
  templateUrl: './employeedata.component.html',
  styleUrls: ['./employeedata.component.css']
})
export class EmployeedataComponent implements OnInit {
  employee:any[]=[]

  constructor(private _data:EmployeeService,) { }

  ngOnInit(): void {
    this.employee=this._data.getdata()
  }
  displayedColumns: string[] = ['SrNo','FullName','emailId','contactnumber','Action']

}
