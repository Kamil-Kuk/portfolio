import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { PostItemComponent } from './component/post-item/post-item.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { PostListComponent } from './component/post-list/post-list.component';
import {HttpClientModule} from '@angular/common/http';
import { WeatherComponent } from './component/weather/weather.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PostItemComponent,
    PageNotFoundComponent,
    PostListComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
