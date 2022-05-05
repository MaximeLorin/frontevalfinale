import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ConnectService } from 'src/app/services/connect.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public apiServices:ApiService, public connectService:ConnectService) { }

  async ngOnInit() {
    await this.apiServices.loadQuestions();
  }

}
