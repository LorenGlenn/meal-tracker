import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Meal Tracker</h1>
  <ul>
    <li *ngFor="let currentMeal of meals">{{currentMeal.name}}:
      <li>{{currentMeal.details}}</li>
      <li>{{currentMeal.calories}}</li> <button (click)="editMeal()">Edit!</button>
    </li>
  </ul>
  <hr>
  <div>
   <h3>{{selectedMeal.name}}</h3>
  <h3>Edit Meal</h3>
  <label>Enter Meal Name:</label>
  <input [(ngModel)]="selectedMeal.name">
  <label>Enter Meal Details:</label>
  <input [(ngModel)]="selectedMeal.details">
  <label>Enter Meal Calories:</label>
  <input [(ngModel)]="selectedMeal.calories">
  </div>
 </div>
  `
})

export class AppComponent {
  meals: Meal[] = [
    new Meal('Steak', 'Ribeye 1lb', 800)
  ];
  selectedMeal: Meal = this.meals[0];

  editMeal() {
    alert("edit");
  }
}

export class Meal{
  constructor(public name: string, public details: string, public calories: number) {  }
}
