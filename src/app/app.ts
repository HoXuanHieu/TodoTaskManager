import { Component, computed, inject, signal } from '@angular/core';
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

  public readonly tasks = this.taskservices.tasks;

  todoItems = computed(() => {
    const tasks = this.tasks();
    return tasks.filter(task => task.status === 'Todo')
  });
  inProgressItems = computed(() => {
    const tasks = this.tasks();
    return tasks.filter(task => task.status === 'In Progress');
  });
  completedItems = computed(() => {
    const tasks = this.tasks();
    return tasks.filter(task => task.status === 'Completed');
  });
}
