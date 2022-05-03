import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ConnectService } from 'src/app/services/connect.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  type:string[]=["login","subscribe"];
  
  searchContent: string="";

  searchForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(26),
    ])
  })
  constructor(public apiServices:ApiService, public connectServices:ConnectService) { }

  async ngOnInit() {
    this.searchForm.valueChanges.subscribe(changes => {
      this.searchContent=changes.title;
      this.apiServices.loadQuestionsSearch(this.searchContent);
      console.log(this.apiServices.questionSearchList)
      
  });
  }
  deconnect(){
    this.connectServices.logout();
  }
}
