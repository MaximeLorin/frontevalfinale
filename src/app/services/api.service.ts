import { Injectable } from '@angular/core';
import axios from 'axios';

export interface Question{
  id:string,
  question_date:Date,
  title:string,
  content:string,
  flag:boolean,
  language:string,
  author:string
}

export interface Answer{
  id:string,
  answer_date:Date,
  content:string,
  flag:boolean,
  // author:string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public questionList:Question[]=[];
  public questionSearchList:Question[]=[];
  public questionLanguageList:Question[]=[];
  public questionId:string="";
  public currentLanguage:any="";
  public answerList:Answer[]=[];

  private urlBase="http://localhost:8080/api/questions"
  private urlBaseAnswer="http://localhost:8080/api/answers"
  

  constructor() { }

  public async searchByLanguage(language:any){
    const list=await axios.get(this.urlBase+"/"+language)
    let data=list.data;
    
    return data.map((question:any)=>{
      return{
        id:question.id,
        question_date:question.question_date,
        title:question.title,
        content:question.content,
        flag:question.flag,
        language:question.language,
        author:question.user.username
      }
    })   
  }

  public async getAllQuestions():Promise<Question[]>{
      const list=await axios.get(this.urlBase);
      let data=list.data;
 
      
      return data.map((question:any)=>{
        return{
          id:question.id,
          question_date:question.question_date,
          title:question.title,
          content:question.content,
          flag:question.flag,
          language:question.language,
          author:question.user.username
        }
      })   
  }

  public async getQuestion(id:string):Promise<Question>{
    const question = await axios.get(this.urlBase+"/",{ params: { id: id }});
    let data=question.data;
    
    return data;
  }

  public async addQuestion(question:Question){
    const newQuestion= await axios.post(this.urlBase,question);

    this.questionList.push(newQuestion.data);
  }

  public async modifyQuestion(question:Question, id:string){
    return await axios.patch(this.urlBase+"/"+id,question);;
  }

  public async deleteQuestion(question:Question){
    const index: number = this.questionList.indexOf(question);
    this.questionList = this.questionList.filter((u) => u !== question);
    return await axios.delete(this.urlBase+"/"+question.id);
  }
  public async getSearchQuestions(word:string):Promise<Question[]>{
    const list=await axios.get(this.urlBase+"/search",{ params: { title: word }});
    let data= list.data;
    console.log(data);
      return data.map((question:any)=>{
        return{
          id:question.id,
          question_date:question.question_date,
          title:question.title,
          content:question.content,
          flag:question.flag,
          language:question.language,
          author:question.user.author
        }
      })   
  }
  public async loadQuestionsSearch(word:string){
    this.questionSearchList=await this.getSearchQuestions(word);
  }
  public async loadQuestions(){
    this.questionList=await this.getAllQuestions();
    
  }
  public async loadQuestionsLang(){

    this.questionLanguageList=await this.searchByLanguage(this.currentLanguage);
    console.log(this.questionLanguageList);
    
  }

  public async getAllAnswers(id:string):Promise<Answer[]>{
    const list=await axios.get(this.urlBaseAnswer+"/"+id);
    let data=list.data;
    
    return data.map((answer:any)=>{
      return{
        id:answer.id,
        answer_date:answer.answer_date,
        content:answer.content,
        flag:answer.flag,
        // author:answer.user.username
      }
    })   
  }
  
  public async addAnswer(answer:Answer,Qid:string){
    const newAnswer= await axios.post(this.urlBaseAnswer+"/"+Qid,answer);

    this.answerList.push(newAnswer.data);
  }

  public async loadAnswers(id:string){
    this.answerList=await this.getAllAnswers(id);
  }
}
