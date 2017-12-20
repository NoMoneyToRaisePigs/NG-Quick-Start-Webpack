import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {ProgressBar} from './progress-bar.component';
import { ButtonComponent } from './common/component/button/button.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ProgressBar, ButtonComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
 