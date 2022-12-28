import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timepassed'
})
export class TimePassedPipe implements PipeTransform {
    transform(value: any) {
        let today = new Date();
        let givenDate = new Date(value)
        let months = (today.getFullYear() - givenDate.getFullYear()) * 12;
        months -= givenDate.getMonth();
        months += today.getMonth();
        return months <= 0 ? 0 : months;
    }
}