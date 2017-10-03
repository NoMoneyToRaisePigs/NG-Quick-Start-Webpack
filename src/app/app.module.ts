import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {ProgressBar} from './progress-bar.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ProgressBar ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
 