import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer, ApiService, Question } from 'src/app/services/api.service';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit {
  public question?:Question;
  public answerList?:Answer[];
  public questionId?:string;
  public answerQid?:string;

  constructor(public apiService: ApiService,private activatedRoute: ActivatedRoute,private router: Router) { 
    this.questionId = this.activatedRoute.snapshot.params['id'];
    const question= this.apiService.questionList.find((question)=>question.id===this.questionId)
   
    
  
    if(!question){
      return;
    }
    this.question=question;
    

  }

  returnHome(){
    this.router.navigate(['/']);
  }

  async ngOnInit() {
    if(this.questionId){
      await this.apiService.loadAnswers(this.questionId);
      this.apiService.questionId=this.questionId;
  
    }
    
      
    if(!this.question && this.questionId){
      try {
        this.question=await this.apiService.getQuestion(this.questionId);


      } catch (error) {
        console.log(error);
        this.router.navigate(['/']);
      }
      
    }
  }

}
