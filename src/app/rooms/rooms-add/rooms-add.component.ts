import { Component, OnInit } from '@angular/core';
import { RoomsList } from '../rooms';
import { RoomsService } from 'src/app/services/rooms.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.css']
})
export class RoomsAddComponent implements OnInit {

  room: RoomsList = {
    roomType: '',
    id: undefined,
    roomNumber: '',
    price: 0,
    amenities: '',
    photos: '',
    checkinTime: new Date(),
    checkinOut: new Date(),
    rating: 0
  }

  successMessage: string = '';

  constructor(private roomsService: RoomsService) { }
  ngOnInit() {}

  AddRoom(roomsForm: NgForm) {
    // if (roomsForm.valid) {
    //   this.roomsService.addRoom(this.room).subscribe(() => {
    //     this.successMessage = 'Room added successfully';
    //   });
    // }
    //this.roomsService.addRoom(this.room).subscribe(() =>  {
    //   this.successMessage = 'Rooms added successfully';
    //   roomsForm.resetForm({
    //     roomType: '',
    //     id: undefined,
    //     roomNumber: '',
    //     price: 0,
    //     amenities: '',
    //     photos: '',
    //     checkinTime: new Date(),
    //     checkinOut: new Date(),
    //     rating: 0
    //   });

    // })
  }
  
  
  
}
