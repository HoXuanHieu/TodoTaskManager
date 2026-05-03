import { Component, inject, signal } from '@angular/core';
import { TaskForm } from './components/task-form/task-form';
import { Panel } from './components/panel/panel';
import { TaskService } from './service/task-service';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskForm, Panel],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  // protected readonly title = signal('TodoList-Angular');
  taskservices = inject(TaskService);

  tasks = this.taskservices.tasks;

  todoItems = this.tasks().filter(task => task.status === 'Todo');
  inProgressItems = this.tasks().filter(task => task.status === 'In Progress');
  completedItems = this.tasks().filter(task => task.status === 'Done');
}
