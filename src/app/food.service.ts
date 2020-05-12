import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  public food = 'burger';

  constructor() { }
}

// Singleton - only one instance
