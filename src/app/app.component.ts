import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}} {{test}}</h1>`
})
export class AppComponent { 
  test = 'haha';
  name = 'Angular 2'; 
}
