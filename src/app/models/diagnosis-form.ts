import { Timestamp } from "rxjs";
import { Patient } from "./patient";
import { Room } from "./rooms/room";
import { User } from "./user";


export class DiagnosisForm {

    private diagId:number;
    private diagnosis:string;
    private symptoms:string;
    private treatment:string;
    private resolutionStatus:boolean;
    private checkIn:Timestamp<Date>;
    private checkOut:Timestamp<Date>;
    private patient:Patient;
    private room:Room;
    private nurse:User;
    private doctor:User;

    constructor(
        diagId:number,
        diagnosis:string,
        symptoms:string,
        treatment:string,
        resolutionStatus:boolean,
        checkIn:Timestamp<Date>,
        checkOut:Timestamp<Date>,
        patient:Patient,
        room:Room,
        nurse:User,
        doctor:User
    ){
    this.diagId = diagId;
    this.diagnosis = diagnosis;
    this.symptoms = symptoms;
    this.treatment = treatment;
    this.resolutionStatus = resolutionStatus;
    this.checkIn = checkIn;
    this.checkOut = checkOut;
    this.patient = patient;
    this.room = room;
    this.nurse = nurse;
    this.doctor = doctor;

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