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
  username:string="";
  searchContent: string="";

  searchForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(26),
    ])
  })

  constructor(public apiServices:ApiService, public connectServices:ConnectService) {     
  }
  
  getUsername(){
    let credential=sessionStorage.getItem("credential");
    if (credential){
      let username=JSON.parse(credential).username;
      return username;
    }
  
  }

  async ngOnInit() {
    this.username=this.getUsername();
    this.searchForm.valueChanges.subscribe(changes => {
      this.searchContent=changes.title;
      this.apiServices.loadQuestionsSearch(this.searchContent);
      console.log(this.searchContent,this.apiServices.questionSearchList)
      
  });

  }

  deconnect(){
    this.connectServices.logout();
  }
}
