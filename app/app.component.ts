import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Meal Tracker</h1>
  <h3>Here are your meals:</h3>
  <meals-list [childMealsList]="masterMealsList" (clickSender)="editMeal($event)"></meals-list>
  <hr>
  <edit-meal></edit-meal>
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
