import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Meal Tracker</h1>
  `
})

export class AppComponent {
  currentFocus
}

export class Meal{
  constructor(public name: string, public details: string, public calories: number) {  }
}
