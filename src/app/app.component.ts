import { Component , OnInit} from '@angular/core';
import 'fullcalendar';
import 'fullcalendar-scheduler';
import * as $ from 'jquery';
import { EventService } from '../app/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(protected eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(data => {
      $('#calendar').fullCalendar({
      
        now: '2019-01-10',
        editable: true, // enable draggable events
        aspectRatio: 1.8,
        header: {
          left: 'today prev,next',
          center: 'title',
          right: 'basicDay,basicWeek,timelineMonth,timelineYear,listYear,year'
        },
        defaultView: 'timelineMonth',
        navLinks: true,
        weekNumbers: true,
        weekNumberTitle:'Week',
        events: data,
        selectable: true, 
        eventColor: 'orange',
        resourceLabelText:"a",
        resources: [
          {
              id: 'Vacation',
              // name: 'Joe Bloggs',
              // color: 'red'
          },
          {
              id: 'Call scheduling',
              // name: 'Alan Black',
              // color: 'blue'
          }
  
      ],
      dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        views: {
          basicDay: {
            buttonText: 'Day'
          },
          timelineMonth: {
            buttonText: 'Month'
          },
          timelineYear: {
            buttonText: 'Year'
          },
          basicWeek: {
            buttonText: 'Week'
          },
          today: {
            buttonText: 'Today'
          }
        },
        schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
      });
    });
    
  }
}
