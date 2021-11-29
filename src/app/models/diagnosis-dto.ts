import { NurseComponent } from "../components/nurse/nurse.component";
import { Patient } from "./patient";
import { Room } from "./rooms/room";
import { User } from "./user";

export class DiagnosisDTO {

    public symptoms!: string;
    public diagnosis!: string;
    public treatment!: string;
    public resolutionStatus!: boolean;
    public checkIn!: Date;
    public patient!: Patient;
    public room!: Room;
    public nurse!: User|null;
    public doctor!: User|null;

    constructor(
        symptoms: string,
        diagnosis: string,
        treatment: string,
        resolutionStatus: boolean,
        checkIn: Date,
        patient: Patient,
        room: Room,
        nurse: User|null,
        doctor: User|null
        )
    {
        this.symptoms = symptoms;
        this.diagnosis = diagnosis;
        this.treatment = treatment;
        this.resolutionStatus = resolutionStatus;
        this.checkIn = checkIn;
        this.patient = patient;
        this.room = room;
        this.nurse = nurse;
        this.doctor = doctor;
    }
}

