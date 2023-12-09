import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoCreateComponent } from './ui/todo-create.component';
import { TodoListComponent } from './ui/todo-list.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  template: `
    <app-todo-create></app-todo-create>
    <app-todo-list></app-todo-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TodoCreateComponent, TodoListComponent],
})
export class TodoComponent {}
