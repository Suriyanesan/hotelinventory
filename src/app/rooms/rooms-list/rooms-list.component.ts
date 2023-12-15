import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, SimpleChanges, OnDestroy } from '@angular/core';
import { RoomsList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnDestroy {
  @Input() rooms: RoomsList[] = [];

  @Input() title: string = '';

  @Input() price=0;

  @Output() selectedRoom = new EventEmitter<RoomsList>();
  e: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  selectRoom(room: RoomsList) {
    this.selectedRoom.emit(room);
  }
  ngOnDestroy() {
    //console.log("on Destroy is called");
  }
}
