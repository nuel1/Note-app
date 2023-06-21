import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-plan',
  templateUrl: './daily-plan.page.html',
  styleUrls: ['./daily-plan.page.scss'],
})
export class DailyPlanPage implements OnInit {
  constructor() {}

  ionViewWillEnter() {
    document.getElementById('open-daily-plan-modal')?.click();
  }
  ngOnInit() {}
}
