import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-todo-create',
  standalone: true,
  imports: [CommonModule],
  template: `<p>todo-create works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoCreateComponent {}
