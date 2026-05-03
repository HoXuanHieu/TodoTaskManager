import { Component, input } from '@angular/core';
import { Task } from '../../models/task.model';
import { PanelItem } from '../panel-item/panel-item';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [PanelItem],
  templateUrl: './panel.html',
  styleUrls: ['./panel.css'],
})
export class Panel {
  heading = input.required<string>();
  tasks = input.required<Task[]>() ;
}
