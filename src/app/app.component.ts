import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}} {{test}}</h1>
             <div>
                <progress-bar [progresPpercentage]="percentage"></progress-bar>
             </div>
             <div>
                <gf-button [text]="'test'" [buttonType]="'Primary'"></gf-button>
             </div>`,
})
export class AppComponent { 
  test = 'haha';
  name = 'Angular 2'; 
  percentage = '90%'
}
