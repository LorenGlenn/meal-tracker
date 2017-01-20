import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './Meal.model';

@Component({
  selector: 'edit-meal',
  template: `
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

export class EditMealComponent {

}
