import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div>
    <div *ngIf="childSelectedMeal">
      <h2>{{childSelectedMeal.name}}</h2>
      <h4>Edit Meal</h4>
      <label>Enter Meal Name:</label>
      <input [(ngModel)]="childSelectedMeal.name"><br>
      <label>Enter Meal Details:</label>
      <input [(ngModel)]="childSelectedMeal.details"><br>
      <label>Enter Meal Calories:</label>
      <input [(ngModel)]="childSelectedMeal.calories"><br>
      <button (click)="doneButtonClicked()">Done</button>
    </div>
  </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
