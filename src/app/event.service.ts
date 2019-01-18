import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public getEvents(): Observable<any> {
    const dateObj = new Date();
    const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
    // businessHours:true,
    let data: any = [{
        title: 'New Year',
        start: yearMonth + '-01',
        resourceId: 'Vacation',
       
    },
    {
        title: 'Vengama',
        start: yearMonth + '-07',
        end: yearMonth + '-10',
        // color  : 'red',
        resourceId: 'Call scheduling',
        // constraint: 'businessHours'
    },
    {
        id: 999,
        title: 'naidu',
        start: yearMonth + '-09T16:00:00',
        resourceId: 'Vacation'
    },
    {
        id: 999,
        title: ' Event',
        start: yearMonth + '-16T16:00:00',
        resourceId: 'Call scheduling'
    },
    {
        // title: 'Conference',
        // start: yearMonth + '-13',
        // end: yearMonth + '-16',
        // resourceId: 'Vacation',
        // overlap: false,
        // rendering: 'background',
        
    },
    {
        title: 'Meeting',
        start: yearMonth + '-12T10:30:00',
        end: yearMonth + '-12T12:30:00',
        resourceId: 'Vacation'
    },
    {
        title: 'Lunch',
        start: yearMonth + '-12T12:00:00',
        resourceId: 'Call scheduling'
    },
    {
        title: 'Meeting',
        start: yearMonth + '-12T14:30:00',
        resourceId: 'Vacation'
    },
    {
        title: 'Happy Hour',
        start: yearMonth + '-12T17:30:00',
        resourceId: 'Call scheduling'
    },
    {
        title: 'Dinner',
        start: yearMonth + '-12T20:00:00',
        resourceId: 'Vacation'
    },
    {   resourceId: 'Call scheduling',
        title: 'Birthday Party',
        start: yearMonth + '-13',
        end: yearMonth + '-17',
        
    },
    {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: yearMonth + '-28',
        resourceId: 'Vacation'
    }];
    console.log(data);
    
    return of(data);
}

}
