import { Component, signal } from '@angular/core';
import { TaskForm } from './components/task-form/task-form';
import { Panel } from './components/panel/panel';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskForm, Panel],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('TodoList-Angular');
}
