import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'todo-list',
    loadComponent: () =>
      import('./todo/todo.component').then((c) => c.TodoComponent),
  },
  {
    path: '',
    redirectTo: 'todo-list',
    pathMatch: 'full',
  },
];
