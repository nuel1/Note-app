import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GetStartedComponent } from '../shared/components/get-started/get-started.component';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor(private modalController: ModalController) {}

  async openModal() {
    const modal = this.modalController.create({
      component: GetStartedComponent,
      cssClass: 'fullscreen-modal',
    });

    // (await modal).present();
  }

  ionViewWillEnter() {
    this.openModal();
  }
}
