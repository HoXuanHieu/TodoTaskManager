import { Component, input } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-panel',
  imports: [],
  templateUrl: './panel.html',
  styleUrl: './panel.css',
})
export class Panel {
  heading = input.required<string>();
  tasks = input.required< Task[]>() ;
}
