import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService, Question } from 'src/app/services/api.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input()
  public question?:Question;
  @Output()
  modify = new EventEmitter();
  @Output()
  deleted = new EventEmitter();
  @Input()
  public homePage=false;
  public modifyContent:boolean=false;
  public formatedDate:String="";
  
  constructor(public apiService:ApiService) { }
  
  async createLanguageList(language:any){
    console.log(language);
    this.apiService.currentLanguage=language;
    this.apiService.loadQuestionsLang();
    console.log(this.apiService.questionLanguageList)
  }
  
  transformDate(){
    if(this.question){
      let test:Date=this.question?.question_date;
      let date=new Date(test)
      
      this.formatedDate=date.toLocaleDateString()+" à "+date.toLocaleTimeString();

  }
    
    
    
  }
  ngOnInit(){
    this.transformDate();
  }
  // deleteButton(){
  //   this.deleted.emit(this.article);
  // }
}
