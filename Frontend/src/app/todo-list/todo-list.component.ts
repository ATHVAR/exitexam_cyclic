
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: any[] = [];
  newTodoText: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe((todos: any) => {
      this.todos = todos;
    });
  }

  addTodo() {
    if (this.newTodoText.trim() !== '') {
      this.todoService.addTodo({
        text: this.newTodoText,
        completed: false
      }).subscribe(() => {
        this.loadTodos();
        this.newTodoText = '';
      });
    }
  }

  deleteTodo(todoId: string) {
    this.todoService.deleteTodo(todoId).subscribe(() => {
      this.loadTodos();
    });
  }

  toggleComplete(todo: any) {
    const updatedTodo = { ...todo, completed: !todo.completed };
    this.todoService.updateTodo(updatedTodo).subscribe(() => {
      this.loadTodos();
    });
  }
}

