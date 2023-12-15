import { Component, Self } from '@angular/core';
import { RoomsService } from '../services/rooms.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
   providers: [RoomsService]
})
export class EmployeeComponent {

  empName: string = "Suriya";

  constructor(){ }

    ngOnInit(): void{    
  }


}
