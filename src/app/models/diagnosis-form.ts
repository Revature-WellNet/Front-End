import { Timestamp } from "rxjs";
import { Patient } from "./patient";
import { Room } from "./rooms/room";
import { User } from "./user";


export class DiagnosisForm {

    public diagId!:number;
    public diagnosis!:string;
    public symptoms!:string;
    public treatment!:string;
    public resolutionStatus!:boolean;
    public checkIn!:Date;
    public checkOut!:Date;
    public patient!:Patient;
    public room!:Room;
    public nurse!:User;
    public doctor!:User;

    constructor(
    //     // diagId:number,
    //     // diagnosis:string,
    //     // symptoms:string,
    //     // treatment:string,
    //     // resolutionStatus:boolean,
    //     // checkIn:Timestamp<Date>,
    //     // checkOut:Timestamp<Date>,
    //     // patient:Patient,
    //     // room:Room,
    //     // nurse:User,
    //     // doctor:User
     ){
    // this.diagId = diagId;
    // this.diagnosis = diagnosis;
    // this.symptoms = symptoms;
    // this.treatment = treatment;
    // this.resolutionStatus = resolutionStatus;
    // this.checkIn = checkIn;
    // this.checkOut = checkOut;
    // this.patient = patient;
    // this.room = room;
    // this.nurse = nurse;
    // this.doctor = doctor;

}

    public getResolutionStatus(): boolean{
        return this.resolutionStatus;
    }

    public getRoom(): Room{
        return this.room;
    }

    public getPatient(): Patient{
        return this.patient;
    }
}