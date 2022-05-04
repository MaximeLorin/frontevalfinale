import { Component, Input, OnInit } from '@angular/core';
import { Answer } from 'src/app/services/api.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input()
  public answer?:Answer;
  constructor() { }
  public formatedDate:String="";
  
  transformDate(){
    if(this.answer){
      console.log(this.answer.answer_date);
      
      let test:Date=this.answer?.answer_date;
      let date=new Date(test)
      
      this.formatedDate=date.toLocaleDateString()+" à "+date.toLocaleTimeString();
    }
  }
  
  ngOnInit() {
    this.transformDate();
  }

}
