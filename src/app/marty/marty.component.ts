import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-marty',
  templateUrl: './marty.component.html',
  styleUrls: ['./marty.component.css']
})
export class MartyComponent implements OnInit {

  constructor(public foodService: FoodService) {
  }

  ngOnInit(): void {
  }

}
