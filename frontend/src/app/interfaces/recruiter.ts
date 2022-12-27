import { Location } from "./location";

export interface Recruiter {
    id: number;
    name: string;
    username: string;
    mail: string;
    location: Location;
    company: string;
}