import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TwittComponent } from './twitt/twitt.component';
import { LikedComponent } from './liked/liked.component';

@NgModule({
  declarations: [
    AppComponent,
    TwittComponent,
    LikedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
