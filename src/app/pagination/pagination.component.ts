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
  pageStart;
  constructor(private shopCartService: ShopCartService) {
    this.aryData = this.shopCartService.totalPage();
    const len = this.aryData['default'].length;
    this.numTotal = Math.floor(len / 5) + 1;
    this.page(1);
  }
  page(numStart) {
    this.pageStart = 1;
    const ary = [];
    for (let i = numStart; i < numStart + 5; i++) {
      if (i % 5 === 0) {
        for (let k = i; k < (i + 5); k++) {
          console.log(`${i / 5}_____${k - 5}`);
        }
      }
      if (i === numStart) {
        ary.push({ num: i, active: true });
      } else {
        ary.push({ num: i, active: false });
      }

    }
    this.aryPage = ary;
  }
  ngOnInit() {
  }
  pageChanged(page: Page) {
    console.log(page);
    this.aryPage = this.aryPage.map(item => {
      if (item.active === true) {
        item.active = !item.active;
      }
      if (item.num === page.num) {
        page.active = !page.active;
        this.numPage.emit(page.num);
      }
      return item;
    });

  }
  pre(event) {
    console.log(event);

    const num = event[0].num - 5;
    if (num < 1) {
      return;
    }
    event[4].num = num;
    this.pageChanged(event[4]);
    this.page(num);
  }
  next(event) {
    const num = event[4].num + 1;
    event[4].num = num;
    this.pageChanged(event[4]);
    this.page(num);
  }

}
