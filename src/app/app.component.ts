import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CacheService } from "ionic-cache";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Eventos',
      url: '/eventos',
      icon: 'map'
    },
    
    {
      title: 'Login',
      url: '/login',
      icon: 'lock'
    },
    {
      title: 'Sobre',
      url: '/sobre',
      icon: 'information-circle'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    cache: CacheService
  ) {
    this.initializeApp();
    cache.setDefaultTTL(30); //set default cache TTL for 1 hour
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
