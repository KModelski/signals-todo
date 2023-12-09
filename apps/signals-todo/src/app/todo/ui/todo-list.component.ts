import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  template: `<p>todo-list works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {}
