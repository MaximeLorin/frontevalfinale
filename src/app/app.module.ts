import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import { MiniQuestionComponent } from './components/mini-question/mini-question.component';
import { CommentComponent } from './components/comment/comment.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConnectComponent } from './pages/connect/connect.component';
import { QuestionPageComponent } from './pages/question-page/question-page.component';
import { QuestionsLangComponent } from './pages/questions-lang/questions-lang.component';
import { UserQuestionsComponent } from './pages/user-questions/user-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    MiniQuestionComponent,
    CommentComponent,
    AddQuestionComponent,
    AddCommentComponent,
    SubscribeComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    ConnectComponent,
    QuestionPageComponent,
    QuestionsLangComponent,
    UserQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
