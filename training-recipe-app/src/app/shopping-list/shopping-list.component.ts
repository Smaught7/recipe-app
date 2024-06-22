import { Component } from '@angular/core';
import { Ingredients } from '../models/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
})
export class ShoppingListComponent {
  ingredients: Ingredients[] = [
    { name: 'Apples', amount: 5 },
    { name: 'Tomatoes', amount: 15 },
    { name: 'Chicken breast', amount: 1 },
  ];
}
