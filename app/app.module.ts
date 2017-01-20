import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { MealsListComponent }  from './meals-list.component';
import { EditMealComponent } from './edit-meal.component';
import { NewMealComponent } from './new-meal.component';
import { CaloriePipe } from './calorie-filter.pipe';


@NgModule({
  imports: [ BrowserModule,
           FormsModule ],
  declarations: [ AppComponent,
                MealsListComponent,
                EditMealComponent,
                NewMealComponent,
                CaloriePipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
