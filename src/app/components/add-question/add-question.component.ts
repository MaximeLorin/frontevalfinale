import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  public publish:boolean=false;
  public open:boolean=false;
  public questionString:string="+ Poser une question"

  createQuestion = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(150),
    ]),
    content: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(800),
    ]),
    language: new FormControl('',
    [Validators.required])
  });

  submitQuestion() {
    this.apiService.addQuestion(this.createQuestion.value);
    console.log(this.createQuestion.value);
    
    this.apiService.loadQuestions();
    
  }

  onPublishBool(value:boolean){
    this.publish=value;
    console.log(this.publish);
  }
  constructor(public apiService:ApiService ,private router: Router) { }

  openSubscribe(){
    this.open=!this.open;
    if(this.open){
      this.questionString="- Fermer"
    }else{
      this.questionString="+ Poser une question"
    }
  }

  ngOnInit(): void {
  }

}
