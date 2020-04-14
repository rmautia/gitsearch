import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {

  transform(value: any): number {
    let today: Date = new Date(); //get current date and time
    let todayWithNoTime: any = new Date(today.getMonth(), today.getDate(), today.getFullYear())
    var dateDifference = Math.abs(todayWithNoTime - value)// returns value in milliseconds
    const secondsInADay = 86400; //60 seconds*60 minutes in an hour *24 hours

    var dateDifferenceSeconds = dateDifference * 0.001; //converts to seconds

    var dateCount = dateDifferenceSeconds / secondsInADay;

    if (dateCount >= 1) {
      return dateCount;
    } else {
      return 0;
    }
  }

}
