import { Area } from "./area";

export class Room {
    roomId:number;
    roomNumber:number;
    roomStatus:number;
    area:Area;
    patients:string[];

    constructor(roomId:number, roomNumber:number, area:Area, roomStatus:number, patients:string[]){
        this.roomId = roomId;
        this.roomNumber = roomNumber;
        this.area = area;
        this.roomStatus = roomStatus;
        this.patients = patients;
    }
}
