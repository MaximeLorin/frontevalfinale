import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectService } from './services/connect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FrontFinalProject';

  constructor(public connectService:ConnectService,private router:Router){
    this.connectService.interceptorError(this.router);
    this.connectService.intercetor();
  }
}
