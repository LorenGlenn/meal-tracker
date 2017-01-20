import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meals-list',
  template: `
  <ul>
    <li *ngFor="let currentMeal of childMealsList">Name: {{currentMeal.name}}<br>
      Details: {{currentMeal.details}} <br>
      Calories: {{currentMeal.calories}} <br>
      <button (click)="editButtonHasBeenClicked(currentMeal)">Edit!</button>
    </li>
  </ul>
  `
})

export class MealsListComponent {
  @Input() childMealsList: Meal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
  
}
