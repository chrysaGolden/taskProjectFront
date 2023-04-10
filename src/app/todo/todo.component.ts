import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDo } from '../list-to-dos/list-to-dos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id!: number;
  todo!: ToDo;


  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new ToDo(this.id, '', '','','', new Date());
    if (this.id != -1) {
      this.todoService.retrieveTodo('Chrysa', this.id).subscribe(data => this.todo = data)
    }

  }


  saveTodo() {
    if (this.id === -1) {
      //create todo
      this.todoService.createTodo('Chrysa', this.todo)
        .subscribe(
          data => {
            console.log(data);
            this.todo = data; // assign the returned todo to the component property
            this.todoService.retrieveAllTodos('Chrysa')
            .subscribe(
              data => {
                console.log(data)
                this.router.navigate(['todos'])
              }
            )
          }
        );
    } else {
      this.todoService.updateTodo('Chrysa', this.id, this.todo)
        .subscribe(
          data => {
            console.log(data);
            this.router.navigate(['todos']);
          }
        );
    }
  }
  

  cancelTodo() {
    //this.todoService.retrieveAllTodos('Chrysa')
    console.log("cancel")
    this.todoService.retrieveAllTodos('Chrysa')
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
  }

  onStatusSelected(status: string, todoId: number): void {
    // Do something with the selected status and todoId, e.g. update the todo item in the database
    console.log(`Selected status: ${status}, todo ID: ${todoId}`);
  }



}
