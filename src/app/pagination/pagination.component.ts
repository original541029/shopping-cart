import { Component, OnInit } from '@angular/core';
import { ShopCartService } from '.././shop-cart.service';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  aryData = [];
  numTotal: number;
  constructor(private shopCartService: ShopCartService) { }

  ngOnInit() {
    this.aryData = this.shopCartService.aryItem();
    const len = this.aryData['default'].length;
    this.numTotal = Math.floor(len / 5) + 1;
    console.log(this.numTotal);
  }

}
