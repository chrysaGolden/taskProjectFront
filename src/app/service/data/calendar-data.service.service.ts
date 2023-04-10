import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import { Observable, tap } from 'rxjs';
import { API_URL,TODO_JPA_API_URL } from 'src/app/app.constants';
import { Event } from '../../calendar/event.model';
import { Guest } from 'src/app/calendar/calendar.component';
import { G } from '@fullcalendar/core/internal-common';

@Injectable({
  providedIn: 'root'
})
export class CalendarDataServiceService {

  private baseUrl = `API_URL/users`;

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllGuests(username:any): Observable<Guest[]>{
    console.log('works')
    return this.http.get<Guest[]>(`${TODO_JPA_API_URL}/users/${username}/calendar`)
  }

  deleteGuest(username:any, id:any){
    return this. http.delete(`${TODO_JPA_API_URL}/users/${username}/calendar/${id}`);
  }

  retrieveGuest(username:any, id:any){
    return this. http.get<Guest>(`${TODO_JPA_API_URL}/users/${username}/calendar/${id}`);
  }

  updateGuest(username:any, id:any, guest:any){
    console.log('updating guest:', guest);
    return this.http.put(`${TODO_JPA_API_URL}/users/${username}/calendar/${id}`, guest);
  }

  // createTodo(username:any, todo:any){
  //   return this.http.post(`${TODO_JPA_API_URL}/users/${username}/todos/`, todo);
  // } 

  // createGuest(username: string, guest: Guest): Observable<Guest> {
  //   console.log('Creating todo for user', username);
  //   console.log('Guest data:', guest);
  //   return this.http.post<Guest>(`${TODO_JPA_API_URL}/users/${username}/calendar/`, guest);
  // }

  createGuest(username: string, guest: Guest): Observable<Guest> {
    console.log('Creating guest for user', username);
    console.log('Guest data:', guest);
    return this.http.post<Guest>(`${TODO_JPA_API_URL}/users/${username}/calendar/`, guest)
      .pipe(
        tap((newGuest: Guest) => {
          console.log(`Created guest with ID ${newGuest.id}`);
        })
      );
  }
  
}
