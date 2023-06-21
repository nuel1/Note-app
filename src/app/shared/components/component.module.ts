import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetStartedComponent } from './get-started/get-started.component';
import { FullModalComponent } from './full-modal/full-modal.component';

@NgModule({
  declarations: [GetStartedComponent, FullModalComponent],
  imports: [CommonModule],
  exports: [GetStartedComponent, FullModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentModule {}
