import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutes } from './app.routes';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot({ backButtonText: 'Atrás' }),
    RouterModule.forRoot(AppRoutes),
    NgCircleProgressModule.forRoot({
      "backgroundColor": "#0a264a",
      "maxPercent": 200,
      "unitsFontSize": "16",
      "unitsColor": "#ffffff",
      "outerStrokeColor": "#FFFFFF",
      "outerStrokeLinecap": "square",
      "innerStrokeColor": "#FFFFFF",
      "titleColor": "#ffffff",
      "titleFontSize": "18",
      "subtitleColor": "#ffffff",
      "subtitleFontSize": "22",
      "showSubtitle": false,
      "showInnerStroke": false,
      "startFromZero": false,
      "clockwise": false,
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
