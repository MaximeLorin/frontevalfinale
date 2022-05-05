import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectComponent } from './pages/connect/connect.component';
import { HomeComponent } from './pages/home/home.component';
import { QuestionPageComponent } from './pages/question-page/question-page.component';
import { QuestionsLangComponent } from './pages/questions-lang/questions-lang.component';
import { UserQuestionsComponent } from './pages/user-questions/user-questions.component';

const routes: Routes = [{
  path:'', component:HomeComponent
},{path:'question/:id', component:QuestionPageComponent},
{path:'connect/:type', component:ConnectComponent},{
  path:'language',component:QuestionsLangComponent
},{path:'user/:name',component:UserQuestionsComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
