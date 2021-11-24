import { NurseComponent } from "../components/nurse/nurse.component";
import { Patient } from "./patient";
import { Room } from "./rooms/room";
import { User } from "./user";

export class DiagnosisDTO {

    private symptoms?: string;
    private diagnosis?: string;
    private treatment?: string;
    private resolutionStatus?: boolean;
    private checkIn?: Date;
    private patient?: Patient;
    private room?: Room;
    private nurse?: User;

    constructor(
        symptoms: string,
        diagnosis: string,
        treatment: string,
        resolutionStatus: boolean,
        checkIn: Date,
        patient: Patient,
        room: Room,
        nurse: User)
    {
        this.symptoms = symptoms;
        this.diagnosis = diagnosis;
        this.treatment = treatment;
        this.resolutionStatus = resolutionStatus;
        this.checkIn = checkIn;
        this.patient = patient;
        this.room = room;
        this.nurse = nurse;
    }
}

