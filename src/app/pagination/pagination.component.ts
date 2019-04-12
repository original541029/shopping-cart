import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ShopCartService } from '.././shop-cart.service';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Output() numPage: EventEmitter<Number> = new EventEmitter();
  aryData = [];
  numTotal: number;
  constructor(private shopCartService: ShopCartService) {
    this.aryData = this.shopCartService.totalPage();
    const len = this.aryData['default'].length;
    this.numTotal = Math.floor(len / 5) + 1;
  }
  counter(i: number) {
    return new Array(i);
  }
  ngOnInit() {
    // this.aryData = this.shopCartService.aryItem(1,6);

  }
  pageChanged($event) {
    const num = Number($event.target.textContent);
    this.numPage.emit(num);
  }

}
