import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/Service/employee.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  user1:any[]=[];
  user2:any[]=[];
  SrNo:string|null='';
  Fullname:string='';
  emailId:string='';
  contactNumber:string=''


  constructor(private _router:ActivatedRoute,private _data:EmployeeService) { }

  ngOnInit(): void {
    this.SrNo=this._router.snapshot.paramMap.get('SrNo');
    this.user1=this._data.getdata();
    this.user2=this.user1.filter(e=>e.SrNo==this.SrNo)
     this.SrNo=this.user2[0].SrNo
     this.Fullname=this.user2[0].FullName
     this.emailId=this.user2[0].emailId
     this.contactNumber=this.user2[0].contactnumber
    
    
  }


}
