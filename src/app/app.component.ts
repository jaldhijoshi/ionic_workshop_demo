import { Component, OnInit } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit{

  public sideMenuItems =[{
      "id":"home",
      "title": "Home",
      "url": "/home",
      "icon": "home"
    },
    {
      "id": "category",
      "title":"Shopping Category",
      "url": "/categories",
      "icon":"list"
    }];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,private menu: MenuController
  ) {
    this.initializeApp();
  }
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  
}
