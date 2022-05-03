import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectComponent } from './pages/connect/connect.component';
import { HomeComponent } from './pages/home/home.component';
import { QuestionPageComponent } from './pages/question-page/question-page.component';

const routes: Routes = [{
  path:'', component:HomeComponent
},{path:'question/:id', component:QuestionPageComponent},
{path:'connect/:type', component:ConnectComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
