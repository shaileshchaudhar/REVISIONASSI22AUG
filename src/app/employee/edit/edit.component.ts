import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/Service/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user1 :any []=[];
  SrNo:string|null=''
  user2 :any[]=[];
  FullName :string=''
  emailId:string=''
  contactnumber:string=''
access: string|null ='View';
disable:boolean=true;

  constructor(private _route:ActivatedRoute,private _user:EmployeeService) { }

  ngOnInit(): void {
    this.SrNo= this._route.snapshot.paramMap.get('SrNo');
    this.access= this._route.snapshot.paramMap.get('access');
    this.user1=this._user.getdata();
    this.user2=this.user1.filter(e=>e.SrNo==this.SrNo)
        
    console.log(this.user2)
    this.FullName=this.user2[0].FullName
    console.log(this.FullName)
    this.emailId=this.user2[0].emailId
    this.contactnumber=this.user2[0].contactnumber
    if (this.access == "View") {
      this.disable = true;
    }
    else{
      this.disable=false
    }
    

  }
  savePerson( form:any){
    
  }

}
