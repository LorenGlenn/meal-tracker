import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { MealsListComponent }  from './meals-list.component';
import { EditMealComponent } from './edit-meal.component';


@NgModule({
  imports: [ BrowserModule,
            FormsModule ],
  declarations: [ AppComponent,
                  MealsListComponent,
                EditMealComponent,
                                        ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
