import { NurseComponent } from "../components/nurse/nurse.component";
import { Patient } from "./patient";
import { Room } from "./rooms/room";
import { User } from "./user";

export class DiagnosisDTO {

    private symptoms?: string;
    private diagnosis?: string;
    private resolutionStatus?: boolean;
    private checkIn?: Date;
    private patient?: Patient;
    private room?: Room;
    private nurse?: User;

}

