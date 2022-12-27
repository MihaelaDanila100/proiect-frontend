import { Benefit } from "./benefit";
import { Domain } from "./domain";
import { Location } from "./location";
import { Skill } from "./skill";

export interface JobDetail {
    id: string;
    name: string;
    description: string;
    location: Location;
    domain: Domain;
    startDate: string;
    skills: Skill[];
    benefits: Benefit[];
}