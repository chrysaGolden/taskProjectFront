  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute, Router } from '@angular/router';
  import { Guest } from '../calendar/calendar.component';
  import { Event } from '../calendar/event.model';
  import { CalendarDataServiceService } from '../service/data/calendar-data.service.service';

  @Component({
    selector: 'app-new-event',
    templateUrl: './new-event.component.html',
    styleUrls: ['./new-event.component.css']
  })
  export class NewEventComponent implements OnInit {
    id!: number;
    guest!: Guest;
    name!: string;
    description!: string;


    constructor(
      private calendarService: CalendarDataServiceService,
      private route: ActivatedRoute,
      private router: Router
    ) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.guest = new Guest(this.id,'', '',new Date, new Date);
      // if (this.id != -1) {
      //   this.calendarService.retrieveAllGuests('Chrysa').subscribe(data => this.guest = data)
      // }

    }

    cancelGuest(): void{
      console.log("cancel")
      this.calendarService.retrieveAllGuests('Chrysa')
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['calendar'])
          }
        )

    }


    saveGuest() {
      console.log('saveGuest called');
      if (this.id === -1) {
        //create todo
        this.guest = new Guest(this.id, this.name, this.description, new Date(), new Date());
        this.calendarService.createGuest('Chrysa', this.guest)
          .subscribe(
            (data:any) => {
              console.log(data);
              this.guest = data; // assign the returned todo to the component property
              this.calendarService.retrieveAllGuests('Chrysa')
              .subscribe(
                data => {
                  console.log(data)
                  this.router.navigate(['calendar'])
                }
              )
            }
          );
      } else {
        this.guest.name = this.name;
        this.guest.description = this.description;
        this.calendarService.updateGuest('Chrysa', this.id, this.guest)
          .subscribe(
            ( data: any) => {
              console.log(data);
              this.router.navigate(['calendar']);
            }
          );
      }

  }
  }
