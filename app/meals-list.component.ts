import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meals-list',
  template: `
  <ul>
    <li *ngFor="let currentMeal of meals">Name: {{currentMeal.name}}<br>
      Details: {{currentMeal.details}} <br>
      Calories: {{currentMeal.calories}} <br>
      <button (click)="editMeal(currentMeal)">Edit!</button>
    </li>
  </ul>
  `
})

export class MealsListComponent {
  meals: Meal[] = [
    new Meal('Steak', 'Ribeye 1lb', 800),
    new Meal('Milk', 'Ribeye 1lb', 800)
  ];
}
