import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { HomePage } from '../pages/home/home.page';
import { DailyPlanPage } from '../pages/daily-plan/daily-plan.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        component: HomePage,
        data: { title: 'Home' },
      },
      {
        path: 'daily-plan',
        component: DailyPlanPage,
        data: { title: 'Daily plan' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
