import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ShopCartService } from '.././shop-cart.service';
export interface Page {
  num: number;
  active: boolean;
}
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Output() numPage: EventEmitter<Number> = new EventEmitter();
  aryData = [];
  numTotal: number;
  isActive: boolean;
  aryPage: Page[];
  constructor(private shopCartService: ShopCartService) {
    this.aryData = this.shopCartService.totalPage();
    const len = this.aryData['default'].length;
    this.numTotal = Math.floor(len / 5) + 1;
    const ary = [];
    for (let i = 0; i < this.numTotal; i++) {
      if (i + 1 === 1) {
        ary.push({ num: i + 1, active: true });
      } else {
        ary.push({ num: i + 1, active: false });
      }

    }
    this.aryPage = ary;
  }
  ngOnInit() {
  }
  pageChanged(page: Page) {
    this.aryPage = this.aryPage.map(item => {
      if (item.active === true) {
        item.active = !item.active;
      }
      if (item.num === page.num) {
        page.active = !page.active;
        this.numPage.emit(page.num);
      }
      console.log(item);
      return item;
    });

  }

}
