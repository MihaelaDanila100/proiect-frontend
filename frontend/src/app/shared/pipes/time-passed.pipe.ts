import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timepassed'
})
export class TimePassedPipe implements PipeTransform {
    transform(value: string) {
        let today = new Date();
        if(value.includes("T")) value = value.split("T")[0];
        let givenDate = new Date(value);
        let months = (today.getFullYear() - givenDate.getFullYear()) * 12;
        months -= givenDate.getMonth();
        months += today.getMonth();
        return months <= 0 ? 0 : months;
    }
}