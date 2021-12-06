import { Patient } from "../patient";
import { Area } from "./area";
/*12*/
export class Room {
    roomId:number;
    roomNumber:number;
    roomStatus:number;
    area:Area;
    patients:Patient[];
    highlighted:boolean;

    constructor(roomId:number, roomNumber:number, area:Area, roomStatus:number, patients:Patient[], highlighted:boolean){
        this.roomId = roomId;
        this.roomNumber = roomNumber;
        this.area = area;
        this.roomStatus = roomStatus;
        this.patients = patients;
        this.highlighted = highlighted;
    }
}
