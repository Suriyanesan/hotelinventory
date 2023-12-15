export interface rooms {
    availableRooms : number;
    bookedRooms : number;
    totalRooms : number;
}

export interface RoomsList {
    id: any;
    roomNumber : string;
    roomType : string;
    price : number;
    amenities : string;
    photos : string;
    checkinTime : Date;
    checkinOut : Date;
    rating : number

}