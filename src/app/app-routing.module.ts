import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './employee/edit/edit.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { EmployeedataComponent } from './employee/employeedata/employeedata.component';
import { ViewComponent } from './employee/view/view.component';

const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
  {path:'employeedata',component:EmployeedataComponent},
  {path:'editemployeedata/:SrNo',component:EditComponent},
  {path:'viewemployee/:SrNo',component:ViewComponent},
  {path:'Go back',component:EmployeedataComponent},
  {path:'Go back',component:EmployeedataComponent},
  {path:'',redirectTo:'EmployeeComponent',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
