import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, Content } from '@ionic/angular';

@Component({
  selector: 'app-page-ringgames',
  templateUrl: 'ringgames.page.html',
  styleUrls: ['ringgames.page.scss']
})
export class ringgamesPage implements OnInit {

  segment: string;
  page: number;
  @ViewChild(Content) content: Content;

  constructor(
    // private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.onTabSelected('shop');
  }

  onTabSelected(segmentValue: string) {
    this.segment = segmentValue;
    this.page = 1;
  }
}
