
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get(`${this.baseUrl}/api/todos`);
  }

  addTodo(todo: any) {
    return this.http.post(`${this.baseUrl}/api/todos`, todo);
  }

  updateTodo(todo: any) {
    return this.http.put(`${this.baseUrl}/api/todos/${todo._id}`, todo);
  }

  deleteTodo(todoId: string) {
    return this.http.delete(`${this.baseUrl}/api/todos/${todoId}`);
  }
}
