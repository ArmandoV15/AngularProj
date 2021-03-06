import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Chicken', 5),
    new Ingredient('Cheese', 3)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIgrediantAdded(ingrediant: Ingredient){
    this.ingredients.push(ingrediant);
  }
}
