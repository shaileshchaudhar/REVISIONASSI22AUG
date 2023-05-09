import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employeeForm!:FormGroup;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm=this._fb.group({
      FirstName: ['',Validators.required],
      MiddleName: ['',Validators.required],
      LastName: ['',Validators.required],
      emailId: ['',Validators.required],
      contactnumber: ['',[Validators.minLength(1),Validators.maxLength(10),Validators.required]],
      Gender: ['',Validators.required],
      DateOfBirth : ['',Validators.required],
      EmployeeType : ['',Validators.required],
      Address: ['',Validators.required],
      Pincode: ['',[Validators.minLength(1),Validators.maxLength(6),Validators.required]],
     
    });
  }

}
