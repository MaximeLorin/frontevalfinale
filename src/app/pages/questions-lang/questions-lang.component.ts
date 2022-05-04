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

  async ngOnInit(){
    await this.apiService.loadQuestionsLang();

  }

}
