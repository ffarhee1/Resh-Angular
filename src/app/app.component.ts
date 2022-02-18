import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pa-starter-angular';
  recipeName: any;
  recipeDescription: any;
  hideForm = false;
  noRecipe = true;


  onSubmit(name: string, instructions: string): void {
    this.recipeName = name;
    this.recipeDescription = instructions;
    this.hideForm = false;
    this.noRecipe = false;
  }
}

