import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService, Question } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-questions',
  templateUrl: './user-questions.component.html',
  styleUrls: ['./user-questions.component.scss']
})
export class UserQuestionsComponent implements OnInit {
  public questionList?:Question[];
  public name?:string;
  
  constructor(public apiService: ApiService,private activatedRoute: ActivatedRoute,private router: Router) {
    this.name = this.activatedRoute.snapshot.params['name'];
    console.log();
    
    }
 
  async ngOnInit() {
    if(this.name){
      const test=await this.apiService.loadQuestionsByUser(this.name);
      console.log(test);
       
    }
  }

}
