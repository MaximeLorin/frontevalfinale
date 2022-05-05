import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  public publish:boolean=false;
  public open:boolean=false;
  public answerString:string="+ Répondre"

  createAnswer = new FormGroup({
    content: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(800),
    ]),
  });

  async submitAnswer(Qid:string) {
    await this.apiService.addAnswer(this.createAnswer.value,Qid);
    await this.apiService.loadAnswers(Qid);
    this.openSubscribe();
    this.createAnswer.reset()
  }

  openSubscribe(){
    this.open=!this.open;
    if(this.open){
      this.answerString="- Fermer"
    }else{
      this.answerString="+ Répondre"
    }
  }

  constructor(public apiService:ApiService ,private router: Router) { }

  ngOnInit(): void {
  }

}
