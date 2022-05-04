import { Component, Input, OnInit } from '@angular/core';
import { ApiService, Question } from 'src/app/services/api.service';

@Component({
  selector: 'app-mini-question',
  templateUrl: './mini-question.component.html',
  styleUrls: ['./mini-question.component.scss']
})
export class MiniQuestionComponent implements OnInit {
  @Input()
  public question?:Question;
  constructor(private apiService:ApiService) { }

  clearSearchList(){
    this.apiService.questionSearchList=[];
    console.log( this.apiService.questionSearchList);
    
  }

  ngOnInit(): void {
  }

}
