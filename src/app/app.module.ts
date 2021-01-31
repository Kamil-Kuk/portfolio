import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { PostComponent } from './component/post/post.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { PostListComponent } from './component/post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PostComponent,
    PageNotFoundComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
