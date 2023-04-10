// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Calendar, CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
// import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import { CalendarDataServiceService } from '../service/data/calendar-data.service.service';
// import { EventInput } from '@fullcalendar/core';
// import { map } from 'rxjs';
// import { Event } from './event.model';

// export class Guest {
//   constructor(
//     public id: number,
//     public name: string,
//     public description: string,
//     public firstDay: Date,
//     public lastDay: Date
//   ) { }
// }



// @Component({
//   selector: 'app-calendar',
//   templateUrl: './calendar.component.html',
//   styleUrls: ['./calendar.component.css']
// })
// export class CalendarComponent implements OnInit {

//   //guests: Calendar[] = [];
//   //events: Calendar[] = [];
//   //events: Event[] = [];
//   guest: Guest[] = [];
//   calendarOptions: CalendarOptions = {
//     initialView: 'dayGridMonth',
//     plugins: [dayGridPlugin, interactionPlugin],
//     editable: true,
//     selectable: true,
//     headerToolbar: {
//       left: 'prev,next today',
//       center: 'title',
//       right: 'dayGridMonth,timeGridWeek,timeGridDay'
//     },
//     eventClick: (info) => {
//       alert(`Event title: ${info.event.title}\nStart time: ${info.event.start}\nEnd time: ${info.event.end}`);
//     },
//     dateClick: this.handleDateClick.bind(this)
//     // events: []
//   };


//   constructor(
//     private eventService: CalendarDataServiceService,
//     private router: Router ) { }
//   //private calendarService: CalendarDataServiceService,
//   //private router: Router) { }


//   ngOnInit(): void {
//     this.eventService.retrieveAllGuests('Chrysa').subscribe(events => {
//       this.guest = events;
//       this.calendarOptions.guests = this.guest;
//       this.calendarOptions.guests= this.guest.map(event => ({
//         id: event.id,
//         title: event.description,
//         name: event.name,
//         start: event.firstDay,
//         end: event.lastDay
//       }));
//       console.log(this.guest)


//     },
//       error => console.log(error)
//     );

//   }


//   handleDateClick(arg: any) {
//     const clickedDate = arg.date;
//     const queryParams = { date: arg.dateStr };
//     this.router.navigate(['new-event'], { queryParams });
//   }





// }







import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Calendar, CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarDataServiceService } from '../service/data/calendar-data.service.service';
import { EventInput } from '@fullcalendar/core';
import { map } from 'rxjs';
import { Event } from './event.model';

export class Guest {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public firstDay: Date,
    public lastDay: Date
  ) { }
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  guest: Guest[] = [];
  events: EventInput[] = []; // create an array to hold EventInput objects
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    editable: true,
    selectable: true,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    eventClick: (info) => {
      alert(`Event title: ${info.event.title}\nStart time: ${info.event.start}\nEnd time: ${info.event.end}`);
    },
    dateClick: this.handleDateClick.bind(this),
    events: [] // assign the events array to the events property
  };


  constructor(
    private eventService: CalendarDataServiceService,
    private router: Router ) { }

  ngOnInit(): void {
    this.eventService.retrieveAllGuests('Chrysa').subscribe(events => {
      this.guest = events;
      this.events = this.guest.map(event => ({ // map the Guest objects to EventInput objects
        id: event.id.toString(),
        name: event.name,
        title: event.description,
        start: event.firstDay,
        end: event.lastDay
      }));
      this.calendarOptions.events = this.events; // assign the events array to the events property of calendarOptions
      console.log(this.guest)
    },
      error => console.log(error)
    );
  }

  // handleDateClick(arg: any) {
  //   const clickedDate = arg.date;
  //   const queryParams = { date: arg.dateStr };
  //   this.router.navigate(['new-event'], { queryParams });
  // }


  handleDateClick(arg: any) {
    const clickedDate = arg.date;
    const queryParams = { date: arg.dateStr };
    this.eventService.createGuest('Chrysa', new Guest(1002, '', '', clickedDate, clickedDate)).subscribe(newGuest => {
      console.log('Created new guest:', newGuest);
      const newEvent: EventInput = {
        id: newGuest.id.toString(),
        name: newGuest.name,
        description: newGuest.description,
        start: newGuest.firstDay,
        end: newGuest.lastDay
      };
      //this.calendarOptions.events = [...this.calendarOptions.events, newEvent];
    });
    this.router.navigate(['new-event'], { queryParams });
  }
  

}










