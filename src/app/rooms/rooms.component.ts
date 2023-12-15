import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { RoomsList, rooms } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from '../services/rooms.service';
import { Observable } from 'rxjs/internal/Observable';
import { ConfigService } from '../services/config.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {


  name = 'Prince';
  numberofrooms = 20;
  hide = false;
  title = 'Room List'

  rooms: rooms = {
    totalRooms: 20,
    bookedRooms: 5,
    availableRooms: 10,
  };

  priceFilter = new FormControl(0);

  selectedRoom!: RoomsList;

  toggle() {
    this.hide = !this.hide;
    this.title = "Room List";
  }

  selectRoom(room: RoomsList) {
    this.selectedRoom = room;
  }
  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View";

    this.headerChildrenComponent.last.title = "Last Title";
  }

  ngAfterViewChecked(): void {

  }

  roomlist: RoomsList[] = [];

  stream = new Observable(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    //observer.error();
  });

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  // roomService = new RoomsService();

  constructor(private roomsService: RoomsService,
    private configService: ConfigService) { }
  ngOnDestroy(): void {
  }

  ngDoCheck() {
    console.log('on changes is called');
  }

  ngOnInit(): void {
    this.stream.subscribe((data) => console.log(data));
    this.stream.subscribe((data) => console.log(data));
    this.roomsService.getRooms().subscribe(rooms => {
      this.roomlist = rooms;
    });
  }

  addRoom() {
    const room: RoomsList = {
      //roomNumber: '4',
      roomType: 'luxury room',
      amenities: 'free wifi, tv, air conditioner',
      price: 2000,
      photos: 'Photos',
      checkinTime: new Date('24-sep-2024'),
      checkinOut: new Date('26-sep-2024'),
      rating: 3.5,
      id: undefined,
      roomNumber: ''
    }
    this.roomlist.push(room);
  }
  editRoom() {

  }
  deleteRoom() {

  }



}



