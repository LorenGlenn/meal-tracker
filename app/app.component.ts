import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Meal Tracker</h1>
  <h3>Here are your meals:</h3>
  <meals-list [childMealsList]="masterMealsList" (clickSender)="editMeal($event)"></meals-list>
  <hr>
  <div>
    <div *ngIf="selectedMeal">
    <h2>{{selectedMeal.name}}</h2>
    <h4>Edit Meal</h4>
    <label>Enter Meal Name:</label>
    <input [(ngModel)]="selectedMeal.name"><br>
    <label>Enter Meal Details:</label>
    <input [(ngModel)]="selectedMeal.details"><br>
    <label>Enter Meal Calories:</label>
    <input [(ngModel)]="selectedMeal.calories"><br>
    <button (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

export class AppComponent {
  selectedMeal = null;

  masterMealsList: Meal[] = [
    new Meal('Steak', 'Ribeye 1lb', 800),
    new Meal('Milk', 'Ribeye 1lb', 800)
  ];

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  finishedEditing() {
    this.selectedMeal = null;
  }
}
