import { Benefit } from "./benefit";
import { Domain } from "./domain";
import { Location } from "./location";
import { Skill } from "./skill";

export interface JobDetail {
    id: number;
    name: string;
    description: string;
    location: Location;
    domain: Domain;
    experience: string;
    startDate: string;
    skills: Skill[];
    benefits: Benefit[];
    imagePath?: string;
}