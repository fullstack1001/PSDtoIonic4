import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { firstscreenPage } from './firstscreen.page';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    NgCircleProgressModule,
    RouterModule.forChild([
      {
        path: '',
        component: firstscreenPage
      }
    ])
  ],
  declarations: [firstscreenPage]
})
export class firstscreenPageModule {}
