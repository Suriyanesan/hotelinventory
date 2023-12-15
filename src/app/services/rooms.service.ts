import { Inject, Injectable } from '@angular/core';
import { RoomsList } from '../rooms/rooms';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { AppConfig } from '../AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  addRoom(room: RoomsList) {
  }

  private apiUrl = '/api/rooms'

  roomlist!: RoomsList[];

  // private readonly newProperty: RoomsList = {
  //   roomNumber: 1,
  //   roomType: 'Deluxe Room',
  //   price: 100,
  //   amenities: 'Free wifi, Tv',
  //   photos: 'Photo',
  //   checkinTime: new Date('2023-09-25'),
  //   checkinOut: new Date('2023-09-26'),
  //   rating: 3.6
  // };

  // private initializeDefaultRoom(): RoomsList {
  //   return {
  //     roomNumber: 1,
  //     roomType: 'Deluxe Room',
  //     price: 100,
  //     amenities: 'Free wifi, Tv',
  //     photos: 'Photo',
  //     checkinTime: new Date('2023-09-25'),
  //     checkinOut: new Date('2023-09-26'),
  //     rating: 3.6
  //   };
  // }

  // roomlist: RoomsList[] = [
  //   this.newProperty,
  //   {
  //     roomNumber: 2,
  //     roomType: 'Deluxe Room',
  //     price: 500,
  //     amenities: 'Free wifi, Tv',
  //     photos: 'Photo',
  //     checkinTime: new Date('2023-09-12'),
  //     checkinOut: new Date('2023-09-13'),
  //     rating: 4.1232
  //   },
  //   {
  //     roomNumber: 3,
  //     roomType: 'Private Room',
  //     price: 1500,
  //     amenities: 'Free wifi, Tv',
  //     photos: 'Photo',
  //     checkinTime: new Date('2023-09-12'),
  //     checkinOut: new Date('2023-09-13'),
  //     rating: 2
  //   }
  // ];

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig, private http: HttpClient) {
    // console.log(environment.apiEndPoint)
    console.log(this.config.apiEndpoint);
    console.log("Room service Initialized");
  }

  getRooms() {
    return this.http.get<RoomsList[]>('/api/rooms');
  } 
  

  // addRoom(room: RoomsList): void {
  //   this.roomlist.push(room);
  //}

}
  