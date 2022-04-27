import { Area } from "./area";

export class RoomDto {
    roomId:number;
    roomNumber:number;
    area:Area;

    constructor(roomId:number, roomNumber:number,  area:Area){
        this.roomId = roomId;
        this.roomNumber = roomNumber;
        this.area = area;
    }

}
