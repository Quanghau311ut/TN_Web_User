import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Detail_newComponent } from './detail_new/detail_new.component';
import { ListNewsComponent } from './list-news/list-news.component';
import { ContactComponent } from './contact/contact.component';
import { IntroductComponent } from './introduct/introduct.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'gioi-thieu', component: IntroductComponent},
  { path: 'chi-tiet', component: Detail_newComponent},
  { path: 'danh-muc-tin', component: ListNewsComponent},
  { path: 'lien-he', component: ContactComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
