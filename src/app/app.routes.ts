import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./modules/daily/daily.component').then(
        (m) => m.DailyComponent
      ),
  },
];
