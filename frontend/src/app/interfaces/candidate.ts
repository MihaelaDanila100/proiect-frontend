import { Domain } from "./domain";
import { Job } from "./job";

export interface Candidate {
    id: number;
    name: string;
    experience: string;
    username: string;
    mail: string;
    domain: Domain;
    location: Location;
    bookMarks: Job[];
}