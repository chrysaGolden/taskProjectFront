import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TODO_JPA_API_URL} from 'src/app/app.constants';

import { ToDo } from 'src/app/list-to-dos/list-to-dos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }
 
  retrieveAllTodos(username: string): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`);
  }

  deleteTodo(username:any, id:any){
    return this. http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username:any, id:any){
    return this. http.get<ToDo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username:any, id:any, todo:any){
    return this.http.put(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`, todo);
  }

  // createTodo(username:any, todo:any){
  //   return this.http.post(`${TODO_JPA_API_URL}/users/${username}/todos/`, todo);
  // } 

  createTodo(username: string, todo: ToDo): Observable<ToDo> {
    console.log('Creating todo for user', username);
    return this.http.post<ToDo>(`${TODO_JPA_API_URL}/users/${username}/todos/`, todo);
  }
  


}
