import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shortentext'
})
export class ShortenTextPipe implements PipeTransform {
    transform(value: string, chars: number): string {
        return value.substring(0, chars) + " [...]";
    }
}
