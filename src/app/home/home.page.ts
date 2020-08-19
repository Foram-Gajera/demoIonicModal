import { Component } from "@angular/core";
import { AlertController, ModalController } from "@ionic/angular";
import { ModalPage } from "../modal/modal.page";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(public modalController: ModalController) {
    console.log(this.details.countries);
  }

  details = {
    countries: [
      "india",
      "cas",
      "xas",
      "safd",
      "asfd",
      "asfdasf",
      "sdfdf",
      "sdcfdds",
      "dsfdsg",
      "dfgfdg",
      "dsfd",
      "india",
      "cas",
      "xas",
      "safd",
      "asfd",
      "asfdasf",
      "sdfdf",
      "sdcfdds",
      "dsfdsg",
      "dfgfdg",
      "dsfd",
    ],
    cities: ["sadf", "dfds", "dsf"],
  };
  data = "<div>Hello</div>";
  async openModal() {
    const alert = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        content: this.details,
      },
      cssClass: "auto-height",
      // backdropDismiss: false,
    });

    await alert.present();
  }
}
