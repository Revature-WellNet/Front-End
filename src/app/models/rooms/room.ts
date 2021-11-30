import { Area } from "./area";
/**/
export class Room {
    roomId:number;
    roomNumber:number;
    roomStatus:number;
    area:Area;
    patients:string[];
    highlighted:boolean;

    constructor(roomId:number, roomNumber:number, area:Area, roomStatus:number, patients:string[], highlighted:boolean){
        this.roomId = roomId;
        this.roomNumber = roomNumber;
        this.area = area;
        this.roomStatus = roomStatus;
        this.patients = patients;
        this.highlighted = highlighted;
    }
}
