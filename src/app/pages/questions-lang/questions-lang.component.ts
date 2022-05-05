import { Component, OnInit } from '@angular/core';
import { ApiService, Question } from 'src/app/services/api.service';

@Component({
  selector: 'app-questions-lang',
  templateUrl: './questions-lang.component.html',
  styleUrls: ['./questions-lang.component.scss']
})
export class QuestionsLangComponent implements OnInit {
  public questionLanguageList?:Question[]
  constructor(public apiService:ApiService) {    }
  changeCurrentLang(language:any){
    this.apiService.currentLanguage=language;
    sessionStorage.setItem("language",language)
  
  }
  refreshLang(){
    if(sessionStorage.getItem("language")){
      const language=sessionStorage.getItem("language")
      this.changeCurrentLang(language);
    }
  }
  async ngOnInit(){
    this.refreshLang();
    await this.apiService.loadQuestionsLang();

  }

}
