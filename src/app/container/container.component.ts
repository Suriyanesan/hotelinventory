import { Component, OnInit, OnChanges, AfterContentInit, ContentChild, Host } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../services/rooms.service';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers: [RoomsService]
})
export class ContainerComponent implements OnInit, OnChanges {
 
// 

  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.employee);
    // this.employee.empName = 'Virat';
  }
  
  ngOnChanges(): void {
    console.log(this.employee);
    this.employee.empName = 'Virat';
  }
}
