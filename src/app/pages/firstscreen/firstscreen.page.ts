import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, Content } from '@ionic/angular';

@Component({
  selector: 'app-page-firstscreen',
  templateUrl: 'firstscreen.page.html',
  styleUrls: ['firstscreen.page.scss']
})
export class firstscreenPage implements OnInit {

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
