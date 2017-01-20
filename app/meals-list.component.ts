import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meals-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allMeals"  selected="selected">All Meals</option>
    <option value="lowCalorieMeals">Low Calorie Meals</option>
    <option value="highCalorieMeals">High Calorie Meals</option>
  </select>

  <ul>
    <li *ngFor="let currentMeal of childMealsList | calorieFilter:filterByCalories">Name: {{currentMeal.name}}<br>
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
  filterByCalories: string = "allMeals";

  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
  }

}
