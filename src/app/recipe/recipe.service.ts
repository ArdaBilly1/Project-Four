import { Injectable,EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slsService:ShoppingListService) {}

  recipes:Recipe[]=[
    new Recipe('Hamburger','Ini Makanan Orang luar negeri',
    'https://www.recipetineats.com/wp-content/uploads/2016/02/Beef-Hamburgers_7-2-731x1024.jpg',[
      new Ingredient('meal',1),
      new Ingredient('tomato',2)
    ]),
    new Recipe('Mie Ayam','Mangano iki lo seng nriman dadi arek iku','../src/app/img/mie ayam.jpg',[
      new Ingredient('Pangsit',2),
      new Ingredient('Sawi',3)
    ])
  ];

  getRecipes(){
    return this.recipes.slice();
  }
  addIngredientsShoppingList(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }

 

}
