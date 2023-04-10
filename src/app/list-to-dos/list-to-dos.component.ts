import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class ToDo {
  constructor(
    public id: number,
    public description: string,
    public willDo: string,
    public done: string,
    public status: string,
    public targetDate: Date
  ) { }
}

@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.css']
})
export class ListToDosComponent implements OnInit {

  todos: ToDo[] = [];

  message!: string;

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshData();
  }

  refreshData(){
    this.todoService.retrieveAllTodos('Chrysa').subscribe(
    response => {
      console.log(response);
      this.todos = response;
    }
  )
  }

  deleteTodo(id: any) {
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('Chrysa', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful`
        this.refreshData();

      }
    )

  }


  updateTodo(id: any) {
    console.log(`update todo ${id}`)
    this.router.navigate(['todos',id])
  }

  addTodo(){
    console.log(`create todo`)
    this.router.navigate(['todos',-1]);
    // apply the blur effect to the body element
  }

  onActionSelected(event: Event, id: any) {
    const action = (event.target as HTMLSelectElement)?.value;
    if (action === 'update') {
      // handle update action
      this.updateTodo(id)
    } else if (action === 'delete') {
      // handle delete action
      this.deleteTodo(id)
    }
  }

  flipCard() {
    const card = document.querySelector('.flip-card-inner');
    if(card!=null){
    card.classList.toggle('flip');
    }
  }


}
