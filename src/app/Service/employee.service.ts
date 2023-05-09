import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  private employee:any []=[
        
    {SrNo:1,FullName:'Shailesh Kumar Chaudhary',emailId:'emp1@gmail.com',contactnumber:'1234567890',Action:''},
    {SrNo:2,FullName:'Rohit Gupta', emailId:'emp2@gmail.com',contactnumber:'1234567890',Action:''},
    {SrNo:3,FullName:'Sugand Srivastava', emailId:'emp3@gmail.com',contactnumber:'1234567890',Action:''},
    {SrNo:4,FullName:'Vertika Gupta', emailId:'emp4@gmail.com',contactnumber:'1234567890',Action:''},

];
getdata(){
  return this.employee
}
}
