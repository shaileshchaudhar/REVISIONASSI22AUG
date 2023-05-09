import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import {MatInputModule} from '@angular/material/input';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EmployeedataComponent } from './employeedata/employeedata.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeedataComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatButtonModule,
    RouterModule,
    MatCardModule
  
    
   
  ],
  exports:[EmployeeComponent,EditComponent,ViewComponent]
})
export class EmployeeModule { }
