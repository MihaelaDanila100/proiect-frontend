import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shorten'
})
export class ShortenArrayPipe implements PipeTransform {
    transform(value: any[]): any[] {
        let newValue = value.slice(2);
        return newValue;
    }
}