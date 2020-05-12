import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-samsara',
  templateUrl: './samsara.component.html',
  styleUrls: ['./samsara.component.css']
})
export class SamsaraComponent implements OnInit {

  public foods = ['pizza', 'salad', 'tuna'];

  constructor(public foodService: FoodService) {
  }

  ngOnInit(): void {
  }
}
