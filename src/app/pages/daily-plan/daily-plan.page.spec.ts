import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DailyPlanPage } from './daily-plan.page';

describe('DailyPlanPage', () => {
  let component: DailyPlanPage;
  let fixture: ComponentFixture<DailyPlanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DailyPlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
