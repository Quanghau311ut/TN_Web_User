import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { Detail_newComponent } from './detail_new/detail_new.component';
import { MostViewComponent } from './most-view/most-view.component';
import { ListNewsComponent } from './list-news/list-news.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { ContactComponent } from './contact/contact.component';
import { IntroductComponent } from './introduct/introduct.component';

@NgModule({
  declarations: [					
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Detail_newComponent,
      MostViewComponent,
      ListNewsComponent,
      SlideShowComponent,
      ContactComponent,
      IntroductComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
